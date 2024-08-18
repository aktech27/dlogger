import { LoggerConstructorProps, LogType } from "./types";

class Logger {
  timestamps: boolean;
  colors: boolean;

  constructor(options?: LoggerConstructorProps) {
    let opts = { timestamps: true, colors: true, ...options }
    this.timestamps = opts.timestamps;
    this.colors = opts.colors;
  }
  paramsFormatter(params: any[]) {
    return params.map((p) => ((typeof p) === 'object' ? JSON.stringify(p) : p)).join(' ');
  }

  logTypeFormatter(type: LogType) {
    let text = '';
    if (this.colors) {
      switch (type) {
        case 'ERROR':
          text = '\x1b[31m';
          break;
        case 'WARN':
          text = '\x1b[33m';
          break;
        case 'INFO':
          text = '\x1b[34m';
          break;
        default:
          break;
      }
    }
    text += `[${type}]`;
    return text;
  }

  print(type: LogType, message: string) {
    let text = '';
    if (this.timestamps) {
      text = `\x1b[35m${new Date().toISOString()}\x1b[0m | `;
    }
    text += `${this.logTypeFormatter(type)} ${message}\x1b[0m`;
    console.log(text);
  }

  log(...params: any[]) {
    this.print('LOG', this.paramsFormatter(params));
  }

  here(...params: any[]) {
    console.log('\n\n\n<----Here---->');
    this.print('LOG', this.paramsFormatter(params));
    console.log('<------------>\n\n\n');
  }

  error(...params: any[]) {
    this.print('ERROR', this.paramsFormatter(params));
  }

  warn(...params: any[]) {
    this.print('WARN', this.paramsFormatter(params));
  }

  info(...params: any[]) {
    this.print('INFO', this.paramsFormatter(params));
  }
}

export { LoggerConstructorProps };

export default Logger;

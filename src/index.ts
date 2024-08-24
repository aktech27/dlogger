import { LoggerConstructorProps, LogType } from "./types";

export class Logger {
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

  mongoParamsFormatter(params: any[]) {
    return `Executing: db.${params[0]}.${params[1]}(${JSON.stringify(params[2])},${JSON.stringify(params[3])})`;
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
        case 'SQL':
        case 'MONGO':
          text = '\x1b[32m';
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

  sqlLog(args: any[]) {
    if (args.length > 2) { // Benchmark ms is present
      this.print('SQL', this.paramsFormatter([args[0], `\x1b[0m- ${args[1]}ms`]));
    } else {
      this.print('SQL', this.paramsFormatter([args[0]]));
    }
  }

  mongoLog(args: any[]) {
    this.print('MONGO', this.mongoParamsFormatter(args));
  }
}

export { LoggerConstructorProps };

export default Logger;

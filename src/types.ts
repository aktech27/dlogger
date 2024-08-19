interface LoggerConstructorProps {
  timestamps?: boolean;
  colors?: boolean;
}

type LogType = 'LOG' | 'INFO' | 'WARN' | 'ERROR' | 'SQL';

export { LoggerConstructorProps, LogType }
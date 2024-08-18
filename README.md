
# DLogger

A zero-dependency, developer-friendly logger for Node.js applications. This logger provides simple methods for logging messages with optional timestamps and color coding, making it easy to integrate and use in any Node.js project.


## Features

- **Zero Dependencies**: No external packages required.
- **Simple API**: Methods for logging messages at different levels (`log`, `info`, `warn`, `error`).
- **Optional Timestamps**: Include or exclude timestamps in log messages.
- **Color-Coded Output**: Enable or disable color-coded log levels for terminal output.

## Disclaimer

This logger uses `console.log()` under the hood for outputting messages to the terminal. As a result, log messages will appear in the console as if they were printed directly by `console.log()`, with the added functionality of timestamps and color coding.


## Installation

Install dlogger with npm

```bash
  npm i @aktech27/dlogger
```
or using yarn

```bash
  yarn add @aktech27/dlogger
```


## Usage/Examples

Create an instance and use on the go

```javascript
import Logger from '@aktech27/dlogger';

const logger = new Logger();

logger.log('This is a log message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

export default logger;
```

or if you have a configuration for logger, go to the configuration file, ideally  `logger.config.js` and export it from there.
## Configuring the Logger instance
The Logger class accepts `options`(optional) object as constructor params.

**options** (optional): An object to customize the logger's behavior.
  - **timestamps** (`boolean`, default: `true`): Whether to include timestamps in log messages.
  - **colors** (`boolean`, default: `true`): Whether to color-code log levels in terminal output.

```javascript
import Logger from '@aktech27/dlogger';

const logger = new Logger({ timestamps: false, colors: false });

export default logger;
```

### CommonJS Example

```javascript
const { Logger } = require('@aktech27/dlogger');

const logger = new Logger();

logger.log('This is a log message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

module.exports = logger;
```


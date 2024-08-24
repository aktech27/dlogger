
# DLogger

A zero-dependency, developer-friendly logger for Node.js applications. This logger provides simple methods for logging messages with optional timestamps and color coding, making it easy to integrate and use in any Node.js project.


## Features

- **Zero Dependencies**: No external packages required.
- **Simple API**: Methods for logging messages at different levels (`log`, `info`, `warn`, `error`).
- **Optional Timestamps**: Include or exclude timestamps in log messages.
- **Color-Coded Output**: Enable or disable color-coded log levels for terminal output.
- **SQL Logging**: Special support for logging SQL queries, especially useful with Sequelize.
- **Mongoose Logging**: Special support for logging MongoDB queries while using mongoose.


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

### ES6+ Example

```javascript
import Logger from '@aktech27/dlogger';

const logger = new Logger();

logger.log('This is a log message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

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

## Using with sequelize for SQL query

`DLogger` can also be integrated with Sequelize to log SQL queries, providing a clear, color-coded view of the queries being executed using the `sqlLog` method.

[Refer Sequelize Documentation](https://sequelize.org/docs/v6/getting-started/#logging)


### Example Usage
```javascript
const { Logger } = require('@aktech27/dlogger');
const { Sequelize } = require('sequelize');

const logger = new Logger();

const sequelize = new Sequelize('your_db_uri', {
  logging: (...msg) => logger.sqlLog(msg),
  benchmark: true // Optional - but works with bench mark too
});

```

## Using with mongoose for MongoDB query

`DLogger` can also be integrated with mongoose to log MongoDB queries, providing a clear, color-coded view of the queries being executed using the `mongoLog` method.

[Refer Mongoose Documentation](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.set())


### Example Usage
```javascript
const { Logger } = require('@aktech27/dlogger');
const mongoose = require('mongoose');

const logger = new Logger();

mongoose.connect('your_mongo_uri')
mongoose.set('debug', (...msg) => logger.mongoLog(msg));

```

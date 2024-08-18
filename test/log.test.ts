import Logger from '../src';

const defaultLogger = new Logger();
const plainLogger = new Logger({ colors: false });
const noTimeLogger = new Logger({ timestamps: false });

defaultLogger.log("This is a test log");
defaultLogger.info("This is a test log");
defaultLogger.warn("This is a test log");
defaultLogger.error("This is a test log");

plainLogger.log("This is a test log");
plainLogger.info("This is a test log");
plainLogger.warn("This is a test log");
plainLogger.error("This is a test log");

noTimeLogger.log("This is a test log");
noTimeLogger.info("This is a test log");
noTimeLogger.warn("This is a test log");
noTimeLogger.error("This is a test log");

defaultLogger.here("Help me")
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';
import createError from 'http-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from '../swagger';
import routes from './routes';
import Constants from './config/Constants';
import { Database } from './db/connection';

const app = express();
Database.connect();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Minutes
  max: 50, // limit each IP to 50 requests per windowMs
});

// app.use(compression()); // use compression
app.use(bodyParser.json({ limit: '50mb', strict: false }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: 'http://localhost:5000/' }));
app.use(logger('dev'));
app.use(limiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  res.status(err.status || 500).json(err.message);
});

//const PORT = 3000;
app.listen(Constants.PORT(), () => {
  console.log(`app is listening on PORT = ${Constants.PORT()}`);
});

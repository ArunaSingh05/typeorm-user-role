import 'reflect-metadata';
import * as express from 'express';

import router from './routers';
import AppConfig from './config/app-config';
import dataSource from './data-source';
import errorsHandler from './middlewares/error-handler';


const app = express();

app.use(express.json());

dataSource.connect().then(
  () => {
    app.use(errorsHandler);
    app.use('/api/v1', router);
    app.listen(AppConfig.PORT, async () => {
      console.log(`Server running at http://localhost${AppConfig.PORT}`);
    });
  }
);











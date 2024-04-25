import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

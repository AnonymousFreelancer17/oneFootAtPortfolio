import express from 'express';
import router from './routes/router';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors())

app.use('/', router);

const port = process.env.SCRAPPER_SERVICE_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

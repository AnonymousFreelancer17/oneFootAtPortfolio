import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import router from './routes/router';
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors())

dotenv.config();

const services = {

   auth : {
    target : process.env.AUTH_SERVICE_URL,
    changeOrigin : true,
    pathRewrite: {
      '^/auth': '/auth'
    },
   },
   scrapper : {
    target : process.env.SCRAPPER_SERVICE_URL,
    changeOrigin : true,
    pathRewrite: {
      '^/scrapper': '/scrapper'
    },
   },

}

app.use('/auth', createProxyMiddleware(services.auth));

app.use('/scrapper', createProxyMiddleware(services.scrapper));

app.use('/api' , router);


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api-gateway!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

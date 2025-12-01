import express from 'express';
import router from "./routes/auth.routes";
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())

 
app.use('/',router);

const port = process.env.AUTH_SERVICE_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at AUTH_SERVICE_SERVER - http://localhost:${port}/api`);
});
server.on('error', console.error);

import express from 'express';
import router from "./routes/auth.routes";
import cors from 'cors'
import dotenv from 'dotenv';
import {errorHandler} from  "../../../libs/error_handler/src/handler";
import {testDB} from "./test/test-db";

dotenv.config();


const app = express();


app.use(express.json());
app.use(cors())

 
app.use('/',router);

app.use(errorHandler);

testDB();

const port = process.env.AUTH_SERVICE_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at AUTH_SERVICE_SERVER - http://localhost:${port}/api`);
});
server.on('error', console.error);

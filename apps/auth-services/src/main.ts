import express from 'express';


const app = express();


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to auth-services!' });
});

const port = process.env.AUTH_SERVICE_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

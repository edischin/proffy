import express from 'express';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Heya Globe' });
});

app.listen(port);
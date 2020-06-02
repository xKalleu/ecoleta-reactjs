import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de usuários');

  res.json([
    'Davi',
    'Lidy',
    'Edy'
  ]);
});

app.listen(3333);
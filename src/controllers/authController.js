const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/registrer', async (req, res) => {
  try {
    const User = await User.create(req.body)
// tratamento de erro no registro
    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed' })
  }
});


// repassando as rotas para o app
module.exports = app => app.use('/auth', router)
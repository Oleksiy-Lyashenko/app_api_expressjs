import express from 'express';

const router = express.Router();

// В данно мпримере мы повесили обработчик только на router, то бишь он будет выполнятся только при заходе на url router
router.use((req, res, next) => {
  console.log('Router');
  next();
})

router.post('/login', (req, res) => {
  res.send('login')
})

router.post('/register', (req, res) => {
  res.send('register');
})

export { router };

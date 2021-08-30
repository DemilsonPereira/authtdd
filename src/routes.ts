import { Router } from 'express';
import { User } from './app/models';

const router = Router();

router.get('/test', (req, res) => {
  return res.json({ msg: 'Routers On 😎!' })
});

router.get('/user', (req, res) => {
  return User.create({
    name: 'Demilson',
    email: 'demilson@gmail.com',
    password_hash: '123456'
  })
})

export {
  router
}

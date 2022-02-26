import { Router } from 'express'

const router = Router();

router.post('/users',(req,res)=> res.status(200).send());
router.post('/users/register',(req,res)=> res.status(200).send());

router.post('/classes',(req,res)=> res.status(200).send());
router.get('/classes',(req,res)=> res.status(200).send());
router.get('/classes/:id',(req,res)=> res.status(200).send());
router.put('/classes',(req,res)=> res.status(200).send());
router.delete('/classes/:id',(req,res)=> res.status(200).send());

router.post('/classes/:id_class/comments',(req,res)=> res.status(200).send());
router.get('/classes/:id_class/comments',(req,res)=> res.status(200).send());
router.delete('/classes/id_class/comments/:id',(req,res)=> res.status(200).send());








export {router} 
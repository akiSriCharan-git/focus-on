const express = require('express');
const router = express.Router();
const pageModels = require('./../models/schemas');
router.get('/', async(req, res)=>{
  try{
    const homePage = await pageModels.Home.findOne()
    return res.status(200).json(homePage)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
});

router.post('/', async(req, res)=>{
  try{
    const homePage = new pageModels.Home(req.body);
    homePage.save()
    .then(()=>{
      return res.status(201).json(homePage)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
});

router.patch('/:key1/:key2?', async(req, res)=>{
  try{
    const homePage = await pageModels.Home.findOne()
    if (!req.params.key2){
      homePage[req.params.key1].push(req.body)
    }else{
      homePage[req.params.key1][req.params.key2].push(req.body)
    }
    homePage.save()
    .then(()=>{
      return res.status(201).json(homePage)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
})

module.exports = router;

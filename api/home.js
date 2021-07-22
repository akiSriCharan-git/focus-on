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
})

module.exports = router;

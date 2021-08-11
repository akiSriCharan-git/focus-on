const express = require('express');
const router = express.Router();
const pageModels = require('./../models/schemas');
router.use('/', require('./product page apis'));
router.get('/:page', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    return res.status(200).json(page)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
});

router.post('/:page', async(req, res)=>{
  try{
    const page = new pageModels[req.params.page](req.body);
    page.save()
    .then(()=>{
      return res.status(201).json(page)
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

router.post('/:page/:key1/:key2?', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    if (!req.params.key2){
      page[req.params.key1].push(req.body)
    }else{
      page[req.params.key1][req.params.key2].push(req.body)
    }
    page.save()
    .then(()=>{
      return res.status(201).json(page)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.delete('/:page/:key1/:key2?', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    if (!req.params.key2){
      page[req.params.key1].splice(page[req.params.key1].findIndex(a => a._id == req.query.id), 1)
    }else{
      page[req.params.key1][req.params.key2].splice(page[req.params.key1][req.params.key2].findIndex(a => a._id == req.query.id), 1)
    }
    page.save()
    .then(()=>{
      return res.status(200).json(page)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.patch('/:page', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOneAndUpdate({}, {$set: req.body}, {new: true})
    return res.status(201).json(page)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
});

router.patch('/:page/:key1/:key2?', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOne()
    if(!req.params.key2){
      const index = page[req.params.key1].findIndex(a => a._id == req.query.id)
      page[req.params.key1][index] = req.body
    }else{
      const index = page[req.params.key1][req.params.key2].findIndex(a => a._id == req.query.id)
      page[req.params.key1][req.params.key2][index] = req.body
    }
    page.save()
    .then(()=>{
      return res.status(200).json(page)
    })
    .catch(err=>{
      console.log(err)
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});



module.exports = router;

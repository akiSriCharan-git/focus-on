const express = require('express');
const router = express.Router();
const pageModels = require('./../models/schemas');

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

router.patch('/:page/:key1/:key2?', async(req, res)=>{
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
      page[req.params.key1].splice(req.query.index)
    }else{
      page[req.params.key1][req.params.key2].splice(req.query.index)
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

router.put('/:page', async(req, res)=>{
  try{
    const page = await pageModels[req.params.page].findOneAndUpdate({}, req.body, {new: true})
    return res.status(201).json(page)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
})

module.exports = router;

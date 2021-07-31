const express = require('express');
const CaseStudy = require('./../models/caseStudy');
const router = express.Router();

router.get('/', async(req, res)=>{
  try{
    const caseStudies = await CaseStudy.find();
    return res.status(200).json(caseStudies)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
});

router.post('/', async(req, res)=>{
  try{
    const new_caseStudy = new CaseStudy(req.body);
    new_caseStudy.save()
    .then(()=>{
      return res.status(201).redirect('/CaseStudy')
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.patch('/:id', async(req, res)=>{
  try{
    CaseStudy.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(()=>{
      return res.status(200).redirect('/CaseStudy')
    })
    .catch(err=>{
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.delete('/:id', async(req, res)=>{
  try{
    CaseStudy.findOneAndDelete({_id: req.params.id})
    .then(()=>{
      return res.status(200).redirect('/CaseStudy')
    })
    .catch(err=>{
      return res.sendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.status(400)
  }
});

module.exports = router;

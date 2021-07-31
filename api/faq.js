const express = require('express');
const Faq = require('./../models/faq');
const router = express.Router();

router.get('/', async(req, res)=>{
  try{
    const faq_list = await Faq.find();
    const section_set = new Set();

    await faq_list.map((i)=>{
      section_set.add(i.section)
    })
    section_array = Array.from(section_set)
    return res.status(200).json({faq_list: faq_list, sections: section_array})
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
});

router.get('/:section', async(req, res)=>{
  try{
    const faq_list = await Faq.find({section: req.params.section})
    return res.status(200).json(faq_list)
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});

router.post('/', async(req, res)=>{
  try{
    const new_faq = new Faq(req.body)
    new_faq.save()
    .then(()=>{
      return res.status(201).redirect('/Faq/'+req.body.section)
    })
    .catch(err=>{
      return res.SendStatus(500)
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(400)
  }
});
router.patch('/:id', async(req, res)=>{
  try{
    Faq.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(()=>{
      return res.status(200).redirect('/Faq/'+req.body.section)
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

router.delete('/:id', async(req, res)=>{
  try{
    Faq.findOneAndDelete({_id: req.params.id})
    .then(()=>{
      return res.status(200).redirect('/Faq')
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

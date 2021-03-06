const mongoose = require('mongoose');
const home = {
  mainHeading: String,  //heading1
  heading2: {           //main drivers
    name: String,
    content: [
      {
        image: String,
        name: String,
        text: String
      }
    ]
  },
  benefits: [
    {
      heading: String,
      text: String,
      image: String
    }
  ],
  awards:{
    image: String,
    text1: String,
    text2: String
  },
  caseStudies: [
    {
      image: String,
      heading: String,
      subHeading: String,
      text: String,
      link: String
    }
  ],
  reviews:[
    {
      text: String,
      image: String,
      name: String,
      position: String
    }
  ],
  heading3: {       // learn more about focus-1
    name: String,
    text: String,
    content: [
      {
        image: String,
        name: String,
        link: String
      }
    ]
  }
}

const whatDrivesUs = {
  section1: {        //Global Trends
    name: String,
    text: String,
    subheading: {      // The opportunity
      name: String,
      text1: String,
      text2: String
    }
  },
  carouselItems: [
    {
      rightText: String,
      name: String,
      image: String,
      text: String,
      bgimage: String
    }
  ],
  section2: {    // IIOT
    name: String,
    text1: String,
    text2: String,
    text3: String,
    text4: String
  },
  section3: [
    {
      heading: String,
      mainText: String,
      subHeading: String,
      text1: String,
      text2: String,
      text3: String
    }
  ]
}

const markets = {
  heading: String,
  text: String,
  markets: [
    {
      name: String,
      image: String,
      link: String
    }
  ]
}

const product = {
  section1: String,
  section2: String,
  section3: String,
  section4: String,
  section5: String,
  section6: String,
  section7: {
    name: String,
    properties: [
      {
        name: String,
        value: Number,
        units: String
      }
    ]
  },
  section8: String,
  section9: {
    name: String,
    cards: [
      {
        name: String,
        content: [
          {
            name: String,
            stars: Number
          }
        ],
        image: String
      }
    ]
  },
  section10:{
    name: String,
    cards: [
      {
        name: String,
        availability: String,
        image: String,
        properties: [
          {
            name: String,
            value: String
          }
        ],
        documentation: String
      }
    ]
  },
  caseStudies:[
  {
    heading: String,
    subheading: String,
    context: String,
    image: String,
    link: String
  }
],
  employee: {
    name: String,
    image: String,
    position: String,
    email: String,
    phone: String,
  },
  bottom: {
    text1: String,
    text2: String,
    link: String
  }
}

const services = {
  precapex: {
    traditional: Number,
    focusOne: Number,
    dropDown: [
      {
        heading: String,
        text: String
      }
    ]
  },
  capex: {
    taditional: Number,
    focusOne: Number,
    dropDown: [
      {
        heading: String,
        text: String
      }
    ]
  },
  postcapex: {
    traditional: Number,
    focusOne: Number,
    dropDown: [
      {
        heading: String,
        text: String
      }
    ]
  },
  employee: {
    name: String,
    image: String,
    position: String,
    email: String,
    phone: String,
  }
}

const about = {
  heading1: {             // vision, mission, responsibility
    name: String,
    text1: String,
    text2: String,
    text3: String
  },
  awards: [
    {
      name: String,
      date: String,
      text: String,
      image: String
    }
  ],
  heading2: {      //focus on
    name: String,
    text: String
  },
  team: {
    text: String,
    members: [
      {
        name: String,
        image: String,
        position: String
      }
    ]
  },
  heading3: {     // work culture
    name: String,
    text1: String,
    text2: String,
    text3: String
  },
  comments: [
    {
      comment: String,
      name: String,
      position: String
    }
  ]
}

const contact = {
  generalEnquiries: String,
  marketing: String
}

const career = {
  heading1: {
    name: String,
    text: String
  },
  jobs: [
    {
      jobTitle: String,
      description: String,
      location: String,
      downloadLink: String
    }
  ]
}


const documentation = {
  documentation: [
    {
        dataSheet: String,
        date: String,
        pdf: String
      }
  ]
}
// const homeSchema = new mongoose.Schema(home);
// const whatDrivesUsSchema = new mongoose.Schema(whatDrivesUs);
// const marketsSchema = new mongoose.Schema(markets);
// const productSchema = new mongoose.Schema(products);
// const servicesSchema == new mo

const Home = mongoose.model('Home', new mongoose.Schema(home), 'home');
const WhatDrivesUs = mongoose.model('WhatDrivesUs', new mongoose.Schema(whatDrivesUs), 'whatDrivesUs');
const Markets = mongoose.model('Markets', new mongoose.Schema(markets), 'markets');
const Product = mongoose.model('Product', new mongoose.Schema(product), 'product');
const Services = mongoose.model('Services', new mongoose.Schema(services), 'services');
const About = mongoose.model('About', new mongoose.Schema(about), 'about');
const Contact = mongoose.model('Contact', new mongoose.Schema(contact), 'contact');
const Career = mongoose.model('Career', new mongoose.Schema(career), 'career');
const Documentation = mongoose.model('Documentation', new mongoose.Schema(documentation), 'documentation');
module.exports = {Home, WhatDrivesUs, Markets, Product, Services, About, Contact, Career, Documentation};

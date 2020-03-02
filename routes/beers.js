const express = require('express');
const router = express.Router();

const beers = [
  { "id": "1",
    "name": "512 IPA",
    "reviews": [
      { "text": "delicious" }
    ]
  },
  { "id": "2",
    "name": "Durty Bull Brett",
    "reviews": [
      { "text": "why is Brett in the name?" },
      { "text": "Brett, or brat? Yuck!" },
      { "text": "Mmmm this is so good." },
      { "text": "Q Dogs!" },
      { "text": "^ Megan, is that you!?" }
    ]
  },
  { "id": "3",
    "name": "Dogfish Head 90 Minute IPA",
    "reviews": []
  },
  { "id": "4",
    "name": "Chocolate stout",
    "reviews": [
      { "text": "too much Chocolate" },
      { "text": "so yummy" },
      { "text": "the best!" }
    ]
  }
];

router.param('beer', function(req, res, next, id) {
  req.beer = beers.find(beer => beer.id === id);

  next();
});

router.get('/beers', (req, res) => {
  res.send(beers);
});

router.get('/', (req, res) => {
  res.send('hello from beers!');
});

router.get('/:beer', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

router.get('/:beer/reviews', (req, res) => {
  res.json(req.beer.reviews);
  
});

router.post('/beers', (req, res) => {
  beers.push(req.body);
  res.json(beers);
})

router.post('/beers/:beer/reviews', (req, res) => {
  req.beer.reviews.push(req.body)
  res.json(beers);
})

router.put('/beers/:beer', (req, res) => {
  console.log(req.beer)
  console.log(req.body) 
  req.beer = req.body
  res.json(beers);
})

module.exports = router;
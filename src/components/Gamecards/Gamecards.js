import React from 'react';

let Gamecards = [
  {
    src: "./img/1.jpg",
    clicked: false
  },
  {
    src: "./img/2.jpg",
    clicked: false
  },
  {
    src: "./img/3.jpg",
    clicked: false
  },
  {
    src: "./img/4.jpg",
    clicked: false
  },
  {
    src: "./img/5.jpg",
    clicked: false
  },
  {
    src: "./img/6.jpg",
    clicked: false
  },
  {
    src: "./img/7.jpg",
    clicked: false
  },
  {
    src: "./img/8.jpg",
    clicked: false
  },
  {
    src: "./img/9.jpg",
    clicked: false
  },
  {
    src: "./img/10.jpg",
    clicked: false
  },
  {
    src: "./img/11.jpg",
    clicked: false
  },
  {
    src: "./img/12.jpg",
    clicked: false
  }
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  Gamecards = shuffle(Gamecards);
  console.log(Gamecards);

  export default Gamecards;
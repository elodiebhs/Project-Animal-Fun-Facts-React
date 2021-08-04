import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = (<img
  className="background"
  alt="ocean"
  src="/images/ocean.jpg" />)


function displayFact(event) {
  // targets {animal} in animal image array alt
  const facts = animals[event.target.alt].facts;
  // generates a random index based on animal facts array length
  const randomFactIndex = Math.floor(Math.random() * facts.length)
  const fact = facts[randomFactIndex];
  document.getElementById('fact').innerHTML = fact;
  }

const images =[];
for (const animal in animals) {
  images.push( 
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact}
    />
  )
}


const animalFacts = (
  <div>
    <h1>
      {title === "" ? 'Click an animal for a fun fact!' : title}
    </h1>
    {background}
    <p id='fact'></p>
    <div classeName='animals'>
      {images}
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'))

import React from 'react';
import PropTypes from 'prop-types';

const movieILike = [
  {
    id: 1,
    name: "Star Wars",
    image: "https://awesomewallpaper.files.wordpress.com/2011/01/star_wars.jpg",
    rating: 4.7
  },
  {
    id: 2,
    name: "The Lord of the Rings",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873821/the-lord-of-the-rings-9781608873821_hr.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Harry Potter",
    image: "https://static.booktopia.com.au/internals/9781608871131-1.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Hobbit",
    image: "https://jessmountifield.co.uk/wp-content/uploads/2015/01/Hobbit-Dwarves.jpg",
    rating: 4.7
  }
];

function Movie({ name, image, rating }) {
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {movieILike.map(movie => (
        <Movie key={movie.id} name={movie.name} image={movie.image} rating={movie.rating} />
      ))}
    </div>
  );
}

export default App;
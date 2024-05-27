import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-primary mr-2">Home</Link>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>

      <h1 className="display-4 text-center my-4">Discover Wagunda: Your Ideal Rental Apartment Destination</h1>
      <p className="lead text-center mb-4">Finding the perfect rental apartment can be a daunting task, but Wagunda stands out as a haven for those seeking comfort, convenience, and community. Located in the heart of a vibrant neighborhood, Wagunda rental apartments offer a unique blend of modern amenities and serene living. Whether you’re a young professional, a growing family, or someone looking to downsize, Wagunda has something special to offer.</p>
      
      <div className="row">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/5008399/pexels-photo-5008399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blue House on Green Lawn" className="img-fluid rounded mb-4" />
        </div>
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Concrete House with Attic" className="img-fluid rounded mb-4" />
        </div>
      </div>

      <div>
        <h2 className="text-center mt-5">About Wagunda Apartments:</h2>
        <p className="lead text-center mb-4">Nestled in the heart of the city, Wagunda Apartments offer a contemporary living experience designed for modern lifestyles. With spacious floor plans, upscale amenities, and a prime location, Wagunda sets the standard for luxury apartment living.</p>
      </div>

      <div className="text-center mt-5">
        <h2>Connect With Us:</h2>
        <p>Follow us on social media for the latest updates, resident events, and exclusive offers:</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/wagundaapartments" target="_blank" rel="noopener noreferrer">@wagundaapartments</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/WagundaApartments" target="_blank" rel="noopener noreferrer">/WagundaApartments</a></p>
        <p><strong>Twitter:</strong> <a href="https://twitter.com/WagundaLiving" target="_blank" rel="noopener noreferrer">@WagundaLiving</a></p>
      </div>

      <p className="text-center mt-4">Welcome Home to Wagunda Apartments – Where Luxury Meets Lifestyle!</p>
    </div>
  );
}

export default Home;















import imggigi from './assets/imggigi.webp'
import './hero.css'
const Hero = () => {
  return (
    <section className="hero">
      {/* Left Side - Image */}
      <div className="hero__image-side">
        <img src={imggigi} alt="Hero Fashion" className="hero__img" />
      </div>

      {/* Right Side - Text */}
      <div className="hero__content-side">
        <div className="hero__tag-row">
          <span className="hero__dot"></span>
          <p className="hero__tag">Our Bestsellers</p>
        </div>

        <h1 className="hero__heading">Latest <br /> Arrivals</h1>

        <div className="hero__shop-row">
          <p className="hero__shop-text">Shop Now</p>
          <span className="hero__line"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
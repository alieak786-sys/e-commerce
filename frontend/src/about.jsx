import "./About.css"
import Title from "./title"

const About = () => {
  return (
    <div className="about">

      {/* Title */}
      <div className="about__title">
        <Title txt1={'ABOUT'} txt2={'US'} />
      </div>

      {/* Top Section */}
      <div className="about__top">
        <div className="about__img-side">
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600" alt="about" className="about__img" />
        </div>
        <div className="about__text-side">
          <p className="about__para">Shopora was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p className="about__para">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <h3 className="about__mission-title">Our Mission</h3>
          <p className="about__para">Our mission at Shopora is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about__why">
        <div className="about__why-title">
          <Title txt1={'WHY'} txt2={'CHOOSE US'} />
        </div>
        <div className="about__why-grid">
          <div className="about__why-card">
            <span className="about__why-icon">✦</span>
            <h4>Quality Assurance</h4>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="about__why-card">
            <span className="about__why-icon">✦</span>
            <h4>Convenience</h4>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="about__why-card">
            <span className="about__why-icon">✦</span>
            <h4>Customer Service</h4>
            <p>Our team of dedicated professionals is here to assist you always, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
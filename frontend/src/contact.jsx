import Title from "./title"

const Contact = () => {
  return (
    <div className="contact">

      <div className="contact__title">
        <Title txt1={'CONTACT'} txt2={'US'} />
      </div>

      <div className="contact__body">

        {/* Left - Image */}
        <div className="contact__img-side">
          <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600" alt="contact" className="contact__img" />
        </div>

        {/* Right - Info */}
        <div className="contact__info">

          <div className="contact__store">
            <h3 className="contact__heading">Our Store</h3>
            <p className="contact__para">54709 Willms Station</p>
            <p className="contact__para">Suite 350, Washington, USA</p>
            <p className="contact__para">Tel: (415) 555-0132</p>
            <p className="contact__para">Email: admin@shopora.com</p>
          </div>

          <div className="contact__careers">
            <h3 className="contact__heading">Careers at Shopora</h3>
            <p className="contact__para">Learn more about our teams and job openings.</p>
            <button className="contact__btn">Explore Jobs</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
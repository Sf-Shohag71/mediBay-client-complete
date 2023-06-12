import "./About.css";
const About = () => {
  return (
    <>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="imgContainer">
            <img
              className="blueDots"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
            />
            <img
              className="mainImg"
              src="https://i.ibb.co/8jyqgSv/banner-2.jpg"
            />
          </div>
          <div className="responsive-container-block textSide">
            <p className="text-blk heading">About Us</p>
            <p className="text-blk subHeading">
            Medibay medical e-commerce refers to the buying and selling of medical products, equipment, 
            or services through online platforms. It can involve various aspects of the 
            healthcare industry, including pharmaceuticals, medical devices, 
            home healthcare products, and more. Medical e-commerce platforms often 
            provide a convenient way for healthcare professionals, patients, and
             businesses to connect and transact in a digital environment.
            </p>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Customer-centricity</p>
                <p className="text-blk cardSubHeading">
                Provide exceptional customer service and prioritize customer feedback.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Trust and Integrity</p>
                <p className="text-blk cardSubHeading">
                Transparency, honesty, and ethical practices are essential for integrity.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Innovation</p>
                <p className="text-blk cardSubHeading">
                Innovation to improve customer experience, product offerings, and healthcare solutions.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Quality and Safety</p>
                <p className="text-blk cardSubHeading">
                Adhering to industry standards to ensure safety and efficacy of products.
                </p>
              </div>
            </div>
            <a>
              <button className="explore">Explore our Services</button>
            </a>
          </div>
          <img
            className="redDots"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
          />
        </div>
      </div>
      <h2 className="team-title"><strong>Our Team</strong></h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://i.ibb.co/4FsC2Bd/Farukk.jpg" className="team-img" alt="Jane" />
            <div className="container">
              <h2>Md. Omor Faruk</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.ibb.co/Np9cPQp/Sanjoy.jpg" className="team-img" alt="Mike" />
            <div className="container">
              <h2>Sanjoy Chandra Roy</h2>
              <p className="title">Founder and Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://i.ibb.co/XXFG48N/Rakib-2.jpg" className="team-img" alt="John" />
            <div className="container">
              <h2>Rakibul Islam</h2>
              <p className="title">Founder and Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

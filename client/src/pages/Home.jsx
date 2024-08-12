import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Elevating IT to New Heights TechMinds is the Worlds Best IT
                Company
              </p>
              <h1>Welcome to TechMinds</h1>
              <p>
                TechMinds is at the forefront of innovation, redefining the IT
                landscape with cutting-edge solutions and unparalleled
                expertise. As the world’s best IT company, we are committed to
                elevating technology to new heights, delivering tailored
                services that drive success for businesses of all sizes. Our
                team of skilled professionals is dedicated to pushing the
                boundaries of whats possible, ensuring that our clients stay
                ahead in an ever-evolving digital world. At TechMinds, we dont
                just meet expectations – we exceed them, empowering
                organizations to thrive in the age of technology.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">contact us</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      

      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to to Support Your Success</p>
            <h1>Get Started Today</h1>
            <p>
              Are you ready to elevate your IT infrastructure and drive your
              business forward? At TechMinds, we specialize in crafting
              customized, secure, and efficient IT solutions that meet your
              unique needs. Reach out to us today for a free consultation, and
              let’s collaborate on strategies that will help your business not
              only survive but excel in the digital era. Your success is our
              mission, and were excited to embark on this journey with you
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">contact us</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

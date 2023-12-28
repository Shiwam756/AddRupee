import React from "react";
import careerImg from "../assets/careerImg.png";
import Footer from "../Components/Footer";
import NavbarComp from "../Components/Navbar";
import CareerFrom from "../Components/CareerFrom";
import addrupeeText from "../assets/addrupeeText.png";
import "./CareerPage.css";

export default function CareerPage() {
  return (
    <div style={{ backgroundColor: "#E7E5E5" }}>
      <NavbarComp />
      {/*  First page  */}

      <div className="firstContainer">
        <div className="careerFirstDiv">
          <h3 className="careerHeading">Join Our Team At</h3>
          <img
            style={{ height: "50px", width: "180px" }}
            className="careerImg"
            src={addrupeeText}
            alt="..."
          />
          <p style={{ fontSize: "1rem" }}>
            Welcome to the exciting journey of shaping the future of finance
            with AddRupee! We invite passionate individuals, both seasoned
            professionals and fresh talent, to join our dynamic team. Explore
            career opportunities that offer growth, innovation, and a chance to
            make a real impact in the world of financial services.
          </p>
          <a
            style={{
              backgroundColor: "#007C9C",
              padding: "10px",
              borderRadius: 15,
              border: "none",
              fontWeight: "bold",
              color: "white",
              marginTop: "40px",
              width: "160px",
              textDecoration: "none",
            }}
            href={"#applynow"}
          >
            Apply Now
          </a>
        </div>

        <div className="imgContainer">
          <img src={careerImg} alt="careerImg" />
        </div>
      </div>

      {/*  second page  */}

      <div className="secondContainer">
        <div>
          <div
            className="CareerboxContainer"
            // style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
          >
            <div
              style={{
                height: "220px",
                width: "220px",
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 10,
                cursor: "pointer",
              }}
              className="box1 box"
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src={careerImg}
                alt="boxImg"
              />
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Innovative Environment
              </p>
              <small
                style={{
                  fontSize: "12px",
                }}
              >
                Be part of a company that embraces innovation and is at the
                forefront of transforming financial services.
              </small>
            </div>
            <div
              style={{
                height: "220px",
                width: "220px",
                borderRadius: "20px",
                margin: 25,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 10,
                cursor: "pointer",
              }}
              className="box2 box"
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src={careerImg}
                alt="boxImg"
              />
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Career Growth
              </p>
              <small
                style={{
                  fontSize: "12px",
                }}
              >
                Whether you're starting your career or bringing years of
                experience, we provide opportunities for continuous growth and
                advancement.
              </small>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                height: "220px",
                width: "220px",
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 10,
                cursor: "pointer",
              }}
              className="box1 box"
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src={careerImg}
                alt="boxImg"
              />
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Collaborative Culture
              </p>
              <small
                style={{
                  fontSize: "12px",
                }}
              >
                Join a team that values collaboration, diversity, and the
                collective effort to achieve success.
              </small>
            </div>
            <div
              style={{
                height: "220px",
                width: "220px",
                borderRadius: "20px",
                margin: 25,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 10,
                cursor: "pointer",
              }}
              className="box2 box"
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src={careerImg}
                alt="boxImg"
              />
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Cutting-Edge Technology
              </p>
              <small
                style={{
                  fontSize: "12px",
                }}
              >
                Work with cutting-edge technology and stay ahead in the rapidly
                evolving landscape of financial solutions.
              </small>
            </div>
          </div>
        </div>

        <div
          style={{ width: "500px", padding: "10px", marginTop: "30px" }}
          className="textContainer"
        >
          <h3>Why Join AddRupee?</h3>
          <p style={{ fontSize: "13px", marginTop: 20 }}>
            Join AddRupee for a career that transcends the ordinary. At the
            heart of our workplace is innovation, offering you the opportunity
            to contribute to groundbreaking solutions in financial services. We
            prioritize your growth, providing a collaborative environment where
            diverse voices are heard and valued. Experience the latest in
            technology, benefit from flexible work arrangements, and contribute
            to impactful projects that make a difference. Our commitment to
            continuous learning, transparent communication, and a vibrant,
            inclusive culture makes AddRupee more than a workplace—it's a
            community where your career thrives. Here's why joining our team is
            the next step in your career:
          </p>

          <button
            style={{
              backgroundColor: "#007C9C",
              padding: "10px",
              borderRadius: 15,
              border: "none",
              fontWeight: "bold",
              color: "white",
              marginTop: "40px",
              width: "160px",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/*  Third page  */}

      <section className="homeWrapper--section">
        <div className=" wrapperContainer">
          <div style={{ color: "white", textAlign: "center" }} className="row">
            <div className="col-6 col-lg-3">
              <h4>
                <p>100+</p>
                <p>Team Members</p>
              </h4>
            </div>
            <div className="col-6 col-lg-3">
              <h4>
                <p>5000+</p>
                <p>Happy Customers</p>
              </h4>
            </div>
            <div className="col-6 col-lg-3">
              <h4>
                <p>10k+</p>
                <p>Happy Moments</p>
              </h4>
            </div>
            <div className="col-6 col-lg-3 p-3 p-lg-0 ">
              <h4>
                <p>20+</p>
                <p> branches all over India</p>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <div id="applynow">
        <CareerFrom />
      </div>

      {/*  Four page  */}

      <div style={{ marginTop: "50px" }}>
        <h1 className="careerRec">
          Learn Our Recruiment <span style={{ color: "#007C9C" }}>Process</span>
        </h1>
        <p style={{ textAlign: "center" }}>
          Ready to embark on a rewarding career journey with AddRupee? Follow
          these steps to join our team:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "60px 0",
          }}
        >
          <div
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "5px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: 10,
              cursor: "pointer",
              margin: "3px 0",
            }}
            className="box1 box"
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src={careerImg}
              alt="boxImg"
            />
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Explore Openings
            </p>
            <small
              style={{
                fontSize: "12px",
              }}
            >
              Browse our current job openings to find the role that matches your
              skills and career goals.
            </small>
          </div>
          <div
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "5px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: 10,
              cursor: "pointer",
              margin: "3px 0",
            }}
            className="box2 box"
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src={careerImg}
              alt="boxImg"
            />
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Submit Your Resume
            </p>
            <small
              style={{
                fontSize: "12px",
              }}
            >
              Prepare your resume highlighting your achievements, skills, and
              experiences. Submit your application through our online portal.
            </small>
          </div>
          <div
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "5px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: 10,
              cursor: "pointer",
              margin: "3px 0",
            }}
            className="box1 box"
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src={careerImg}
              alt="boxImg"
            />
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Interview Process
            </p>
            <small
              style={{
                fontSize: "12px",
              }}
            >
              If your profile aligns with our requirements, we'll invite you to
              participate in our interview process. This may include virtual or
              onsite interviews, depending on the role.
            </small>
          </div>
          <div
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "5px",

              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: 10,
              cursor: "pointer",
              margin: "3px 0",
            }}
            className="box2 box"
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src={careerImg}
              alt="boxImg"
            />
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Welcome to AddRupee
            </p>
            <small
              style={{
                fontSize: "12px",
              }}
            >
              Congratulations! Once you successfully complete the interview
              process, you'll become a valuable member of the AddRupee team.
              Welcome aboard!
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

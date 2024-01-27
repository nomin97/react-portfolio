import { profileImage } from "../../assets";

function About() {
    return (
      <section className="my-5">
        <div className="my-2">
          <div className="profile-img my-5">
          <img src={profileImage} style={{ width: "500px", height: "500px"}} alt="profile" />
          </div>
          <p>
            Hi, I'm Nomin! I am a new graduate of the University of Denver fullstack coding bootcamp. I attended the University of Colorado Boulder for my undergrad and have a bachelor's degree in International Relations. I am an enthusiastic and dedicated junior full stack developer with a strong foundation in front-end and back-end web development. Currently seeking a challenging position where I can leverage my skills in HTML, CSS, JavaScript, MySQL, MongoDB, and server-side programming languages to create dynamic and responsive web applications. I am committed to collaborating with cross-functional teams to deliver high-quality code and user-centric solutions. Eager to expand my knowledge and expertise in full stack development while contributing to the success of an innovative organization. 
          </p>
          <p>
          Currently residing in Centennial, I enjoy long walks with my dog, cooking, and hanging out with friends and family. 
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  
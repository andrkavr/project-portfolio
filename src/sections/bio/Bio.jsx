import "./bio.css";
import arrow from "../../assets/arrowdown.svg";
import profilePic from "../../assets/Bild.jpg";

export const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio">
        <img
          src={profilePic}
          alt="profile-picture"
          className="profile-picture"
        />
        <div className="name-and-title">
          <h1 className="presentation">Hi, I'm Andrej Kavržić</h1>
          <h2 className="profession">Frontend Developer</h2>
        </div>
        <p className="about-me">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem eos, tempore quam labore ea rerum numquam. Facilis
          beatae cum praesentium at. Expedita officiis ullam asperiores deleniti
          numquam tempora perferendis a?
        </p>
        <img className="arrow-down" src={arrow} alt="arrow-pointing-down" />
      </div>
    </div>
  );
};
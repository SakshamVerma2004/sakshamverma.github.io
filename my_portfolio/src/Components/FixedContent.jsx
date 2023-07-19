import styles from "./FixedContent.module.css";
import { useState } from "react";
import github from "./Assets/github.png";
import linkedin from "./Assets/linkedin.png";
let FixedContent = () => {
  let [activeIndex, setActiveIndex] = useState(null);
  let handleHover = (index, hovering) => {
    setActiveIndex(hovering ? index : null);
  };
  return (
    <div className={styles.main}>
      <p className={styles.heading}>Saksham Verma</p>
      <p className={styles.job_title}>Frontend Web Developer</p>
      <p className={styles.description}>
        Motivated and innovative aspiring Frontend Developer . Curious to learn
        new emerging technologies and learning new skills . Have a great passion
        with react.js and always waiting to apply some new concepts to my
        projects . Looking forward to join a progressive organization with good
        environment opportunities to work on significant projects .
      </p>
      <p className={styles.findTheseHeading}>You can find the following in this portfolio :-</p>
      <div className={styles.moveDiv}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={styles.contentDiv}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <hr
              className={
                activeIndex === index ? styles.line : styles.notLine
              }
            ></hr>
            <p
              className={
                activeIndex === index ? styles.content : styles.notContent
              }
            >
              {index === 0 && "About"}
              {index === 1 && "Skills"}
              {index === 2 && "Projects"}
              {index === 3 && "Contact"}
              {index === 4 && "Resume"}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.imageDiv}>
        <a
          href="https://github.com/SakshamVerma2004"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.anchor}
        >
          <img className={styles.image} src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-verma-68aa92258/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.anchor}
        >
          <img className={styles.image} src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};
export default FixedContent;
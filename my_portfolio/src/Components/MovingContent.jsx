import Contact from "./Contact";
import styles from "./MovingContent.module.css";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import FixedContent from "./FixedContent";
import { useRef } from "react";
let MovingContent = () => {
  return (
    <div className={styles.main}>
      <p className={styles.desc1}>
        Back in 2021 , I started learning python as my first coding language and
        from there don't know how , but I got a good interest in coding . At
        that point of time , I created a Bank Managment System , which simply
        asks for a number to press and based on that number gives you the
        response . Concepts used at that point of time are SQL , Python , Python
        Pandas and RDBMS.
      </p>
      <p className={styles.desc2}>
        My main focus these days is building projects for testing my newly
        learned react skills and after reviewing on my own parameters , create
        another project in which earlier's project mistake should not exist .
        Basically , I want to learn new concepts and apply them till I became a
        near to pro in that concept .
      </p>
      <p className={styles.desc3}>
        When I'm not at my laptop , I usually watch a movie to stay fresh and
        also spend some time with my family . You can find me on some online
        gaming platform like BGMI when I am free .
      </p>
      <Skills/>
      <Projects/>
      <Contact/>
      <Resume/>
    </div>
  );
};
export default MovingContent;
import styles from "./Projects.module.css";
import zomato from "./Assets/zomato.png";
import github from "./Assets/github.png";
import bot from "./Assets/bot.png";
import rento from "./Assets/rento.png";
import mwendo from "./Assets/mwendo.png";
import { useState } from "react";
let Projects = () => {
  let [seemore, setSeemore] = useState(false);
  let [seeRento, setSeeRento] = useState(false);
  let [seeMwendo, setSeeMwendo] = useState(false);
  let [seeBot, setSeeBot] = useState(false);
  return (
    <div className={styles.main}>
      <p className={styles.heading}>Projects</p>
      <div className={styles.projectDiv}>
        <p className={styles.projectHeading}>Zomato Clone</p>
        <div className={styles.flexDiv}>
          <div className={styles.imageDiv}>
            <img className={styles.image} src={zomato} />
          </div>
          <div className={styles.descDiv}>
            <p className={styles.description}>
              A solo project completed within a span of 5 days .
            </p>
            <p className={styles.seeMore} onClick={() => setSeemore(!seemore)}>
              {seemore ? "See less" : "See more"}
            </p>
          </div>
        </div>
        {seemore ? (
          <div>
            <p className={styles.headline}>
              A comprehensive online platform for discovering and ordering food
              from a vast range of restaurants. Choose an item by sorting /
              filtering or searching .
            </p>
            <p className={styles.tech}>
              Tech Stacks used :-{" "}
              <span className={styles.techAnswer}>
                Html , CSS , JavaScript , React , Firebase
              </span>
            </p>
            <div className={styles.linkDiv}>
              <a
                className={styles.github}
                href="https://github.com/SakshamVerma2004/unique-code-1989"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.githubPhoto} src={github} />
              </a>
              <a
                className={styles.viewAnchor}
                href="https://dashing-starlight-d72338.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.view}>View Website</p>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.projectDiv}>
        <p className={styles.projectHeading}>RentoMojo Clone</p>
        <div className={styles.flexDiv}>
          <div className={styles.imageDiv}>
            <img className={styles.image} src={rento} />
          </div>
          <div className={styles.descDiv}>
            <p className={styles.description}>
              A solo project completed within a span of 6 days .
            </p>
            <p
              className={styles.seeMore}
              onClick={() => setSeeRento(!seeRento)}
            >
              {seeRento ? "See less" : "See more"}
            </p>
          </div>
        </div>
        {seeRento ? (
          <div>
            <p className={styles.headline}>
              An online product renting platform which can be considered very
              good in terms of furniture , appliances and other household
              products.
            </p>
            <p className={styles.tech}>
              Tech Stacks used :-{" "}
              <span className={styles.techAnswer}>
                Html , CSS , JavaScript , React , Firebase
              </span>
            </p>
            <div className={styles.linkDiv}>
              <a
                className={styles.github}
                href="https://github.com/SakshamVerma2004/unique-code-1999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.githubPhoto} src={github} />
              </a>
              <a
                className={styles.viewAnchor}
                href="https://moonlit-parfait-9a5f45.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.view}>View Website</p>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.projectDiv}>
        <p className={styles.projectHeading}>Mwnedo Africa Clone</p>
        <div className={styles.flexDiv}>
          <div className={styles.imageDiv}>
            <img className={styles.image} src={mwendo} />
          </div>
          <div className={styles.descDiv}>
            <p className={styles.description}>
              A collaborative project completed within a span of 5 days.
            </p>
            <p
              className={styles.seeMore}
              onClick={() => setSeeMwendo(!seeMwendo)}
            >
              {seeMwendo ? "See less" : "See more"}
            </p>
          </div>
        </div>
        {seeMwendo ? (
          <div>
            <p className={styles.headline}>
              An online vehicle renting platform for renting vehicles which can
              be selected from a vast range. Select a vehicle , complete payment
              process and enjoy your journey.
            </p>
            <p className={styles.tech}>
              Tech Stacks used :-{" "}
              <span className={styles.techAnswer}>
                Html , CSS , JavaScript , Local Storage , JSON Firebase
              </span>
            </p>
            <div className={styles.linkDiv}>
              <a
                className={styles.github}
                href="https://github.com/SakshamVerma2004/uncovered-self-186"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.githubPhoto} src={github} />
              </a>
              <a
                className={styles.viewAnchor}
                href="https://famous-tulumba-8e7e8c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.view}>View Website</p>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.projectDiv}>
        <p className={styles.projectHeading}>Bot (John)</p>
        <div className={styles.flexDiv}>
          <div className={styles.imageDiv}>
            <img className={styles.image} src={bot} />
          </div>
          <div className={styles.descDiv}>
            <p className={styles.description}>
              A solo project completed within a span of 3 days .
            </p>
            <p className={styles.seeMore} onClick={() => setSeeBot(!seeBot)}>
              {seeBot ? "See less" : "See more"}
            </p>
          </div>
        </div>
        {seeBot ? (
          <div>
            <p className={styles.headline}>
              A bot structure designed to give all the based asked generally .
              Ask any question to test the knowledge of the bot , but don't
              forget to turn on your system's speakers.
            </p>
            <p className={styles.tech}>
              Tech Stacks used :-{" "}
              <span className={styles.techAnswer}>
                Html , CSS , JavaScript , React , Firebase , Wikipedia-api
              </span>
            </p>
            <div className={styles.linkDiv}>
              <a
                className={styles.github}
                href="https://github.com/SakshamVerma2004/bot-creation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.githubPhoto} src={github} />
              </a>
              <a
                className={styles.viewAnchor}
                href="https://animated-macaron-bd3b27.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.view}>View Bot</p>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Projects;

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { useState, useEffect } from "react";
import '../Resume/Resume.css';

export default function Resume(props) {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  const programmingSkillsDetails = [

    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "PostgreSQL", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "React Fitness",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A react application that allows the user to customize a workout",
      subHeading: "Stack: PERN",
    },
    {
      title: " Scheduler ",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "some tes",
      subHeading: "Technologies Used:  ReactJS.",
    },
    {
      title: "Jungle",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Ruby",
    },

  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Lighthouse Labs"}
        subHeading={"Web Development"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Notre Dame"}
        fromDate={"1994"}
        toDate={"2000"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"RCMP - Business Process Analysis Section"}
          subHeading={"OM-02 - Indeterminate - Business Process Analyst"}
          fromDate={"June 2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Design, develop, program, and implement departmental forms using Adobe LiveCycle Designer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Working with clients to create forms based on their needs and services.
          </span>
          <br />
          <span className="resume-description-text">
            - Convert ICS forms to Adobe PDF format.
          </span>
          <br />
          <span className="resume-description-text">
            - Conduct Quality Assurance (QA) testing.
          </span>
          <br />
          <span className="resume-description-text">
            - Elicit and analyze client business requirements, business rules, and workflow relating to and supported by form products.
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"RCMP - SIBS"}
          subHeading={"AS-03 - Information Systems Administrator"}
          fromDate={"October 2019"}
          toDate={"June 2021"}
        />
        <div className="experience-description">
          <ul className="resume-description-text">
            <li>Revamped SIBS intranet site.</li>
            <li className="resume-description-text">
            Created SQL scripts to push large amounts of data into the case management system (E&R).
            </li>
            <li className="resume-description-text"> Updated content and stats in internal SIBS Website.</li>
            <li className="resume-description-text"> Created and maintained user profiles in E&R.</li>
            <li className="resume-description-text"> Created and updated Crystal Reports.</li>
            <li className="resume-description-text"> Created, updated, and programmed fillable Portable Document Format (PDF) forms using Adobe LiveCycle.</li>
            <li className="resume-description-text"> Mapped XML schemas to Adobe LiveCycle forms.</li>
            <li className="resume-description-text"> Automated workflows using Robotic Process Automation UIPath.</li>
            <li className="resume-description-text">Provided staff with guidance and basic IT support.</li>
          </ul>
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

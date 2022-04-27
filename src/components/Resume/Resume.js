import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { useState } from "react";
import '../Resume/Resume.css';

export default function Resume(props) {

  const [selectedBulletIndex, setSelecteBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const resumeHeading = (props) => {
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
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work Experience", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },

  ];

  const skills = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React", ratingPercentage: 85 },
  ];

  const projects = [
    {
      title: "React Fitness",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A fitness website that allows a user to create workouts for various body parts",
      subheading: "Tech stack - PERN"
    },
    {
      title: "Tweeter",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A fitness website that allows a user to create workouts for various body parts",
      subheading: "Tech stack - PERN"
    },
    {
      title: "Tiny App",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A fitness website that allows a user to create workouts for various body parts",
      subheading: "Tech stack - PERN"
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key="education">
      <resumeHeading
        heading={"Lighthouse labs"}
        subheading={"Web Programming"}
        fromDate={2021}
        toDate={2022}
      />
      <resumeHeading
        heading={"Algonquin College"}
        subheading={"Accounting"}
        fromDate={2021}
        toDate={2022}
      />

      <resumeHeading
        heading={"High School"}
        subheading={"Name of highschool"}
        fromDate={2021}
        toDate={2022}
      />

    </div>,

    <div className='resume-screen-container' key="work experience">
      <resumeHeading
        heading={"RCMP"}
        subheading={"OM-02 Business Analyst"}
        fromDate={2021}
        toDate={"current"}
      />
      <div className="experience-description">
        <span className="resume-description-text"> Currently working as a form designer</span>
      </div>

      <div className="experience-description">
        <span className="resume-description-text"> Create and Updated Forms</span>
        <br />
      </div>,

      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {skills.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"> 
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div style={{width: skill.ratingPercetage + "%"}} className="active-percentage">

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>,

      <div className="resume-screen-container" key="projects">
          {projects.map((project, index) => (
            <resumeHeading
            key={index}
            heading={project.title}
            subheading={project.subheading}
            description={project.description}
            fromDate={project.duration.fromDate}
            toDate={project.duration.toDate}
            />
          ))}
      </div>

    </div>
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffsetStyle(newCarouselOffset);
    setSelecteBulletIndex(index);
  }


  return (
    <div className="resume-container screen-container" id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'Details'} />
      </div>

    </div>

  );
}
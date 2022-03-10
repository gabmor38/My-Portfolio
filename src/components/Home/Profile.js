import Typical from 'react-typical'
import './Profile.css'



function Profile() {
  return (
    <div className ="profile-container">
      <div className = "profile-parent">
        <div className = "profile-details">
          <div className = "colz">
            <div className="colz-icon">
              <a href="#"><i className= "fa fa-facebook-square"/></a>
              <a href="#"><i className = "fa fa-google-plus-square"/></a>
            </div>

          </div>
            <div className ="profile-details-name">
              <span className = "primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Gabriela Moreno</span>
              </span>
            </div>
            <div className="profile-details-role">
              {" "}
              <span>
                <h1>
                {" "}
                <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic 😀",1000,
                  "Full Stack Developer 💻",1000,
                  "Based in Canada 🇨🇦",1000,
                ]}
                />
                </h1>
                <span className='profile-role-tagline'></span>
                Building applications with front and back operations
              </span>
            </div>
            <div className="profile-options">
              <button className="btn btn-primary">{" "} Hire Me! {" "}</button>
              <a href="resume" download ="resume.pdf">
                <button className ="btn btn-highlighted">Download Resume</button>
              </a>
            </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import "./team.css";

const Team = () => {
  // Define an array of team members
  const teamMembers = [
    {
      name: "Team 1",
      position: "Inhaber & Geschäftsführer",
      image: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/grayscale.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
        linkedin: "#"
      }
    },
    {
      name: "Team 2",
      position: "Stellvertretender Geschäftsführer",
      image: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/grayscale.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
        linkedin: "#"
      }
    },
    {
      name: "Team 3",
      position: "Dipl. Physiotherapeut",
      image: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/grayscale.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
        linkedin: "#"
      }
    },
    {
      name: "Team 4",
      position: "Dipl. Physiotherapeut",
      image: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/grayscale.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        googlePlus: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div>
      <section className="our-team-section">
        <div className="team-container">
          <div className="team-row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="our-team">
                  <div className="pic">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <h3 className="title">{member.name}</h3>
                    <span className="post">{member.position}</span>
                  </div>
                  <ul className="social-link">
                    <li>
                      <a href={member.social.facebook} target="_blank" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href={member.social.twitter} className="fa fa-twitter" />
                    </li>
                    <li>
                      <a href={member.social.googlePlus} className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href={member.social.linkedin} className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

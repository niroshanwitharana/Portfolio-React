import { PictureAsPdf } from '@material-ui/icons';
import React from 'react';
import Typography from "@material-ui/core/Typography";
import "./Home.css";
function Home(){
return(
    <>
    <div className="aboutMe">
      <p className="aboutMeH4">Hi,  Welcome to My Portfolio !</p>
      <img src={require('../../images/niro-pic.png')} alt="Theo" className="theo" />
    </div>
    <Typography className="niro" paragraph>
        I am a Full-stack Web Developer, who has successfully completed the Coding Boot Camp accredited and run by The University Of Birmingham. I have competently gained a highly refined industry relevant skill set to engineer a Full Stack Web Application with confidence. Whilst successfully fulfilling the requirements of this fast tracked course, I maintained my motivation to work effectively under pressure to the tightest deadlines under my own initiative, and as part of a team. I’m looking forward to transferring my hardworking passion for coding, existing skills and knowledge to contribute to the success of the right Organization.
    </Typography>
    </>
)
}
export default Home;
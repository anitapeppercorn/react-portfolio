import React from 'react';
import {
  FaGithubSquare,
  FaMailBulk,
  FaTwitterSquare,
  FaLinkedin
} from "react-icons/fa";
import { IconContext } from "react-icons";
import Zoom from 'react-reveal/Zoom'; // Importing animation feature - Zoom effect

function Footer() {
    return(
      <footer>
      <IconContext.Provider
        value={{ className: "footer-icon-color", size: 50 }}
      >
        <div className="wrapper">
          <p>          </p>
          <p> Click for more </p>
          <Zoom>{/*Using Zoom Effect*/}
              <a href="https://github.com/anitapeppercorn">
              <FaGithubSquare />
              </a>
              <a href="mailto:anita_r_ganti@yahoo.com">
              <FaMailBulk />
              </a>
              <a href="https://www.linkedin.com/in/anita-ganti-9380961">
              <FaLinkedin />
              </a>
              <a href="https://www.twitter.com/mrsganti">
              <FaTwitterSquare />
              </a>
          </Zoom>
        </div>
      </IconContext.Provider>
    </footer>
      
    )
}

export default Footer;
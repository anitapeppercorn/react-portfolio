import React from 'react';
import {
  FaGithubSquare,
  FaMailBulk,
  FaLinkedin
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
    return(
      <footer>
      <IconContext.Provider
        value={{ className: "footer-icon-color", size: 50 }}
      >
        <div className="wrapper">
          <p>          </p>
          <p> Click for more </p>
          <a href="https://github.com/anitapeppercorn">
          <FaGithubSquare />
          </a>
          <a href="mailto:anita_r_ganti@yahoo.com">
          <FaMailBulk />
          </a>
          <a href="https://www.linkedin.com/in/anita-ganti-9380961">
          <FaLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </footer>
      
    )
}

export default Footer;

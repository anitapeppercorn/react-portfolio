import React from 'react';
import {
	FaGithubSquare,
	FaChrome
  } from "react-icons/fa";
  import { IconContext } from "react-icons";

function Modal({ currentPhoto, onClose }) {
	const { name, category, link, description, index } = currentPhoto;

	return (
		<div className='modalBackdrop'>
			<div className='modalContainer'>
				<h3 className='modalTitle'>{name}</h3>
				<button type='button' onClick={onClose}>
					Click to close this Page
				</button>

				<IconContext.Provider
				value={{ className: "icon-color", size: 20 }}
				>
					<div className="wrapper">
						<a href="https://github.com/anitapeppercorn"> Repository for Project
						<FaGithubSquare />
						</a>

						<a href= {link}> Application Deployed at
						<FaChrome />
						</a>
					</div>
      			</IconContext.Provider>
				<p>{description}</p>
				<img
					alt='current category'
					src={require(`../../assets/large/${category}/${index}.jpg`)}
				/>
			</div>
		</div>
	);
}

export default Modal;

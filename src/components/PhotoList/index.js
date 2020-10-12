import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList({ category }) {
	const [photos] = useState([
		{
			name: 'About',
			category: 'About',
			link: 'https://anitapeppercorn.github.io/anitaprofileportfolio/',
			description:
				'Experienced Public Company Board member and P&L leader with a strong problem solving and communication skills.',
		},
		{
			name: 'Portfolio Project',
			category: 'Business_Applications',
			link: 'https://anitapeppercorn.github.io/anitaprofileportfolio/',
			description:
				'Created a responsive web-page to showcase early projects using HTML & CSS',
		},
		{
			name: 'Budget Tracker',
			category: 'Business_Applications',
			link: 'https://serene-chamber-87874.herokuapp.com/',
			description:
				'A PWA (progressive web application); Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information.',
		},
		{
			name: 'E-Commerce Back-end',
			category: 'Business_Applications',
			link: 'https://github.com/anitapeppercorn/E-Commerce-Backend',
			description:
				'I have built the back end for an e-commerce site. I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database. Because this application is not deployed, the link will take you to the GitHub repo, where I have created a walkthrough video that demonstrates its functionality.',
		},
		{
			name: 'Team Profile Generator',
			category: 'Business_Applications',
			link: 'https://github.com/anitapeppercorn/Team-Profile-Generator',
			description:
				'This project is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, we also write unit tests for each part of the code and ensure that it passes all of them. This application uses Jest for running the unit tests and Inquirer for collecting input from the user. The application is invoked by using the following command:node index.js. A sample HTML file generated using the application located in the GitHub repository, which also contains the application code.',
		},
		{
			name: 'Tech Blog',
			category: 'Business_Applications',
			link: 'https://murmuring-shelf-60859.herokuapp.com/',
			description:
				'I have built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was built from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. (I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database). A link to the start up demo video and this code for the app is published to github',
		},
		{
			name: 'Password Generator',
			category: 'Front-End_Projects',
			link: 'https://anitapeppercorn.github.io/PasswordGenerator/',
			description:
				'I have created an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It features a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.',
		},
		{
			name: 'The Quiz',
			category: 'Front-End_Projects',
			link: 'https://anitapeppercorn.github.io/JavaScript-Web-API-Quiz/ ',
			description:
				'I have built a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It also features a clean, polished and responsive user interface, ensuring that it adapts to multiple screen sizes.',
		},
		{
			name: 'Weather Dashboard Application',
			category: 'Front-End_Projects',
			link: 'https://github.com/anitapeppercorn/Weather-Dashboard-Application',
			description:
				'Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. I was tasked with retrieving data from another application API and using it in the context of my own to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. I used the OpenWeather API (https://openweathermap.org/api) to retrieve weather data for cities. The documentation in GitHub provides basic setup and usage instructions. I have used localStorage to store persistent data.',
		},
		{
			name: 'Work Day Scheduler',
			category: 'Front-End_Projects',
			link: 'https://anitapeppercorn.github.io/WorkSchedule/',
			description:
				'I have created a simple calendar application that allows me to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Git hub repository: https://github.com/anitapeppercorn/WorkSchedule',
		},
		{
			name: 'Wine Blog',
			category: 'Food_Projects',
			link:'https://secure-chamber-23014.herokuapp.com/',
			description:
				'This is a Wine Blog implemented using node.js, express.js, mySQL, Sequelize ORM, the AWS S3 bucket and handlebars.js that allows users to track their inventory of collected wines and socially interact with other wine lovers. This site is built from scratch and deployed to Heroku. The app follows an MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The wine images shared by the user are processed using Multer and are posted and retrieved for display from an AWS S3 bucket we created as a url. I created tests and tested our app with jest.(I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database).',
		},
		{
			name: 'Food Blog',
			category: 'Food_Projects',
			link:'https://secure-chamber-23014.herokuapp.com/',
			description:
				'This is a Food Blog implemented using node.js, express.js, mySQL, Sequelize ORM, the AWS S3 bucket and handlebars.js that allows users to track their favorite restaurants and socially interact with other food lovers. This site is built from scratch and deployed to Heroku. The app follows an MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The food images shared by the user are processed using Multer and are posted and retrieved for display from an AWS S3 bucket we created as a url. I created tests and tested our app with jest.(I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database).',
		},
		{
			name: 'Food Festival',
			category: 'Food_Projects',
			link:'https://anitapeppercorn.github.io/Food-Festival/',
			description:
				'This is a progressive web app (PWA).I build a web application for a three-day food event. The previous app loaded very slowly when the client simulates a 4G internet connection using Chrome DevTools. The client needed a fast and performant application, especially on mobile, because the app is designed for event attendees who will be using it on their phones',
		},
		{
			name: 'Pizza Hunt',
			category: 'Food_Projects',
			link: 'https://glacial-hamlet-63282.herokuapp.com',
			description:
				'Pizza Hunt is a fullstack web app using MongoDB via Mongoose. It is a self-aware riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. Pizza is ubiquitous in everyday life all over the world, and no application has ever been created with the sole purpose of facilitating discussions about it.',
		},
		{
			name: 'The Craver',
			category: 'Food_Projects',
			link: 'https://anitapeppercorn.github.io/The-Craver/',
			description:
				'I was part of a 5 person team developing a front-end challenge project. We used front end tools, materialize.css and REST API calls.  We used the Spoonacular API call to get recipes, A zipcode API to determine location the Zomato API to identify restaurants nearby.',
		},
		{
			name: 'My Resume Page 1',
			category: 'Resume',
			link: "https://www.linkedin.com/in/anita-ganti-9380961",
			description:
				'Page 1 of resume',
		},
		{
			name: 'My Resume Page 2',
			category: 'Resume',
			link: "https://www.linkedin.com/in/anita-ganti-9380961",
			description:
				'Page 2 of resume',
		},
		{
			name: 'My Resume Page 3',
			category: 'Resume',
			link: "https://www.linkedin.com/in/anita-ganti-9380961",
			description:
				'Page 3 of resume',
		},
		{
			name: 'My Resume Page 4',
			category: 'Resume',
			link: "https://www.linkedin.com/in/anita-ganti-9380961",
			description:
				'Page 4 of resume',
		},
		{
			name: 'My Resume Page 5',
			category: 'Resume',
			link: "https://www.linkedin.com/in/anita-ganti-9380961",
			description:
				'Page 5 of resume',
		},
	]);
	const [currentPhoto, setCurrentPhoto] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const currentPhotos = photos.filter((photo) => photo.category === category);

	const toggleModal = (image, i) => {
		setCurrentPhoto({ ...image, index: i });
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div>
			{isModalOpen && (
				<Modal currentPhoto={currentPhoto} onClose={toggleModal} />
			)}
			<div className='flex-row'>
				{currentPhotos.map((image, i) => (
					<img
						src={require(`../../assets/small/${category}/${i}.jpg`)}
						alt={image.name}
						className='img-thumbnail mx-1'
						key={image.name}
						data-testid={'img' + i}
						onClick={() => toggleModal(image, i)}
					/>
				))}
			</div>
		</div>
	);
}

export default PhotoList;

import React, { useState } from 'react';
//import About from './components/About';
// remove <About /> call for about component in <main> after <Gallery currentCategory={currentCategory} /> 
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer/index';

function App() {
	const [categories] = useState([
		{
			name: 'About',
			description: 'Anita is an experienced P&L leader with a strong problem solving and communication skills. Through collaboration and teamwork she has delivered to a record of success. Since 2008 she has undertaken business transformation and turn arounds, delivering results through change and growth, including a $6.5B acquisition. She was the former Senior Vice President and head of one of $8B Wipro’s Services Groups, and previously Vice President at $30B Flex. She is an entrepreneur who is exceptional at inspiring global teams to achieve strategic objectives and building strong networks of trusted relationships with partners and client executives. She holds an MBA from Wharton. Anita has led diverse teams across multiple geographical locations. She has not only built businesses from concept to market leadership but also built alliances with technology partners and customers. She has been a customer facing executive fostering executive level engagements with customers such as Apple, Google, Microsoft, Facebook, FedEx, Walmart, Comcast, Honda, Starbucks, Medtronic, Cisco, etc. As Senior Vice President of the Product Engineering Services Organization at Wipro Technologies, she was responsible for Offerings, Operations and P&L of over $600M/Yr revenue. Prior to Wipro she was Vice President–Global Technology, Products and Markets at Flextronics. Here she operationalized Flextronics’ Open Innovation Platform and was part of the founding governance team of Lab IX, the corporate ventures group. Prior to this she was a Business Unit Head at Texas Instruments. Anita is an investor in startups and frequent keynote speaker. She mentors women taking on leadership roles in technology organizations and champions diversity and inclusion. She is exploring her next venture while consulting and advising technology startups. Anita holds an M.B.A (Finance Major) , from THE WHARTON SCHOOL, an M.S.E.E. VIRGINIA TECH, and a Bachelor’s Degree in Electrical Engineering V J T I, India.',
		},
		{
			name: 'Business_Applications',
			description: 'Click on the image of the Application below to see more information. These are web applications built for business use; utilizing both front-end and full-stack tools',
		},
		{ 	
			name: 'Front-End_Projects', 
			description: 'Click on the image of the Application below to see more information. These are projects completed with front-end development tools & skills' 
		},
		{ 	
			name: 'Food_Projects', 
			description: 'Click on the image of the Application below to see more information. These are Web Applications built for those who love food and drink using both front-end and full-stack tools' 
		},
		{
			name: 'Resume',
			description: 'Here are details of my accomplishments and skills',
		},
	]);
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	const [contactSelected, setContactSelected] = useState(false);

	return (
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<main>
				{!contactSelected ? (
					<>
						<Gallery currentCategory={currentCategory} />
					</>
				) : (
					<Contact />
				)}
				<Footer />
			</main>
		</div>
	);
}

export default App;

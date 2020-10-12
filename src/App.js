import React, { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer/index';

function App() {
	const [categories] = useState([
		{
			name: 'About',
			description: 'Anita is an experienced P&L leader with a strong problem solving and communication skills. Through collaboration and teamwork she has delivered to a record of success. Since 2008 she has undertaken business transformation and turn arounds, delivering results through change and growth, including a $6.5B acquisition. Anita holds an M.B.A (Finance Major) , from THE WHARTON SCHOOL, an M.S.E.E. from VIRGINIA TECH, and a Bachelor’s Degree in Electrical Engineering from V J T I, India.',
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
			<Header
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

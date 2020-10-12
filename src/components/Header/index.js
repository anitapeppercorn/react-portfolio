import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
	const {
		categories = [],
		setCurrentCategory,
		currentCategory,
		contactSelected,
		setContactSelected,
	} = props;

	useEffect(() => {
		document.title = capitalizeFirstLetter(currentCategory.name);
	}, [currentCategory]);

	return (
		<header className='flex-row px-1'>
			<h2>
				<a data-testid='link' href='/'>
					<span role='img' aria-label='Tech_Woman'>
						{' '}
						👩‍💻
					</span>{' '}
					Anita Ganti
				</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					{categories.map((category) => (
						<li
							className={`mx-1 ${
								currentCategory.name === category.name &&
								!contactSelected &&
								'headerActive'
							}`}
							key={category.name}
						>
							<span
								onClick={() => {
									setCurrentCategory(category);
									setContactSelected(false);
								}}
							>
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))}

						<li className={`mx-2 ${contactSelected && 'headerActive'}`}>
											<span
												onClick={() => {
													setContactSelected(true);
												}}
											>
												Contact me
											</span>
						</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;

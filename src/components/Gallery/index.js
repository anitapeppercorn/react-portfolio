import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList';

function Gallery({ currentCategory }) {
	const { name, description } = currentCategory;

	return (
		<section>
			<h1 data-testid='h1tag'>{capitalizeFirstLetter(name)}</h1>
			<p>{description}</p>
			<ProjectList category={name} />
		</section>
	);
}

export default Gallery;

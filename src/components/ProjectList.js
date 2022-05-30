import React from 'react';
import styles from './ProjectList.module.css';

import ProjectItem from './ProjectItem';

const projectsData = [
	{
		hashtags: '#HTML #CSS #RESPONSIVE',
		title: 'Recipe Blog',
		description:
			'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io.Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
	},
	{
		hashtags: '#HTML #CSS #RESPONSIVE',
		title: 'My Gallery',
		description:
			'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
	},
	{
		hashtags: '#HTML #CSS #RESPONSIVE',
		title: 'Checkout',
		description:
			'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
	},
];

const ProjectList = ({ className }) => {
	return (
		<article className={`${styles.projectContainer} ${className}`}>
			{projectsData.map((project) => {
				return <ProjectItem hashtags={project.hashtags} title={project.title} description={project.description} />;
			})}
		</article>
	);
};

export default ProjectList;

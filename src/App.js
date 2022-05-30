import styles from './App.module.css';

import UserCard from './components/UserCard';
import SkillsCard from './components/SkillsCard';
import ProjectList from './components/ProjectList';
import TitleCard from './components/TitleCard';
import ExperienceCard from './components/ExperienceCard';
import HobbiesCard from './components/HobbiesCard';
import BlogCard from './components/BlogCard';
import Footer from './components/Footer';

const skillsData = [
	{ title: 'React', percent: 70 },
	{ title: 'Javascript', percent: 80 },
	{ title: 'CSS', percent: 90 },
	{ title: 'Redux', percent: 60 },
	{ title: 'Node Js', percent: 50 },
	{ title: 'Express Js', percent: 50 },
];

const designData = [ { title: 'Figma', percent: 40 }, { title: 'Photoshop', percent: 60 } ];

function App() {
	return (
		<main className={styles.wrapper}>
			<UserCard />
			<TitleCard title="Projects (3)" />
			<ProjectList />
			<ExperienceCard />
			<TitleCard title="Blogs (1)" />
			<BlogCard className={styles.blogCard} />
			<div className={styles.gridSection}>
				<div className={styles.flexSection}>
					<SkillsCard data={skillsData} className={styles.skillsCard} />
					<SkillsCard data={designData} className={styles.designCard} />
				</div>
				<HobbiesCard className={styles.hobbiesCard} />
			</div>
			<Footer />
		</main>
	);
}

export default App;

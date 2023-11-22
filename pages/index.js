import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Masonry from 'react-masonry-css'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Zachary Seebeck - Software Engineer</title>
			</Head>

			<div className='mt-16 max-w-[800px] mx-auto'>
				<div id="about" className={styles.hero}>
					<div className={styles.heroText}>
						<h1 className={styles.heroTitle}><span className={"font-bold text-4xl"}>Hi!</span> I'm Zachary Seebeck</h1>
						<h2 className={styles.heroSubtitle}>Software Engineer</h2>

						<p className={styles.heroDescription}>
							Building software is my passion. I'm a full-stack developer with a background in
							a variety of programming languages who wants to help the world build better solutions to their problems.

							<br/><br/>

							Current Stack For Work: <span className='font-bold'>ASP.NET Core, React, and Docker</span>
							<br/>
							Currently Learning: <span className='font-bold'>Rust</span>
						</p>
					</div>
					<div className={styles.heroImg}>
						<img src="/img/me_face_new.jpg" alt="Headshot Image" className={styles.heroHeadshot} />
					</div>
				</div>
			</div>

			<div id="experience" className='mt-16 max-w-[800px] mx-auto'>
				<h1 className='header'>Experience</h1>

				<ExperienceCard
					name={'Newtech Dealer Services'}
					date={'Jan 2019 - May 2021'}
					title={"Junior Developer"}
					content={`
						Worked on software for dealerships to easily manage vehicle inventory 
						and handle customer purchase flows. Main software worked on was Inventory 
						Fusion and Process Pro Online. 
					`}
				/>

				<ExperienceCard
					name={'Vascular Health Clinics'}
					date={'May 2021 - Sept 2021'}
					title={"Web Application Developer"}
					content={`
						Created internal tools for managing patient data as well as software and custom hardware that 
						interfaced with patient monitors to monitor patients remotely.
					`}
				/>

				<ExperienceCard
					name={'Full Circle Media'}
					date={'Sept 2021 - Present'}
					title={"Software Development & Operations"}
					content={`
						Worked with a variety of clients to build online experiences for customers
						and B2B e-commerce stores. Also worked on building custom purchase order 
						management software that interfaces with the BigCommerce e-commerce platform.
						
						Also worked on managing backend services and integrations with 3rd parties,
						and setting up a custom Docker CI/CD pipeline to host specialized applications.
						 
						Starting early 2023 I was able to start an internship program to provide real world
						experience to students in the area.
					`}
				/>

				<ExperienceCard
					name={'Bay City Public Schools'}
					date={'Jan 2023 - Present'}
					title={"Robotics Coach"}
					content={`
						Led and mentored high school students in designing, building, and programming robots for FIRST robotics.
						Managed and organized team meetings, ensuring a structured and productive environment for students to learn.
						Fostered a collaborative and inclusive environment for students to learn and grow.						 
					`}
				/>
			</div>

			<div id="projects" className='mt-16 max-w-[800px] mx-auto'>
				<h1 className='header'>Projects</h1>

				<Masonry breakpointCols={2} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
					<ProjectCard
						title={'PomoTask'}
						description={'A task management app for the Pomodoro technique written in Next.JS.'}
						href="https://github.com/ZacharySeebeck2020/PomoTask"
						color1={'#FE0000'}
						color2={'#00FEFE'}
					/>
					<ProjectCard
						title={'OctoShort'}
						description={`
							A link shortener built in Next.JS that allows unauthenticated link shortening,
							as well as link tracking for business' to see what kinds of devices are using 
							the short links.
						`}
						href="https://github.com/ZacharySeebeck2020/OctoShort"
						color1={'#FFF205'}
						color2={'#0512FF'}
					/>
				</Masonry>
			</div>

			<div id="experience" className='mt-16 max-w-[800px] mx-auto'>
				<h1 className='header'>Leadership And Advisory Roles</h1>

				<ExperienceCard
					name={'Bay-Arenac ISD Career Center - IT Cluster Advisory Board'}
					date={'June 2020 - Present'}
					content={`
						Worked with other IT professionals in the area to help guide the curriculum
						of the computer programming course at the Bay-Arenac ISD Career Center. Providing
						insight into what skills are needed in the industry and what students should be
						learning to prepare them for the workforce. 
					`}
				/>

				<ExperienceCard
					name={'Bay City, MI - Board Of Review'}
					date={'Feb 2023 - Present'}
					content={`
						Worked with other board members to review property tax appeals and make decisions
						on whether or not to grant the appeal based on applicable evidence.
					`}
				/>
			</div>

			<div id="contact" className='mt-16 max-w-[800px] mx-auto'>
				<h1 className='header'>Get In Touch</h1>
				<div className='flex justify-start mt-4 items-center text-white gap-5'>
					<a href='https://github.com/ZacharySeebeck2020' className='rounded bg-gray-800 py-2 px-3'>
						<FontAwesomeIcon icon={faGithub}/>
					</a>
					<a href='mailto:seebeckzachary@gmail.com' className='rounded bg-gray-800 py-2 px-3'>
						<FontAwesomeIcon icon={faEnvelope}/>
					</a>
					<a href='https://twitter.com/centimeter_sqd' className='rounded bg-gray-800 py-2 px-3'>
						<FontAwesomeIcon icon={faTwitter}/>
					</a>
				</div>
			</div>
		</>
	)
}

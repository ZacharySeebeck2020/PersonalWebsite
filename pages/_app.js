import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/globals.scss'
import { faDiagramProject, faFile, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function MyApp({ Component, pageProps }) {
	return (
		<div className='container mx-auto px-10 mb-16'>
			<nav className='max-w-[800px] mx-auto text-primary flex items-center h-10 pt-12'>
				<ul className='flex -ml-5'>
					<li className='navLink'><a href="#about">About</a></li>
					<li className='navLink'><a href='#experience'>Experience</a></li>
					<li className='navLink'><a href="#projects">Projects</a></li>
					<li className='navLink'><a href="#contact">Contact</a></li>
				</ul>
				<ul className='flex ml-auto -mr-5'>
					<li className='navLink'><FontAwesomeIcon icon={faGithub} /> </li>
					<li className='navLink'><FontAwesomeIcon icon={faTwitter} /> </li>
				</ul>
			</nav>

			<Component {...pageProps} />
		</div>
	)
}

export default MyApp

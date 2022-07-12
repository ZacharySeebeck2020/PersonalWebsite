import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/globals.scss'
import { faDiagramProject, faFile, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function MyApp({ Component, pageProps }) {
  return (
    <div className='container mx-auto'>
      <nav className='w-full text-primary flex items-center h-10 pt-5'>
        <ul className='flex'>
          <li className='navLink'><a href="#about">About</a></li>
          <li className='navLink'><a href="#experience">Experience</a></li>
          <li className='navLink'><a href="#projects">Projects</a></li>
          <li className='navLink'><a href="#contact">Contact</a></li>
        </ul>
        <ul className='flex ml-auto'>
          <li className='navLink'><FontAwesomeIcon icon={faGithub}/> </li>
          <li className='navLink'><FontAwesomeIcon icon={faTwitter}/> </li>
        </ul>
      </nav>

      <div>
        <Component {...pageProps} />
      </div>
    </div>

  )
  // <Component {...pageProps} />
}

function HeaderLink({ icon, link, title }) {
  return (
    <div className='w-20 h-20 rounded-lg cursor-pointer transition-all duration-300 ease-in-out font-medium mx-2.5 text-sm text-white justify-center flex flex-col items-center bg-gradient-to-tl from-[#FA5252] to-[#DD2476] linked'>
      <FontAwesomeIcon icon={icon} className="mb-3" />
      {title}
    </div>
  )
}

export default MyApp

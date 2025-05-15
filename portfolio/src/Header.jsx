import githubLogo from './assets/github.png'
import githubLogoBlack from './assets/github_black.png'
import linkedInLogo from './assets/linkedin-white.png'
import linkedInLogoBlack from './assets/linkedin-black.png'
import './App.css'

function Header() {

  return (
    <>
        <header className="w-screen bg-blue-800 flex w-full">
            <div>Home</div>
            <div>Contact</div>
            <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-cailly-605792155/" target="_blank" className="w-1/2">
                <img src={linkedInLogo} className="logo mx-auto w-48 h-48 block dark:hidden" alt="LinkedIn logo" />
                <img src={linkedInLogoBlack} className="logo mx-auto w-48 h-48 hidden dark:block" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/jcailly?tab=repositories" target="_blank" className="w-1/2">
                <img src={githubLogo} className="logo mx-auto w-120 h-120 object-contain block dark:hidden" alt="GitHub logo" />
                <img src={githubLogoBlack} className="logo mx-auto w-120 h-120 object-contain hidden dark:block" alt="GitHub logo" />
            </a>
        </header>
    </>
  )
}

export default Header
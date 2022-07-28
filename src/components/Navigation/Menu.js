import './menu.scss'
import githubLogo from './github.png'

function Menu() {

  return (
    <>
      <div className='nav-menu'>
        <div className="nav-menu-body">
          body
        </div>
        <div className="nav-menu-footer">
          <a href={'https://github.com/talarias'}>
            <img src={githubLogo} alt={'github-logo'}></img>
            <span className='nav-menu-footer-title'>GitHub</span>
            <span>github.com/talarias</span>
          </a>
        </div>
      </div>      
    </>
  )
}

export default Menu
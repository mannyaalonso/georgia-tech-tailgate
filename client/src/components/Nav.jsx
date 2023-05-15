import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

//575
const Nav = () => {
  return (
    <div className="h-[81px] xl:h-[104px] sticky top-0 z-50 bg-[#003057]">
      <div className="h-[81px] xl:h-[104px] xl:w-[105px] sm:ml-4 bg-white w-[80px] flex items-center justify-center">
        <Link to={'/'}>
          <img className="h-8 xl:h-10" src={logo} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Nav

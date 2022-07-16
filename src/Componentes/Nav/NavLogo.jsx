import { NavLink } from "react-router-dom"


const NavLogo = () => {
  return (
    <div className="logoNav bg-dark"><NavLink to="/"><img src="../img/logo-monchis.png" alt="logo" width="160px" height="auto"/></NavLink></div>
  )
}

export default NavLogo
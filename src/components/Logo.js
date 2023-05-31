import classes from './Logo.module.css';
import logo from '../img/logo.png';
export const Logo = () => {
  return <img src={logo} className={classes.logo} alt="KARMAN" />;
};

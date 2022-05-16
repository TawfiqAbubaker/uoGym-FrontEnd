import { Link } from "react-router-dom";
import classes from './NavBar.module.css'
import hamid from "../media/dumbell logo.png"
export const NavBar = () => {
    return (
        <div className={classes.main}>
            <div className={classes.Home}>
                <Link to = './' className={classes.imgAndTitle}>
                    <img src={hamid} alt="logo" className={classes.logo}/>
                    uoGym
                </Link>
                
            </div>
            <div className={classes.links}>
                <Link to='./' className={classes.link}>About</Link>
                <Link to='./'className={classes.link}>Pricing</Link>
                <Link to='./'className={classes.link}>Gym</Link>
                <Link to='./'className={classes.link}>Basketball</Link>
            </div>
            <div className= {classes.buttons}>
                <button className={classes.login}>Login</button>
                <button className={classes.signUp}>Sign up</button>
            </div>
                
        </div>
    )
}

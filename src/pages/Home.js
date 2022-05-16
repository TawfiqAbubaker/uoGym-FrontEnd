import classes from './Home.module.css'
import gymMan from '../media/gymMan.png'
export const Home = () => {
    return (
        <>
            <div className = {classes.main}>
                <img src={gymMan}/>
            </div>
        </>
    )
}

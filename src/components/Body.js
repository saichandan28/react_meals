import classes from './Body.module.css';
import BodyDescription from './BodyDescription';
import MealsContainer from './MealsContainer';
const Body = () => {

    return <div className={classes["body-class"]}>
        <img className={classes["background-image"]} src="https://www.foodiesfeed.com/wp-content/uploads/2021/02/breakfast-and-berries.jpg" alt="Background" />
        <BodyDescription></BodyDescription>
        <MealsContainer></MealsContainer>
    </div>
}

export default Body;


import classes from './MealsContainer.module.css';
import MealsList from './MealsList';
const MealsContainer = () => {
    return (
        <div className={classes["meals-container"]}>            
            <MealsList></MealsList>
        </div>
    );
}

export default MealsContainer;
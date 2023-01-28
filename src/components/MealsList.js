import Meal from './Meal';
import classes from './MealsList.module.css';
import React, {useEffect, useState} from 'react';

const itemList = [
    {
        mealId : '01',
        mealName : "Idli",
        description : "Healthy Snack",
        price : 20
    },
    {
        mealId : '02',
        mealName : "Dosa",
        description : "Crunchy Snack",
        price : 50
    }
]


const MealsList = () => {
    const [error, setError] = useState('');
    const [mealItems, setMealItems] = useState([]);

    useEffect(() => {

        async function fetchData() {
                
            try {
                
                console.log("useEffect Running!!");
                const response = await fetch ('https://react-http-134bb-default-rtdb.firebaseio.com/meals.json',{
                    method : 'GET',
                    body : null,
                    headers : {
                        'context-type' : 'application/json'
                    },
                });
                console.log(response);
                if (!response.ok){
                    console.log("Fetch error : Invalid response!");
                    throw new Error ("Fetch error : Invalid response!");
                }
                const data = await response.json();
                console.log(data);
                if (!data || data?.length === 0) throw new Error("No meals found!!");
                // console.log(data);
                const newList = [];
                Object.keys(data).forEach((key) => {
                    // console.log({mealId: key, ...data[key] , mealName: data[key].name});
                    const newObj  = {mealId: key, mealName: data[key].name, ...data[key]}
                    delete newObj.name;
                    newList.push(newObj);    
                });
                setMealItems(newList); 
            } catch (e) {            
                console.log(e.message);
                console.error(e.message);
                setError(e.message);
                // return err.message;
            }   
        }
            
        fetchData();
        

    },[])

    const mealJsx = mealItems.map((element) => {
        // return <Meal key={Math.round(Math.random()*1000)} mealId={element.mealId} mealName={element.mealName} description={element.description} price={element.price} />
        return <Meal key={element.mealId} mealId={element.mealId} mealName={element.mealName} description={element.description} price={element.price} />
    })


    if (error){
        return <span className={classes["message-error"]}>{`Fetch Error : ${error}`}</span>;
    }  
    else if (!error && mealItems.length === 0) {
        return <span>Loading...</span>;
    }
    else if (!error && mealItems.length > 0) {
        return mealJsx;
    }
    
}

export default MealsList;
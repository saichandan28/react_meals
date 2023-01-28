import React, {useState} from 'react';

const Counter = (props) => {

    // https://randomuser.me/api

    const [count, setCount] = useState(0);
    const [randomUser, setRandomUser]  = useState('');
    const [randomUserName, setRandomUserName] = useState('');
    const [randomUserPic, setRandomUserPic] = useState('');

    const getUserDetails = (randomUser) => {
        console.log(randomUser?.results[0]);
        console.log(randomUser?.results[0].name.first);
        console.log(randomUser?.results[0].picture.large);
        setRandomUserName(randomUser?.results[0].name.first);
        setRandomUserPic(randomUser?.results[0].picture.large);
    }

    const handlerOnClick = async (e) => {
        e.preventDefault();
        setCount(prevState => {
            return prevState+1;
        });
        try{
            const response = await fetch('https://randomuser.me/api', {
                method: 'GET',
                body : null,
                headers : {
                    'content' : 'application/json'
                }
            });
            if (!response.ok) throw new Error('Fetch request Failed');
            const data = await response.json();
            if(!data) throw new Error('Fetch invalid response');
            console.log(data);
            const strData = JSON.stringify(data);
            setRandomUser(data);
            getUserDetails(data);
        }catch (e) {
            console.error(e.message);
        }

    }

    return (
        <div>
            <button onClick={handlerOnClick}>Counter Add</button>
            <span>{count}</span>
            {/* <p>{randomUser}</p> */}
            <span>{randomUserName}</span>
            <img src={randomUserPic} alt={randomUserName}></img>
        </div>
    );
}

export default Counter;
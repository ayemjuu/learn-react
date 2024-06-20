import React, {useState} from 'react';

function Use () {
    

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Omelette")
    }

    const updateAge = () => {
        setAge(age+1)
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>increment age</button>


            <p>Employed: {isEmployed ? "Yes": "NO"}</p>
            <button onClick={toggleEmployment}>toggle</button>
        </div>
    )
}

export default Use


function List () {

    const fruits = [{id: 1, name:"apple", calories:90}, 
                    {id: 2, name: "pineapple", calories: 70}, 
                    {id: 3, name: "orange", calories:75}, 
                    {id: 4, name: "banana", calories:55},
                    {id: 5, name: "kiwi", calories:1005}]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //alphabetical

    // fruits.sort((a,b) => a.calories - b.calories); //ascending order
    fruits.sort((a,b) => b.calories - a.calories); //descending order

        const lowCalFruits = fruits.filter(fruit => (fruit.calories <= 100))

    const listItems = fruits.map(fruit => (<li key={fruit.id}>{fruit.name} <b>{fruit.calories}</b></li>)) //unique keys
    const listItemsLowCal = lowCalFruits.map(lowCalFruit => (<li key={lowCalFruit.id}>{lowCalFruit.name} <b>{lowCalFruit.calories}</b></li>)) //unique keys


    return(
        <>
            <ol>{listItems}</ol>
            <ol>{listItemsLowCal}</ol>
        </>

    )
}

export default List;
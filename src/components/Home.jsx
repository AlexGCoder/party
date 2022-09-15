import React, { useEffect, useState } from 'react';

function Home(props) {
    const [cocktail, setCocktail] = useState()

    useEffect(() => {
        fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then((res) => res.json())
            .then(data => setCocktail(data.drinks))

    }, [])

    // console.log(cocktail);



    return (
        <div>
            {cocktail?.map((el) => (<div key={el.idDrink}>{el.idDrink}</div>))}
        </div>
    );
}

export default Home;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function FindDetailForIngridient(props) {
    const [cocktail, setCocktail] = useState()
    const strDrink = useParams()
    console.log(strDrink.strDrink)


    useEffect(() => {
        fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink.strDrink}`)
            .then((res) => res.json())
            .then(data => setCocktail(data.drinks[0]))
    }, [])

    console.log(cocktail)
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${cocktail?.strDrinkThumb}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{`${cocktail?.strDrink}`}</h5>
                            <h6>Ingridients</h6>
                            <p className="card-title">{`${cocktail?.strIngredient1 ? cocktail?.strIngredient1 : ''} ${cocktail?.strIngredient2 ? cocktail?.strIngredient2 : ''} ${cocktail?.strIngredient3 ? cocktail?.strIngredient3 : ''} ${cocktail?.strIngredient4 ? cocktail?.strIngredient4 : ''} ${cocktail?.strIngredient5 ? cocktail?.strIngredient5 : ''}`}</p>
                            <p> {`${cocktail?.strInstructions ? cocktail?.strInstructions : ''}`}</p>
                            <p> {`${cocktail?.strCategory ? cocktail?.strCategory : ''}`}</p>
                            <p> {`${cocktail?.strAlcoholic ? cocktail?.strAlcoholic : ''}`}</p>
                            <p> {`${cocktail?.strGlass ? cocktail?.strGlass : ''}`}</p>
                            <small className="card-title">{`${cocktail?.strIBA ? cocktail?.strIBA : ''}`}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FindDetailForIngridient;
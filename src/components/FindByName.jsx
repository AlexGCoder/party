import React, { useEffect, useState } from 'react';
import CardCoctails from './ui/CardCoctails';
import Card from './ui/CardIngridient';

function FindByName(props) {
    const [cocktail, setCocktail] = useState()
    const [input, setInput] = useState('')

    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
            .then((res) => res.json())
            .then(data => setCocktail(data.drinks))

    };

    return (
        <>
            <h1>What do you want to drink, maaan?</h1>
            <form onSubmit={submitHandler} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Че бухнуть?
                        <input
                            value={input}
                            onChange={changeHandler}
                            name="strDrink"
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-success">Ищем</button>
            </form>

            <div>
                {cocktail?.length ? cocktail.map(((el) => <div className='row-4' key={el.idDrink}><CardCoctails drink={el} /> </div>)) : ''}

            </div>
        </>
    );
}

export default FindByName;
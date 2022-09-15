import React from 'react';

function CardCoctails({ drink }) {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${drink.strDrinkThumb}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{`${drink.strDrink}`}</h5>
                        <h6>Ingridients</h6>
                        <p className="card-title">{`${drink.strIngredient1 ? drink.strIngredient1 : ''} ${drink.strIngredient2 ? drink.strIngredient2 : ''} ${drink.strIngredient3 ? drink.strIngredient3 : ''} ${drink.strIngredient4 ? drink.strIngredient4 : ''} ${drink.strIngredient5 ? drink.strIngredient5 : ''}`}</p>
                        <small className="card-title">{`${drink.strIBA ? drink.strIBA : ''}`}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCoctails;
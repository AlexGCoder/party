import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardIngridient({ drink }) {
    const navigate = useNavigate()

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${drink.strDrinkThumb}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{`${drink.strDrink}`}</h5>
                    </div>
                </div>
                <button onClick={() => navigate(`/cocktail/detail/${drink.strDrink}`)} type="button" className="btn btn-warning">Details</button>
            </div>
        </div>

    );
}

export default CardIngridient;
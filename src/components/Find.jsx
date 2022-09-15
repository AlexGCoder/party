import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Find({ user }) {
    const [input, setInput] = useState({ title: '' });
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(product)
        console.log('input', input)
        const response = await fetch('/api/v1/find', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input),
        });
        if (response.ok) {
            console.log('eeeee');
            const data = await response.json();
            setProduct(data);
            // navigate('/');
        }
    };

    return (
        <>
            <h1>Что будем искать?</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Введи название товара?
                        <input
                            value={input.title}
                            onChange={changeHandler}
                            name="title"
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Искать</button>
            </form>
            {product &&
                (<div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product?.title}</h5>
                            <img src={`${product?.photo}`} className="card-img-top imgclass" style={{ width: 75, height: 75 }} alt="..." />
                            <p className="card-text">описание:{product?.description}</p>
                            {/* <p className="card-text">категория:{product?.Category.name}</p> */}
                            {/* <p className="card-text">владелец:{product?.User.name}</p> */}
                            {user.id === product.user_id &&
                                (<button onClick={() => deleteHandler(product?.id)} type="button" className="btn btn-danger">удалить</button>)
                            }
                        </div>
                    </div>
                </div >)}
        </>
    );
}

export default Find;

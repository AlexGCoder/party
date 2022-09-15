import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import FindByIngridiente from './FindByIngridiente';
import FindByName from './FindByName';
import FindDetailForIngridient from './FindDetailForIngridient';
import Header from './ui/Header';


function App({ userSession }) {
    const [user, setUser] = useState(userSession || null)
    return (
        <>
            <Header user={user} setUser={setUser} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/byingridients' element={<FindByIngridiente />} />
                <Route path='/byname' element={<FindByName />} />
                <Route path='/cocktail/detail/:strDrink' element={<FindDetailForIngridient />} />
            </Routes>
        </>
    );
}

export default App;
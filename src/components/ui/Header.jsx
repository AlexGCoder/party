import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({ user, setUser }) {
  // const navigate = useNavigate();
  // const logoutHandler = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/auth/logout');
  //   if (response.ok) {
  //     setUser(null);
  //     navigate('/');
  //   }
  // };
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{ width: '100%' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img style={{ width: '80px', height: '55px' }} src="/dog.gif" alt="" /></a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* {user
              ? (
                <>
                  <NavLink className="nav-link" to="/">{`Привет, гость!`}</NavLink>
                  <NavLink className="nav-link" to="/registration">Регистрация</NavLink>
                  <NavLink className="nav-link" to="/login">Войти</NavLink>
                </> */}
            {/* ) : ( */}

            <>
              <NavLink className="nav-link" to="/">{`Привет, Митрич!`}</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/byname">Найти по названию</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/byingridients">По ингридиенту</NavLink>
              {/* <NavLink className="nav-link" to='/findproduct'>Найти продукт</NavLink>
                  <NavLink onClick={logoutHandler} className="nav-link" to="/">Выйти</NavLink> */}
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;

import React from 'react';
import css from './Home.module.css';
import HomeMenu from './HomeMenu';
import Nav from './Nav';

function Home(props) {
    return (
        <div className={css.Home}>
            <Nav className={css.nav} />
            <HomeMenu />
        </div>
    );
}

export default Home;
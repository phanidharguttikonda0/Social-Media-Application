import React from 'react';
import chat from '../images/chat.svg';
import home from '../images/home.svg';
import profile from '../images/profile.svg';
import search from '../images/search.svg';
import trending from '../images/trending.svg';
import css from './Nav.module.css';

function Nav(props) {
    return (
        <div className={css.navbar}>
            <div className={css.main}>
            <img src={home} alt='' className={css.nav_home} onClick={() => {}}/>
            <img src={search} alt='' className={css.nav_search} onClick={() => {}}/>
            <img src={trending} alt='' className={css.nav_trending} onClick={() => {}}/>
            <img src={chat} alt='' className={css.nav_chat}/>
            <img src={profile} alt='' className={css.nav_profile} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default Nav;
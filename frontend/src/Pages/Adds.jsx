import React from 'react';
import mainposter from '../images/add.jpg';
import gk from '../images/gk.jpg';
import imdb from '../images/imdb.png';
import css from './Adds.module.css';

function Adds(props) {
    return (
        <div className={css.adds}>
            <div className={css.title}>
                <img src={gk} alt='' className={css.sidePoster}/>
                <h6> <img src={imdb} alt='' className={css.imdb}/> 8.0/10 </h6>
                <h6> <span className={css.views}> 10M+ </span> Streams</h6>
                <div className={css.btns}>
                    <button className={css.btn1}> Play </button>
                    <button className={css.btn2}> Watch Trailer</button>
                </div>
            </div>
            <div className={css.poster}>
                <img src={mainposter} alt='' />
            </div>
        </div>
    );
}

export default Adds;
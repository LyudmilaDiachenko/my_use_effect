import React, { useEffect, useState } from 'react'
import style from "../style/cart.module.css"
import getData from '../utils/getData';

const Cards = () => {
    const [noteBookData, setNoteBook] = useState([])

    useEffect(() => {
        getData("notebook", "localServer")
        .then(parsData => {
            setNoteBook(parsData)
        })
        .catch(e => {
            console.error(e)
            setNoteBook([])
        })
    }, [])
    
    return (
        <div className={style.cartContainer}>
            {
                noteBookData?.map(goodItem => {
                    return(
                        <div key={`goodItem_${goodItem.id}`} className={style.cartBox}>
                            <img src={goodItem.img} alt="demo" />
                            <h1 className={style.cartBoxTitle}>{goodItem.name}</h1>
                            <p className={style.description}>Процесор: {goodItem.processor}</p>
                            <p className={style.description}>Обʼєм памяті: {goodItem.storage}</p>
                            <button>Купити {goodItem.price} </button>
                        </div>
                    )
                })
            }
        </div>
    );
  };
  
export default Cards;
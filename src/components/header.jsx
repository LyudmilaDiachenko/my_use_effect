import React, { createRef, useState } from 'react'
import s from "../style/header.module.css"
import Nav from './nav'

export default function Header() {
    
    const [inputValue, setInputValue] = useState("")
    
    const inputSearch = createRef()
    
    function onFormBtnClick(e) {
        e.preventDefault()
        console.log(inputSearch.current.value);
    }
    
    function inputSearchChange(e) {
        setInputValue(inputSearch.current.value)
        localStorage.setItem("inputValue", JSON.stringify(inputValue));
    }
  
    return (
      <header className={s.hearder}>
      <div className={s.logo}>maxvel</div>
      <Nav />
      <div className={s.frame}>
      <div className={s.div}>
        <form className={s.div2}>
          <div className={s.textWrapper}>Serach any things</div>
          <div className={s.divWrapper}>
            <input
              className={s.textWrapper2} placeholder='Search'
              ref={inputSearch}
              value={inputValue}
              onChange={inputSearchChange}
            />
            <button type="submit" onClick={onFormBtnClick}>Search</button>
          </div>
        </form>
      </div>
    </div>
    </header>
   
  )

 
    
  
}

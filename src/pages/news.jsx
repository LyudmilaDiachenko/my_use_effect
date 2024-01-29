import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useApp} from "../utils/context";

export default function News() {
  const { globalState, get_Data } = useApp()
  const [newsData, setNewsData] = useState(globalState)
  const [inputValue, setInputValue] = useState("")

  async function fetchNewsData() {
        try {
          const getNewsData = await get_Data (inputValue)
          setNewsData(getNewsData)
        } catch (error) {
          console.error(error)
        }      
      }
  useEffect(() => {    
    fetchNewsData() 
  }, [])
// Зміна стану input
  function handleInputChange(e) {
    setInputValue(e.target.value)
  }
// Функція підписки на форму
 function onFormSubmit(e) {
  e.preventDefault()
  fetchNewsData()
 }
  return (
    <div>
      <h1>Top news for you</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" 
        placeholder='Search' 
        value={inputValue} 
        onChange={handleInputChange}/>
        <button>Знайти</button>
      </form>
      {newsData.articles ? (
        newsData.articles?.map((item) => {
          return (
            <Link
            to={`/news/${item.title}`}
            key={item.title}
            style={{textDecoration: "none"}}
            >
              <h1>
                {item.title}
              </h1>
              <div>
                <img src={item.urlToImage} alt="" />
                <p>{item.description}</p>
              </div>
            </Link>
          )
        })
      ) : (
        <h1>Такої новини не має</h1>
      )}
    </div>
  )
}

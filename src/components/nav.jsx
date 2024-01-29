import React from 'react'
import { NavLink } from 'react-router-dom'

function isActivePage() {
    return ({isActive}) => (isActive ? "active-page" : "")
}
export default function Nav() {
  return (
    <>
        <NavLink className={isActivePage()} style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }} to="/">Main</NavLink>
        <NavLink className={isActivePage()} style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }} to="/catalog">Laptop</NavLink>
        <NavLink className={isActivePage()} style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }} to="/news">News</NavLink>
    </>
  )
}

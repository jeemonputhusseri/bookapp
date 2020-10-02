import React from 'react';
import logo from '../assets/bmuse_logo.png'
import search from '../assets/search.png'

export default function Header() {
    return <header className={"header"}>
        <img className="logo" src={logo} alt="logo"/>
        <button className="search"  aria-label="search"><img src={search} alt="search"/></button>
    </header>
}
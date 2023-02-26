import React from "react"
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsCode} from 'react-icons/bs'
import { useState } from "react"
import {GiStairsGoal} from "react-icons/gi"
import DarkMode from '../darkMode/DarkMode'

const Nav = () => {
    const [activeNav,setActiveNav]= useState('#')
    return (
        <nav>
            
            <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#'? 'active': ''}> <FaHome/></a>
            <a href="#about" onClick={() =>setActiveNav('#about')}  className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
            <a href="#experience"  onClick={() =>setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
            <a href="#portfolio"  onClick={() =>setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active': ''}><GiStairsGoal/></a>
            <a href="#projets"  onClick={() =>setActiveNav('#projets')}  className={activeNav === '#projets' ? 'active': ''}><BsCode/></a>
            {/* <a href="#contact"  onClick={() =>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a> */}
            <DarkMode/>
        </nav>

    )
}

export default Nav
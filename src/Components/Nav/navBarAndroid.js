import React, { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import "./navBarAndroid.css";
import { Link } from 'react-router-dom';

function NavBarAndroid() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='androidNav'>
      <Link to="/" className="">
      <img src="https://i.postimg.cc/gk73Ckr4/Blue-Modern-Global-Network-Company-Logo-8.png" alt="logo" className='logoImgAndroidNav'/>
      </Link>
      

      <CgMenuRight size={28} className='navBarAndroidIcon' onClick={() => setIsOpen(!isOpen)} />

      <div className={`sideBarMenu ${isOpen ? 'active' : ''}`}>
        <div className='sideMenuContent'>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>✖</button>

          <div className='sideMenuContentList'>
            <ul>
              <li>Find Jobs</li>
              <li>Companies</li>
              <li className='resourcesList'><span>Resources</span> <span><AiOutlineArrowRight size={18}/></span></li>
              <li>Links</li>
              <li>About</li>
            </ul>
          </div>
          <div className='logoutSetting'>
            <span><BiLogOut size={20}/> <p>Sign out</p></span>
            <span><IoSettingsOutline size={20}/> <p>Settings</p></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarAndroid;

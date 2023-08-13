import React from "react";
import transition from "../transition";
import { Link } from 'react-router-dom';

function Contact(){
    return (
      <div className='Contact'>
        <h1>Contact Page</h1>
        <Link className='Link' to="/">Home</Link>
      </div>
    );
  }
  
  export default transition(Contact);
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.scss';

export default class Component__Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return(
        <div className='Footer'>
            <div className='Footer__top'>
                <Link className='Link' to="/">Mentions légales</Link>
                <span> | </span>
                <Link className='Link' to="/">Politique de confidentialité </Link>
                <span> | </span>
                <Link className='Link' to="/">Plan du site</Link>
            </div>
            <div className='Footer__bottom'>
                ©Hors Trace Aventure 2024
            </div>
        </div>
      ) ;
    }
  }
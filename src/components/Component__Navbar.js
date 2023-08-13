import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.scss';

export default class Component__Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return(
        <div className='Nav'>
          <ul>
            <li>
              <Link className='Link' data-content="Home" to="/">Home</Link>
            </li>
            <li>
              <Link className='Link' data-content="Activités hiver" to="/contact">Activités hiver</Link>
            </li>
            <li>
              <Link className='Link' data-content="Activités été" to="/contact">Activités été</Link>
            </li>
            <li>
              <Link className='Link' data-content="Réservation / Contact" to="/contact">Réservation / Contact</Link>
            </li>
          </ul>
        </div>
      ) ;
    }
  }
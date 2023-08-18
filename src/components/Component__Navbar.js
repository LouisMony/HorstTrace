import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../style/Nav.scss';

export default class Component__Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isMenuActive: false
      };
      this.navMenuRef = React.createRef(); // Référence à la div .Nav
    }

    componentDidMount() {
      // Définir l'animation initiale ici
    }

    initAnimation() {
      gsap.fromTo('.test',{yPercent: 100, rotateY: -45}, {yPercent:0, rotateY:0,duration: 0.6, delay:0.3, stagger: 0.1, ease: "power3.inOut"})
    }

    closeAnimation(){
      gsap.fromTo('.test',{yPercent: 0, rotateY: 0}, {yPercent:100, rotateY:0,duration: 0.6, stagger: 0.1, ease: "power3.inOut"})
    }

    toggleMenu = () => {
      this.setState((prevState) => ({
        isMenuActive: !prevState.isMenuActive,
      }));
      if(this.state.isMenuActive === false){this.initAnimation()}
      else{
        this.closeAnimation()
      }
    };

    render() {
      const { isMenuActive } = this.state;

      return (
        <div>
          <div className={`NavToggle ${isMenuActive ? 'open' : ''}`} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`Nav ${isMenuActive ? 'active' : ''}`} ref={this.navMenuRef}>
            <ul>
              <li>
                <Link onClick={this.toggleMenu} className='Link' data-content='Home' to='/'>
                  <p className='test'><span>01</span><span className='Link__name'>Accueil</span></p>
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleMenu} className='Link' data-content='Activités hiver' to='/contact'>
                  <p className='test'><span>02</span><span className='Link__name'>Activités hiver</span></p>
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleMenu} className='Link' data-content='Activités été' to='/contact'>
                  <p className='test'><span>03</span><span className='Link__name'>Activités été</span></p>
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleMenu} className='Link' data-content='Réservation / Contact' to='/contact'>
                  <p className='test'><span>04</span><span className='Link__name'>Contact</span></p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

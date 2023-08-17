import React from 'react';
import classNames from 'classnames'; // Import the classNames utility
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../style/MusherItem.scss';

export default class MusherItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false, // Add a state property to track the active state
        };
        this.handleItemClick = this.handleItemClick.bind(this); // Bind the method to the component instance
    }

    componentDidMount() {
        this.InitAnimation();
    }

    InitAnimation() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".MusherItem").forEach(item => {
            gsap.fromTo(item.querySelectorAll(".MusherItem__border"), { width: "0%" }, {
                scrollTrigger: {
                    trigger: item,
                },
                width: '100%',
                duration: 1,
                ease: "power3.inOut"
            });

            gsap.fromTo(item.querySelectorAll(".MusherItem__left__p"), { y: 100 }, {
                scrollTrigger: {
                    trigger: item,
                },
                y: 0,
                duration: .6,
                ease: "power1.in"
                
            });
        });
    }

    // Method to handle the click event
    handleItemClick() {
        this.setState(prevState => ({
            isActive: !prevState.isActive, // Toggle the active state
        }));
    }

    render() {
        // Use classNames to conditionally apply classes
        const itemClasses = classNames('js_mushers', 'MusherItem', { active: this.state.isActive });

      return(
        <div className={itemClasses} onClick={this.handleItemClick}>
          <div className='MusherItem__left'>
            <p className='MusherItem__left__p'>{this.props.title}</p>
            <p className='MusherItem__left__description'>
            <br/>
              Naissance à Lyon en 1971.<br/><br/>

              Élevé en ville mais au contact permanent de la campagne Isèroise, rien ne le prédestinait pourtant à devenir un "néo-montagnard".<br/><br/>

              C'est en pleine mode du husky aux yeux bleus que Fjord, Alaskan Malamute entre dans la vie de Mathias en 1988. Ça tombe bien, peu assidu sur les bancs du lycée puis de la fac d'histoire, ce sera le déclencheur d'une passion tenace puis d'une véritable vocation.<br/><br/>

              Entre 1990 et 1994, des premières neiges aux dernières de l'hiver, chaque temps libre était l'occasion de découvrir une nouvelle région montagneuse même si la technique de l'apprenti musher et la volonté des premiers chiens restaient approximatives !
            </p>
          </div>
          <div className='MusherItem__border'></div>
        </div>
      ) ;
    }
  }
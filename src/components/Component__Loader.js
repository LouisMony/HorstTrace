import React from 'react';
import { gsap } from 'gsap';
import '../style/Loader.scss';

export default class Component__Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    componentDidMount(){
        console.log(sessionStorage.getItem('load'));
        if(sessionStorage.getItem('load') !== 'true'){
            this.initAnimation()
            setTimeout(this.closeLoader, 3000);
        }
        else{
            document.querySelector('.Loader').style.display = "none"
        }
        
    }

    initAnimation(){
        var tl = gsap.timeline();
        tl.fromTo('.Loader__content__text',{opacity:0}, {opacity:1,duration: 1, ease: "power4.inOut"})
        tl.fromTo('.Loader__content__line',{width:0}, {width:"25%",duration: 1.5, ease: "power4.inOut"})
    }

    closeLoader(){
        document.querySelector('.Loader').classList.add('close')
        sessionStorage.setItem('load', true)
    }
    render() {
      return(
        <div className='Loader'>
            <div className='Loader__row Loader__content'>
                <div className='Loader__content__text'>
                    <span>Horstrace</span>
                    <span>La Plagne - Montalbert</span>
                </div>
                
                <div className='Loader__content__line'></div>
            </div>
        </div>
      ) ;
    }
  }
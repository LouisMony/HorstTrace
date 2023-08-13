import React from 'react';
import '../style/MusherItem.scss'

//ANIMATION
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default class MusherItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    componentDidMount(){
      this.InitAnimation()
    }

    InitAnimation(){
      gsap.registerPlugin(ScrollTrigger)

      gsap.utils.toArray(".MusherItem").forEach(item => {
        gsap.fromTo(item.querySelectorAll(".MusherItem__border"),{width: "0%"}, {
          scrollTrigger: {
            trigger: item,
          },
          width: '100%', 
          duration: 1,
          ease: "power3.inOut"
        });

        gsap.fromTo(item.querySelectorAll(".MusherItem__left__p"),{y:200},{
          scrollTrigger: {
            trigger: item,
          },
          y: 0, 
          duration: 1.5,
          ease: "power3.inOut"
        })
      });
    }
    
    render() {
      return(
        <div className='js_mushers MusherItem link_cursor'>
          <div className='MusherItem__left'>
            <p className='MusherItem__left__p'>{this.props.title}</p>
          </div>
          <div className='MusherItem__border'></div>
        </div>
      ) ;
    }
  }
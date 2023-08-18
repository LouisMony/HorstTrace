import React from "react";
import '../style/Home.scss';
import transition from "../transition";
import Component__Footer from "../components/Component__Footer";
import MusherItem from "../components/MusherItem";

import Marquee from "react-fast-marquee";

//ANIMATION
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfilIsHovered:false,
      currentImgSrc: "1.png",
    }
    
  }
  
  componentDidMount(){
      this.InitAnimation()
      this.HandleBlocMovement()
  }

  InitAnimation(){
    
    //ANIMATION BLOC A
    const MyTitle = new SplitType('#js_title', { charClass: 'charTitle' })
    gsap.fromTo('.charTitle',{yPercent: 100}, {yPercent:0,duration: 2,stagger: 0.03, ease: "power4.inOut"})
    gsap.fromTo('#js_subtitle',{yPercent: 90, opacity:0}, {yPercent:0, opacity:1,delay:1.5,duration: .5, ease: "power1.out"})
    gsap.fromTo('.reveal_opacity',{opacity: 0}, {opacity:1,duration: 1, delay:1.8, stagger:.3, ease: "power4.inOut"})

    //ANIMATION BLOC MUSHER
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(".Home__C__Title",{
      y:'100px',
      opacity:0
    },
    {
      scrollTrigger:{
          trigger: '.Home__C__Title',
          start: 'top bottom',
          duration: 2
      },
      opacity:1,
      y:0
    })
    gsap.fromTo(".Home__C__banner",
    {scale: 0.9},
    {
      scrollTrigger:{
          trigger: '.Home__C__banner',
          start: 'top bottom',
          end:'top top',
          scrub: 1,
      },
      scale: 1,
      backgroundPositionY: "100%",
    })

    //ANIMATION BLOC CHIEN

    const galleryContainer = document.querySelector(".Home__D__gallery");
    const galleryItems = galleryContainer.querySelectorAll(".Home__D__gallery__item"); 

    const defaultItemFlex = "0 1 50px"; 
    const hoverItemFlex = "1 1 200px";
    
    const updateGalleryItems = () => {
      galleryItems.forEach((item) => {
        let flex = defaultItemFlex;
        if (item.isHovered) { 
          flex = hoverItemFlex;
        }
        item.style.flex = flex;
      })
    }

    galleryItems [0].isHovered = true; 
    updateGalleryItems();
    
    galleryItems.forEach((item) => {

      item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item;
    
        });
        updateGalleryItems()
      });
    });
  }

  HandleBlocMovement(){
      gsap.set(".Home__C__profil", {xPercent: 100, yPercent: -100});
      const bloc = document.querySelector('.Home__C__profil');
  
      let xTo = gsap.quickTo(".Home__C__profil", "x", {duration: 0.4, ease: "power3"}), yTo = gsap.quickTo(".Home__C__profil", "y", {duration: 0.4, ease: "power3"});
  
      window.addEventListener("mousemove", e => {
        xTo(e.pageX);
        yTo(e.pageY);

        if(!this.state.ProfilIsHovered){
          bloc.style.opacity = "0";
        }
        else{
          bloc.style.opacity = "1";
        }
      });
  }

  handleMouseEnter = (param, e) => {
    const bloc = document.querySelector('.Home__C__profil');
    const NewImage = document.createElement("img");
    NewImage.src = '/media/meute/' + param;
    NewImage.classList.add('inactive');
    bloc.appendChild(NewImage);
    setTimeout(function() { NewImage.classList.remove('inactive'); }, 10);
    NewImage.addEventListener('transitionend', () => {
      const FirstImage = bloc.querySelector("img");
      if(FirstImage){bloc.removeChild(FirstImage);}
    }, { once: true });
  };

  DisplayBlock = (bool) =>{
    this.setState({
      ProfilIsHovered: bool,
    });
  }

  render() {
    return (
      <div className='Home'>
  
        <div className="videobg">
          <video autoPlay muted loop >
            <source src="/media/video/home_video.mp4"  type="video/mp4" />
          </video>
        </div>
        
        
        <div className="Home__A">
          <div className="Home__A__Title">
            <h1 className="EikoFont" id="js_title">Horstrace</h1>
          </div>
          <div className="Home__A__SubTitle">
            <h2 className="EikoFont" id="js_subtitle">Bienvenue dans l’aventure.</h2>
          </div>
          
          <p className="reveal_opacity">
            <span>Besoin de renouer avec la nature?<br/></span>
            <span>De ressentir des émotions authentiques?<br/></span>
            <span>Envie de découvrir une montagne sauvage...<br/></span>
            <span>Ce sont aussi ces mots qui nous ont menés vers notre passion...<br/></span>
            <span>A votre tour entrez dans le monde fabuleux des chiens du Grand Nord,<br/></span>
            <span>écoutez-les vous conter leur histoire,<br/></span>
            <span>véritable épopée au plus proche des origines de l'homme...<br/></span>
          </p>
          <img className="reveal_opacity" alt="Scroll" src="/media/arrow.svg"/>
        </div>
        
        <div className="spacer"></div>
        
        <div className="Home__C">
          <h2 className="Home__C__Title">Nos Mushers</h2>
          <p className="Home__C__description BasicText">
            Les mushers de HORS TRACE AVENTURE ont tous pour ligne le respect de leurs animaux et leur nature profonde, par conséquent ils ajustent leur comportement et les consignes des activités en conséquence.<br/><br/>

            Ils veillent à la propreté des zones d'activités par souci sanitaire pour la meute mais aussi pour les clients et les autres usagers. Il arrive qu'ils s'arrêtent fréquemment sur les parcours pour ramasser les déjections.<br/><br/>

            Ils sont à l'écoute du travail de leurs chiens dont ils respectent les limites physiologiques et psychologiques ce qui induit qu'avec les animaux, les raisonnements mercantiles trouvent parfois une limite.<br/><br/>
          </p>

          <div className="Home__C__banner"></div>

          <div onMouseEnter={() => this.DisplayBlock(true)} onMouseLeave={() => this.DisplayBlock(false)}>
            <div onMouseEnter={() => this.handleMouseEnter("1.png")}>
              <MusherItem title="Mathias Bernal" />
            </div>
            <div onMouseEnter={() => this.handleMouseEnter("2.png")}>
              <MusherItem title="Stéphane Alcouffe" />
            </div>
            <div onMouseEnter={() => this.handleMouseEnter("3.png")}>
              <MusherItem title="Axel Boulais" />
            </div>
            <div onMouseEnter={() => this.handleMouseEnter("4.png")}>
              <MusherItem title="Tobias Olla" />
            </div>
          </div>
        
          <div className="Home__C__profil">
            <img  alt="Profil du Musher" src={`/media/meute/${this.state.currentImgSrc}`}/>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="Home__D">
          {/* <h2 className="Home__D__Title">La Meute</h2> */}
          
            <div className="Home__D__gallery">
                <div data-name="Mana" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/a.jpeg"/>
                </div>
                <div data-name="Vroum" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/c.jpeg"/>
                </div>
                <div data-name="Socrate" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/d.jpeg"/>
                </div>
                <div data-name="Jaba" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/e.jpeg"/>
                </div>
                <div data-name="Mekong" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/b.jpeg"/>
                </div>
                <div data-name="Cliff" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/f.jpeg"/>
                </div>
                <div data-name="Mana" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/a.jpeg"/>
                </div>
                <div data-name="Vroum" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/c.jpeg"/>
                </div>
                <div data-name="Socrate" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/d.jpeg"/>
                </div>
                <div data-name="Jaba" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/e.jpeg"/>
                </div>
                <div data-name="Mekong" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/b.jpeg"/>
                </div>
                <div data-name="Cliff" className="Home__D__gallery__item">
                  <img  alt="Chien" src="/media/chiens/f.jpeg"/>
                </div>
            </div>
            <p className="Home__D__description BasicText">
              A ce jour, la meute est composée de +100 chiens, Groenlandais, croisés Groenlandais ou Alaskans pour la plupart.<br/>
              Tous naissent au chenil ou sont intégrés entre 2 et 3 mois et y finissent leur vie après une retraite paisible et méritée.
              Les chiens actifs, entre 2 et 10 ans ne sont finalement qu'au nombre de 75.
              Les naissances doivent donc être régulières, chaque année, pour ne pas déséquilibrer le bon fonctionnement de la meute et le travail hivernal.
            </p>
        </div>

        <div className="spacer"></div>

        <Component__Footer/>
      </div>
    );
  }
}

export default transition(Home);
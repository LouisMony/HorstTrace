import React from "react";
import '../style/Home.scss';
import transition from "../transition";
import Component__Footer from "../components/Component__Footer";
import Component__Cta from "../components/Component__Cta";

//import Marquee from "react-fast-marquee";

//ANIMATION
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgSrc: "1.png",
    }
    
  }
  
  componentDidMount(){
      this.InitAnimation()
  }

  InitAnimation(){
    
    //ANIMATION BLOC A

    let startdelay = 2.5
    if(sessionStorage.getItem('load') === 'true'){startdelay = 0}

    const MyTitle = new SplitType('#js_title', { charClass: 'charTitle' })
    gsap.fromTo('.charTitle',{yPercent: 100}, {yPercent:0,duration: 2,stagger: 0.03, delay:(0+startdelay), ease: "power4.inOut"})
    gsap.fromTo('#js_subtitle',{yPercent: 90, opacity:0}, {yPercent:0, opacity:1,delay:(1.5+startdelay),duration: .5, ease: "power1.out"})
    gsap.fromTo('.reveal_opacity',{opacity: 0}, {opacity:1,duration: 1, delay:(1+startdelay), stagger:.3, ease: "power4.inOut"})

    //ANIMATION BLOC MUSHER
    gsap.registerPlugin(ScrollTrigger)

    document.querySelectorAll(".JsBasicH2").forEach(item=>{
      gsap.fromTo(item,{y:'100px',opacity:0},{scrollTrigger:{trigger: item, start: 'top bottom', duration: 2},opacity:1,y:0})
    })
    document.querySelectorAll(".JsBasicP").forEach(item=>{
      gsap.fromTo(item,{y:100, opacity:0},{scrollTrigger:{trigger: item, start: 'top bottom', duration: 2},opacity:1, y:0})
    })

    document.querySelectorAll(".JsProFil").forEach(item=>{
      gsap.fromTo(item,{scale:.5,opacity:0},{scrollTrigger:{trigger: item, start: 'top bottom', duration: 3},opacity:1,scale: 1})
    })

    let nextdelay = .3
    document.querySelectorAll(".Home__D__gallery__item").forEach(item=>{
      nextdelay = nextdelay + 0.03
      gsap.fromTo(item,{scale:.2,opacity:0},{scrollTrigger:{trigger: item, start: 'top bottom', duration: 3},delay: nextdelay,opacity:1,scale: 1})
    })
    
    gsap.fromTo(".Home__C__banner",{scale: 0.9},
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
          <h2 className="Home__C__Title BasicH2 JsBasicH2">Nos Mushers</h2>
          <p className="Home__C__description BasicText JsBasicP">
            Les mushers de HORS TRACE AVENTURE ont tous pour ligne le respect de leurs animaux et leur nature profonde, par conséquent ils ajustent leur comportement et les consignes des activités en conséquence.<br/><br/>

            Ils veillent à la propreté des zones d'activités par souci sanitaire pour la meute mais aussi pour les clients et les autres usagers. Il arrive qu'ils s'arrêtent fréquemment sur les parcours pour ramasser les déjections.<br/><br/>

            Ils sont à l'écoute du travail de leurs chiens dont ils respectent les limites physiologiques et psychologiques ce qui induit qu'avec les animaux, les raisonnements mercantiles trouvent parfois une limite.
          </p>

          

          <div className="Home__C__profil">
              <div className="Home__C__profil__row">
                <div className="Home__C__profil__row__item JsProFil">
                  <div className="Home__C__profil__row__item__content">
                    <p className="Home__C__profil__row__item__content__name">Mathias</p>
                    <p className="Home__C__profil__row__item__content__desc">En 1995, création de la société Hors Trace Aventure.<br></br>
                      Décidé à devenir professionnel, c'est l'installation à Montalbert en Tarentaise, petite station familiale excentrée de la grande Plagne.<br></br>

                      En 20 ans, la meute hétéroclite de chiens récupérés s'est affinée et a mûrie, les produits touristiques se sont étoffés.<br></br>

                      Sans oublier bien sûr, l'arrivée de Stéphane Alcouffe, précieux Handler, présent tous les hivers depuis 2004. </p>
                  </div>
                  <img  alt="Musher" src="/media/mushers/1.png"/>
                </div>
                <div className="Home__C__profil__row__item JsProFil">
                <div className="Home__C__profil__row__item__content">
                    <p className="Home__C__profil__row__item__content__name">Stephane</p>
                    <p className="Home__C__profil__row__item__content__desc">En 1995, création de la société Hors Trace Aventure.<br></br>
                      Décidé à devenir professionnel, c'est l'installation à Montalbert en Tarentaise, petite station familiale excentrée de la grande Plagne.<br></br>

                      En 20 ans, la meute hétéroclite de chiens récupérés s'est affinée et a mûrie, les produits touristiques se sont étoffés.<br></br>

                      Sans oublier bien sûr, l'arrivée de Stéphane Alcouffe, précieux Handler, présent tous les hivers depuis 2004. </p>
                  </div>
                  <img  alt="Musher" src="/media/mushers/2.png"/>
                </div>
              </div>
              <div className="Home__C__profil__row">
                
                <div className="Home__C__profil__row__item JsProFil">
                <div className="Home__C__profil__row__item__content">
                    <p className="Home__C__profil__row__item__content__name">Axel</p>
                    <p className="Home__C__profil__row__item__content__desc">En 1995, création de la société Hors Trace Aventure.<br></br>
                      Décidé à devenir professionnel, c'est l'installation à Montalbert en Tarentaise, petite station familiale excentrée de la grande Plagne.<br></br>

                      En 20 ans, la meute hétéroclite de chiens récupérés s'est affinée et a mûrie, les produits touristiques se sont étoffés.<br></br>

                      Sans oublier bien sûr, l'arrivée de Stéphane Alcouffe, précieux Handler, présent tous les hivers depuis 2004. </p>
                  </div>
                  <img  alt="Chien" src="/media/mushers/3.png"/>
                </div>
                <div className="Home__C__profil__row__item JsProFil">
                <div className="Home__C__profil__row__item__content">
                    <p className="Home__C__profil__row__item__content__name">Tobias</p>
                    <p className="Home__C__profil__row__item__content__desc">En 1995, création de la société Hors Trace Aventure.<br></br>
                      Décidé à devenir professionnel, c'est l'installation à Montalbert en Tarentaise, petite station familiale excentrée de la grande Plagne.<br></br>

                      En 20 ans, la meute hétéroclite de chiens récupérés s'est affinée et a mûrie, les produits touristiques se sont étoffés.<br></br>

                      Sans oublier bien sûr, l'arrivée de Stéphane Alcouffe, précieux Handler, présent tous les hivers depuis 2004. </p>
                  </div>
                  <img  alt="Chien" src="/media/mushers/4.png"/>
                </div>
              </div>
          </div>

          <div className="Home__C__banner"></div>

        </div>

        <div className="spacer"></div>

        <div className="Home__D">
          <h2 className="Home__D__Title BasicH2 JsBasicH2">La Meute</h2>
          <p className="Home__D__description BasicText JsBasicP">
              A ce jour, la meute est composée de +100 chiens, Groenlandais, croisés Groenlandais ou Alaskans pour la plupart.<br/><br/>
              Tous naissent au chenil ou sont intégrés entre 2 et 3 mois et y finissent leur vie après une retraite paisible et méritée.
              Les chiens actifs, entre 2 et 10 ans ne sont finalement qu'au nombre de 75.<br/><br/>
              Les naissances doivent donc être régulières, chaque année, pour ne pas déséquilibrer le bon fonctionnement de la meute et le travail hivernal.<br/><br/>
          </p>
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
            <p className="Home__D__description BasicText JsBasicP">
            Il est aussi essentiel de sélectionner les géniteurs, comme tout éleveur sérieux le fait, afin d'obtenir le meilleur compromis entre les caractéristiques physiques, les aptitudes au travail et la sociabilité en meute et envers les humains.<br/><br/>

            Voilà, bien sûr, l'essence même de notre métier, outre l'élaboration de prestations de qualité, ce sont avant tout des soins quotidiens, une vision à long terme de l'évolution de la meute, un rapport étroit avec ses chiens ou l'un dépend de l'autre, et vice versa.<br/><br/>
          </p>        
        </div>

        <Component__Cta text="Réserver une activité" />

        <div className="spacer"></div>

        <Component__Footer/>
      </div>
    );
  }
}

export default transition(Home);
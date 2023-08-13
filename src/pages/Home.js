import React from "react";
import '../style/Home.scss';
import transition from "../transition";
import MusherItem from "../components/MusherItem";
import { gsap } from "gsap";
import SplitType from "split-type";



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfilIsHovered:false,
      currentImgSrc: "1.png", // Ajoutez l'état pour la source d'image actuelle
    }
    
  }
  
  componentDidMount(){
      //this.InitAnimation()
      this.HandleBlocMovement()
  }

  HandleBlocMovement(){
      gsap.set(".Home__C__profil", {xPercent: 100, yPercent: -50});
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
    console.log(bloc);
    
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
        
        <video autoPlay muted loop >
          <source src="/media/video/home_video.mp4"  type="video/mp4" />
        </video>
        
        <div className="Home__A">
          <h1 className="EikoFont" id="js_title">Horstrace</h1>
          <h2 className="EikoFont">Bienvenue dans l’aventure.</h2>
          <p>
            <span>Besoin de renouer avec la nature?<br/></span>
            <span>De ressentir des émotions authentiques?<br/></span>
            <span>Envie de découvrir une montagne sauvage...<br/></span>
            <span>Ce sont aussi ces mots qui nous ont menés vers notre passion...<br/></span>
            <span>A votre tour entrez dans le monde fabuleux des chiens du Grand Nord,<br/></span>
            <span>écoutez-les vous conter leur histoire,<br/></span>
            <span>véritable épopée au plus proche des origines de l'homme...<br/></span>
          </p>
          <img alt="Scroll" src="/media/arrow.svg"/>
        </div>
        
        <div className="spacer"></div>
        <div className="Home__B">
          <div className="Home__B__left">
            <h2 className="EikoFont">La meute</h2>
            <p>
            A ce jour, la meute est composée de plus de 100 chiens, Groenlandais, croisés Groenlandais ou Alaskans pour la plupart.<br/><br/>

            Tous naissent au chenil ou sont intégrés entre 2 et 3 mois et y finissent leur vie après une retraite paisible et méritée. Les chiens actifs, entre 2 et 10 ans ne sont finalement qu'au nombre de 75.<br/>
            Les naissances doivent donc être régulières, chaque année, pour ne pas déséquilibrer le bon fonctionnement de la meute et le travail hivernal.<br/><br/>

            Le Groënlandais ou chien du Groënland est le chien de traîneau par excellence, compromis parfait entre la vitesse du husky et la puissance du malamute.<br/>
            Bâti pour l'endurance, d'un poids compris entre 30 et 40 kg, il est l'un des chiens les plus primitifs, se targuant de 10 000 ans passés au contact de l'homme.<br/><br/>

            Il est aussi essentiel de sélectionner les géniteurs, comme tout éleveur sérieux le fait, afin d'obtenir le meilleur compromis entre les caractéristiques physiques, les aptitudes au travail et la sociabilité en meute et envers les humains.<br/><br/>

            Voilà, bien sûr, l'essence même de notre métier, outre l'élaboration de prestations de qualité, ce sont avant tout des soins quotidiens, une vision à long terme de l'évolution de la meute, un rapport étroit avec ses chiens ou l'un dépend de l'autre, et vice versa.

            </p>
          </div>
          <div className="Home__B__right">
            <img alt="Chien groenlandais" src="/media/meute/Meute_1.png"/>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="Home__C">
          <h2>Nos Mushers</h2>
          <p className="Home__C__description">
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
      </div>
    );
  }
}

export default transition(Home);
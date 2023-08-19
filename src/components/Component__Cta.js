import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Cta.scss';

export default class Component__Cta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return(
        <div className='Cta'>
            <Link className='Link' to={this.props.link}><span>{this.props.text}</span></Link>
        </div>
      ) ;
    }
  }
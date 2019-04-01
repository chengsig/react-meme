import React, { Component } from 'react';
import './Meme.css';

class Meme extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(evt) {
        console.log(evt.target.id)
        this.props.triggerDelete(evt.target.id);
        
    }

  render() {
    return (
        <div className="Meme" >
           
           <img key={this.props.id} 
                src={this.props.img} 
                alt="generated meme"/>
            <h5 id="top">{this.props.topText}</h5>
            <h5 id="bottom">{this.props.bottomText}</h5>
            <button className="Meme-deleteBtn" 
                    id={this.props.id} 
                    onClick={this.handleDelete}>Delete</button>
        </div>
    );
  }
}

export default Meme;
import React, { Component } from 'react';


class AddMemeForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
            img:'',        
            topText: '',
            bottomText: '' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.triggerSubmit( this.state );
        this.setState({ 
            img: '',
            topText: '',
            bottomText: ''
        });

    }

    handleChange(evt){
        this.setState( {[evt.target.name]: evt.target.value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor='img'>Image URL</label> <br/>
                  <input id='img' name='img' value={this.state.img} onChange={this.handleChange}/> <br />

                  <label htmlFor='topText'>Top Text</label> <br/>
                  <input id='topText' name='topText' value={this.state.topText} onChange={this.handleChange}/> <br />

                  <label htmlFor='bottomText'>Bottom Text</label> <br/>
                  <input id='bottomText' name='bottomText' value={this.state.bottomText} onChange={this.handleChange}/> <br />
                  
                  <button>Add Meme</button> 
                </form>
            </div>
        );
    }
}

export default AddMemeForm;
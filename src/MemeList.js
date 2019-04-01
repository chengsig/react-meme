import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMemeForm from './AddMemeForm';
import Meme from './Meme';


class MemeList extends Component {
    constructor(props){
        super(props);
    this.makeMeme = this.makeMeme.bind(this);
    }
    makeMeme(obj){
        this.props.dispatch({
            type: 'ADD_MEME',
            payload: obj    
        });
    };

    render() {
        return (
            <div>
                <AddMemeForm triggerSubmit={this.makeMeme}/>
            </div>
        );
    }
}

export default MemeList;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMemeForm from './AddMemeForm';
import uuid from 'uuid/v4';
import Meme from './Meme';


class MemeList extends Component {
    constructor(props){
        super(props);
        this.makeMeme = this.makeMeme.bind(this);
        this.deleteMeme = this.deleteMeme.bind(this);
    }

    makeMeme(obj){
        let newMeme = {...obj, id: uuid()};
        this.props.dispatch({
            type: 'ADD_MEME',
            payload: newMeme   
        });
    };

    deleteMeme(id){
        this.props.dispatch({
            type: 'DELETE_MEME',
            payload: id
        });
    };

    render() {
        return (
            <div className="MemeList">
                <AddMemeForm triggerSubmit={this.makeMeme}/>
                <div className="MemeList-added">
                    {this.props.memes.map(m => 
                        <Meme key={m.id}
                              id={m.id}
                              img={m.img}
                              topText={m.topText}
                              bottomText={m.bottomText} 
                              triggerDelete={this.deleteMeme}
                              />
                        )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { memes: state.memes };
}

const connectToSate = connect(mapStateToProps);

export default connectToSate(MemeList);
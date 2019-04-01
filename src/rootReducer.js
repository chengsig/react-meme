const INITIAL_STATE = { memes: [] };


function rootReducer(state=INITIAL_STATE, action){

    if(action.type === 'ADD_MEME'){
        return { memes: [...state.memes, action.payload ]}
    }
    else if(action.type === 'DELETE_MEME'){
        return { memes: state.memes.filter(m => m.id !== action.payload.id )}
    }
    else{
        return state;
    }

}

export default rootReducer;
import { useEffect, useReducer } from "react";

function usePersistedReducer(reducer,initialState,key){
    const [state,dispatch] = useReducer(reducer,initialState, (initial)=>{
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initial;
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state));
    },[state,key])

    return [state,dispatch]
}

function showsReducer(prevState,action){
    switch(action.type){
        case 'Add':{
            return [...prevState,action.showId]
        }
        case 'REMOVE':{
            return prevState.filter(showId => showId !== action.showId);
        }
    }
}

export function useShows(key = 'shows'){
    return usePersistedReducer(showsReducer,[],key)
}
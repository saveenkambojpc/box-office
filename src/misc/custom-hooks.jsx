import { useEffect, useReducer, useState } from "react";
import { apiGet } from "./config";


function showsReducer(prevState, action) {
    switch (action.type) {
        case 'ADD': {
            return [...prevState, action.showId];
        }

        case 'REMOVE': {
            return prevState.filter(showId => showId !== action.showId);
        }

        default:
        // return prevState;
    }
}


function usePersistedReducer(reducer, initialState, key) {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, dispatch];
}


export function useShows(key = 'shows') {
    return usePersistedReducer(showsReducer, [], key)
}

// ---------------------------

export function useLastQuery(key = 'lastQuery') {
    
    const [input, setInput] = useState(() => {
        const persisted = sessionStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : "";
    });

    const setPersistedInput = newState =>{
        setInput(newState);
        sessionStorage.setItem(key,JSON.stringify(newState));
    }
    return [input,setPersistedInput];
}

// ---------------------------------------------
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        }
        case 'FETCH_FAILED': {
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        }

        default: { return prevState; }
    }

}
const initialState = {
    data: {},
    isLoading: true,
    error: null
}

export function useShow(showId){
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {

        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(result => {
            dispatch({
                type: 'FETCH_SUCCESS',
                data: result
            })

        }).catch(err => {
            dispatch({
                type: 'FETCH_FAILED',
                error: err.message
            })


        })
    }, [showId])

    return state;



}
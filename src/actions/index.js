import axios from 'axios';
import React, {useState} from 'react';
import {initialState} from './../reducers';

//weird order, but bear with me
export const ADD_SMURF = "ADD_SMURF";
export const SMURF_FETCH = "SMURF_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_ERROR = "FETCH_ERROR"; //slice of state for error msg !

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

const [state,setState] = useState(initialState);

export const fetchSmurfs = () =>{
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
       
       return({type:FETCH_SUCCESS,payload:setState(res)});
    }).catch(err=>{
        return({type:FETCH_FAIL,payload:setState(err)})
       
    })
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf=(smurf)=>{
    return ({type:ADD_SMURF, payload:smurf});
}
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const setError=(error)=>{
    return ({type:FETCH_ERROR,payload:error});
}


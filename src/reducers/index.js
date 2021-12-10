//import SMURF_FETCH from '*actions' X
//  import api call function, too! 
//import FETCH_SUCCESS from --same X 
//import FETCH_FAIL from --same X
//import ADD_SMURF from --same X
//import auch FETCH_ERROR -- the error message slice of state X
import {fetchSmurfs} from './../actions';
import {SMURF_FETCH,FETCH_SUCCESS,FETCH_FAIL,ADD_SMURF,FETCH_ERROR} from './../actions';


export const initialState = {
    smurfs: [],
    loading: 0, //NOT an int! BOOL value!!
    error: 'Error loading your smurfs!'
}

const reducer = (state, action)=>{
    switch(action.type){
        case (SMURF_FETCH): //should return a fetch call to our smurf api, living at http://localhost:3333/smurfs
            return({
                ...state, smurfs: [...state.smurfs, action.payload] //currently erroring out ...
            });
        case (FETCH_SUCCESS): //then, on checking if SMURF_FETCH succeeded, set into state our smurfs
        return({
            ...state, setState(smurfs)
        });
        case (FETCH_FAIL): //if SMURF_FETCH failed
        return({
            error: error
        });
        case (ADD_SMURF):
            return ({
                ...state, setState(ADD_SMURF) 
            });
        case (FETCH_ERROR):
            return({
                ...state, error: !state.smurfs.error
            })
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState: X
//  - an array of smurfs X
//  - a boolean indicating if the app is loading X
//  - a string indicating a possible error message X

//2. Add in the arguments needed to complete a standard reducer function. X
//3. Add in a reducer case to accomidate the start of a smurf fetch. X
//4. Add in a reducer case to accomidate the successful smurf api fetch. X
//5. Add in a reducer cases to accomidate the failed smurf api fetch. X
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list. X
//7. Add in a reducer case that adds in a value to the error message. X
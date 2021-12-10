//import SMURF_FETCH from '*actions'
//  import api call function, too! 
//import FETCH_SUCCESS from --same
//import FETCH_FAIL from --same
//import ADD_SMURF from --same
//import auch FETCH_ERROR -- the error message slice of state
import {fetchSmurfs} from './../actions';
import {SMURF_FETCH} from './../actions';


export const initialState = {
    smurfs: [],
    loading: 0, //NOT an int! BOOL value!!
    error: 'Error loading your smurfs!'
}

const reducer = (state, action)=>{
    switch(action.type){
        case (SMURF_FETCH): //should return a fetch call to our smurf api, living at http://localhost:3333/smurfs
            return({
                fetchSmurfs(state)
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
                ...state, setState(ADD_SMURF) //all the needful is in actions ! ::ADD_SMURF
            });
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";

const counter = redux.createStore(reducer, applyMiddleware(logger.default));


function reducer(state ={Amount :0}, action){
    console.log( "=======",action);
    if(action.type === "INC"){
        return {Amount: state.Amount + action.payload}
    } else if (action.type === "SUB"){
        return {Amount: state.Amount - 4}
    } else if (action.type === "MUL"){
        return {Amount: state.Amount * 4}
    } else if (action.type === "Div"){
        return {Amount: state.Amount / 2}
    }

}

function INCAmounnt(number){
    return ( {type: "INC" ,payload: number } )
}
function SUBAmounnt(){
    return ( {type: "SUB" } )
}
function MULAmounnt(){
    return ( {type: "MUL" } )
}
function DIVAmounnt(){
    return ( {type: "Div" } )
}
counter.dispatch(INCAmounnt(100));
counter.dispatch(SUBAmounnt());
counter.dispatch(MULAmounnt());
counter.dispatch(DIVAmounnt());

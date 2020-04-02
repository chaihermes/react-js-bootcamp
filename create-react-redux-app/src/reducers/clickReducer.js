import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';

//Seta o estado inicial da aplicação. Começa vazio.
const initialState = {
    newValue: ''
};


//Aqui explica o que irá acontecer quando o estado inicial é alterado: a constante clickReducer recebe como parâmetros o estado inicial e a action, entra no switch: caso a ação seja a de clicar no botão, desestrutura o estado e a ação recebe o novo valor de clicado. Caso contrário, mantém o estado.
export const clickReducer = (state = initialState, action) =>
{ switch(action.type){
    case CLICK_UPDATE_VALUE:
        return {
            ...state,
            newValue: action.newValue
        };
    default:
        return state;
}
};
////////////////////////////////////////////////
//2. reducers: eles executam a ação que altera o estado da aplicação em resposta a action enviada para a Store.
///////////////////////////////////////////////////
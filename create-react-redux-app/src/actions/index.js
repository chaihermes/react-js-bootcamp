import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';


export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});


/////////////////////////////////////////////////////
// 1. actions: objetos com dados que são enviados da sua aplicação para a Store. Elas são a única fonte de informação para a Store. Você manda eles para a store usando: store.dispatch()
//////////////////////////////////////////////////
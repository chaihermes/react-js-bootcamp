import { createStore } from 'redux';
import { Reducers } from '../reducers';

export const Store = createStore(Reducers);
/////////////////////////////////////
//cria a Store pra receber as informações passadas via action.
///////////////////////////////////
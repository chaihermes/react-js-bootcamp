import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    inputValue: ''
  }
  //Seta o estado inicial como vazio. O usuário não digitou nada no campo do formulário.


  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  //variável que guarda a alteração do estado inicial. Recebe o que o usuário digitar no campo do formulário.


  render(){
    const { 
      clickButton,
      newValue
    } = this.props;

    //as constantes clcikButton e newValue serão passadas via props.

    const { inputValue } = this.state;

    return(
        <div className="App" style={{ paddingTop: '10px' }}>
            <input 
                onChange={this.inputChange}
                type='text'
                value={this.state.inputValue} />
            <button onClick={() => clickButton(this.state.inputValue)}>Click me!</button>
            <h1>{ newValue }</h1>
          </div>
    )
  }
};
// o return cria o campo input do formulário, que recebe como valor o que é digitado pelo usuário. O botão, quando clicado, manda o que foi digitado pelo usuário no input para o newValue, na action, que manda pra Store, que passa pro reducer executar a ação. Assimo que foi digitado no campo input do form e depois clicar no botão, aparece na tela abaixo do formulário, no h1.


const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)
(App);


///////////////////////////////////////////////////////////////////
//Redux simplifica a evolução de estados em uma aplicação quando há múltiplos estados para controlar e muitos componentes que precisam atualizar ou se inscrever nessa evolução, tirando a responsabilidade de cada componente de guardar o estado e passando para uma centralizada e única Store. 

// 1. actions: objetos com dados que são enviados da sua aplicação para a Store. Elas são a única fonte de informação para a Store. Você manda eles para a store usando: store.dispatch()

//2. reducers: eles executam a ação que altera o estado da aplicação em resposta a action enviada para a Store.
/////////////////////////////////////////////////////////////////////
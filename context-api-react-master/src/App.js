
import React, { Component, Fragment } from 'react'
 
import Departments from './components/Departments'
import Users from './components/Users'
import Loading from './components/Loading'

import './index.css'

//1. passo de como usar o context API
//setando propriedades default. Criação do estado inicial. Não tem loading, nem mensagem.
//Cria um objeto Contexto (context). Quando o React renderiza um componente que assina este objeto Contexto (context), este vai ler o valor atual do Provider superior na árvore que estiver mais próximo.
const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: (message) => { },
  hideLoading: () => { }

})



class App extends Component {
  //esse state que faz a manipulação  do que aparece na tela.
  //Estado inicial da aplicação: sem loading e mensagem aparecendo na tela.
  state = {
    loading: false,
    message: null
  }

  //Condições da variável showLoading: será mostrada quando loading mudar seu estado para true, exibindo juntamente a mensagem na tela do usuário.
  showLoading = (message) => this.setState({
    loading: true,
    message
  })

  //Retorna o estado de loading para false depois que a "função aconteceu." É uma resposta ao async await de Departments e Users.
  hideLoading = () => this.setState({ loading: false })

  render() {
    const { showLoading, hideLoading } = this

    const value = {
      ...this.state,
      showLoading,
      hideLoading
    }

    return (
      // pra cada context precisa ter um provider e um consumer
      <LoadingContext.Provider value={value}>
        {/* value é default do provider. Provider permite o acesso ao contexto. (2. passo) 
        Nesse caso, o value é o estado inicial da aplicação setado acima.
        Aqui, no value passamos o valor que queremos usar na aplicação para esse context.*/}
        <LoadingContext.Consumer>
          {/* O consumer é quem consome a informação, o contexto passado pelo provider. (3. passo) */}
          {
            ({ showLoading, hideLoading, loading, message }) => (
              <Fragment>
                <Users {...{ showLoading, hideLoading }}/>
                <Departments {...{ showLoading, hideLoading }}/>
                <Loading {...{ loading, message }}/>
              </Fragment>
            )
          }
        </LoadingContext.Consumer>
      </LoadingContext.Provider>

      
    )
  }
}
 
export default App
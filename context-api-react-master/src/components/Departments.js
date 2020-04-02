//////////////////////////////////////////////////////////////////
//Precisa rodar o comando: npm install react-spinkit --save
//no terminal
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//A context API fornece a forma de compartilhar dados, entre todos componentes da mesma árvore de componentes, sem precisar passar explicitamente props entre cada nível.

//Contexto (context) é indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React. Usuário autenticado ou o idioma preferido, são alguns casos comuns

//1. Primeiro criamos um contexto com createContext(string|object), que recebe como argumento o valor default do contexto.

// 2. todo objeto contexto vem com um componente Provider que permite com que os componentes que “assinam” esse contexto possam acessar suas mudanças.

// 3. é o componente que consome o contexto fornecido pelo provider.
//////////////////////////////////////////////////////////////////


//import React, { Component, Fragment } from 'react'
import React from 'react'
 
//import Loading from './Loading'
 
import { getDepartments } from '../service/api'
 

//Maneira inicial como estava feito o código:
// class Departments extends Component {
 
//     state = {
//         loading: false
//     }
 
//     getDepartments = async () => {
//         this.setState({ loading: true })
//         const data = await getDepartments().then(response => {
//             this.setState({ loading: false })
//             return response
//         })
//         console.log({ data })
//     }
 
//     render() {
//         const { loading } = this.state
 
//         return (
//             <Fragment>
//                 <button onClick={this.getDepartments}>Buscar departamentos</button>
//                 <Loading loading={loading} message='Carregando departamentos...' />
//             </Fragment>
//         )
//     }
// }
 
// export default Departments

//Maneira como escrevemos o código usando context:
function Departments(props){

    const handleGetDepartments = async () => {
        const { showLoading, hideLoading } = props
        
        showLoading('Carregando departamentos...')

        const response = await getDepartments().then((response) => {
            hideLoading()
            return response
        })
        console.log({response})
    }

    return (
        <button onClick={handleGetDepartments}>Buscar Departamentos</button>
    )
}

export default Departments
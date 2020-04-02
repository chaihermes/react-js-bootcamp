
import React from 'react'
 
//import Loading from './Loading'
 
import { getUsers } from '../service/api'
 
// class Users extends Component {
 
//     state = {
//         loading: false
//     }
 
//     getUsers = async () => {
//         this.setState({ loading: true })
//         const data = await getUsers().then(response => {
//             this.setState({ loading: false })
//             return response
//         })
//         console.log({ data })
//     }
 
//     render() {
//         const { loading } = this.state
 
//         return (
//             <Fragment>
//                 <button onClick={this.getUsers}>Buscar usuários</button>
//                 <Loading loading={loading} message='Carregando usuários...' />
//             </Fragment>
//         )
//     }
// }
 
//export default Users



function Users(props){

    const handleGetUsers = async () => {
        const { showLoading, hideLoading } = props;
        
        showLoading('Carregando usuários...');

        const response = await getUsers().then((response) => {
            hideLoading();
            return response;
        });
        console.log({response})
    };

    return (
        <button onClick={handleGetUsers}>Buscar Usuários</button>
    )
        
    
}

export default Users
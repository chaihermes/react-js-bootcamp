import React, { Component } from 'react'
import logo from '../logo.png'

export class Header extends Component {
    render(){
        return (
            <div>
                <header>
                    <img src={logo} alt="Logo Studio Ghibli" />
                </header>
            </div>
        )
    }
}

// const Header = () => {
//     return(
//         <div>
//             <header>
//                 <img src={logo} alt="Logo Studio Ghibli" />
//             </header>
//         </div>
//     );
// }

//export default Header;
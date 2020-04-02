import React from 'react' 
 
import Spinner from 'react-spinkit' 
 
const Loading = ({ loading, message }) => {
    //loading é o boolean que diz se o pacman aparece ou não 
    //o return é um if ternário, que se o loading acontecer (o botão for clicado), o pacman aparece na tela do usuário.
    return loading ? ( 
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='pacman' 
                    fadeIn='none' 
                    color='yellow' 
                /> 
                <span className='message'> 
                    {message} 
                </span> 
            </div> 
        </div> 
    ) : null 
} 
 
export default Loading
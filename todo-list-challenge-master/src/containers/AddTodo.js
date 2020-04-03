import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
//import { Form, Button } from 'antd'

// function AddTodo() {

//     return (
//         <div>
//             {/* //esse é o componente que deve lidar com a adição de todos */}
//         </div>
//     )
// }

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <>
            <form   
                onSubmit={e => {
                    e.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add TO DO</button>
            </form>
        </>
    )
}

export default connect()(AddTodo)
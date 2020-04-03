import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
//import { List } from 'antd'

//crie uma forma de popular o componente List com o componente Todo de acordo os as possíveis pros passadas ao TodoList

// export default function TodoList() {
//     return (
//         <List bordered style={{width: "100%", margin: "0 auto"}}>
            
//         </List>
//     )
// }

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
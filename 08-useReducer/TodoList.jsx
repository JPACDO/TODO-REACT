import { Todoitem } from "./Todoitem"


export const TodoList = ( { todos = [], onDeleteTodo, onToggleTodo } ) => {



  return (
    <ul className="list-group">
    {
        todos.map(todo => (

            <Todoitem 
              key={todo.id} 
              todo={todo} 
              onDeleteTodo={ onDeleteTodo }
              onToggleTodo = {onToggleTodo}
            />
        ))
    }
</ul>
  )
}

/* eslint-disable react/jsx-key */
export function Todos({todoList}){
    console.log(todoList)
    return (
        <div>
            
            {todoList.map(function(todo){
                return <div>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button>Mark as completed</button>
                </div>
            })}
        </div>
    )
}
export function Todos({todoList}){
    return (
        <div>
            {todoList.map(function(todo){
                return 
                <div>
                <h2>title</h2>
                <h3>Description</h3>
                <button>Mark as completed</button>
            </div>
            })}
        </div>
    )
}
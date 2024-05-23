import { KeyboardEventHandler, useState, useEffect } from 'react'
import './App.css'

interface Task {
    id : number,
    text : string,
    completed : boolean
}

function Bucket() {
    interface Task {
        id : number,
        text : string,
        completed : boolean
    }

    const [todos, setTodos] = useState<Task[]>([])
    const [input, setInput] = useState<string>("")
    const [completed, setCompleted] = useState(0)

    const addTodo = (text : string) => {
        if(input !== ""){
        setTodos([...todos, {id: todos.length + 1, text: text, completed: false}])
        setInput('')
        }
    }



    useEffect(() => {
        let count = 0
        todos.forEach((task) => {
        if(task.completed){
            count++
        }
        })
        setCompleted(count)
    }, [todos])

    const crossOut = (id : number) => {
        setTodos(todos.map(todo => {
        if (todo.id === id){
            return {...todo, completed: !todo.completed}
        }
        return todo
        }))
    }

    const handleKeyDown : KeyboardEventHandler<HTMLInputElement> = (event) => {
        if(event.key === 'Enter' && input !== ""){
        addTodo(input)
        }
    }

    return (
        <>
          <h1>My to-do List</h1>
    
          <div className="bucket">
            {todos.map((item) => (
              <Item task={item} crossOut={crossOut} key={item.id}/>
            ))}
          </div>
          <div>{completed} / {todos.length} Tasks completed!</div>
    
          <input id="todo-task" value={input} onChange={(event) => {setInput(event.target.value); console.log(input)}} onKeyDown={handleKeyDown}/> 
          <button onClick={() => {addTodo(input)}} > Add </button>
        </>
      )

}

interface ItemProp{
    task : Task,
    crossOut : (id : number) => void,
}

function Item ({task, crossOut} : ItemProp) {
    return (
        <div className={task.completed ? "completed" : ""}>
        <input onChange={() => crossOut(task.id)} type="checkbox" checked={task.completed}/> {task.text} 
       
        </div>
    )
}

export default Bucket
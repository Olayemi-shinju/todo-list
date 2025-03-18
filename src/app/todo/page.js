'use client'

import { useState } from "react"

export default function page(){
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')

    const addTodo = ()=>{
        if(!input.trim()){
            alert('Todo cannot be empty')
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false
        }
        setTodos([newTodo, ...todos])
        setInput('')
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo) => todo.id !== id))
        alert('todo deleted')
    }

    const toggleComplete = (id)=>{
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }

    const filterTodo = todos.filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase()))

    return(
        <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl-font-bold text-center mb-4">TO-DO App</h1>
            <div className="flex gap-2 mb-4">
                <input type="text" className="flex-1 p-2 border rounded" placeholder="Add a new task......." value={input} onChange={(prev)=>setInput(prev.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTodo}>Add</button>
            </div>
            <input type="text" className="w-full p-2 rounded mb-4" name="" id="" placeholder="Search tasks.." value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <ul>
                {
                    filterTodo.map((e)=>(
                        <li key={e.id} className={`flex justify-between items-center p-2 mb-2 rounded ${e.completed ? 'bg-green-400' : 'bg-white'}`}>
                            <span className={e.completed ? 'line-through text-gray-500' : 'text-black'}>{e.text}</span>
                            <div className="flex gap-3 ">
                                <button className="text-green-500" onClick={()=>toggleComplete(e.id)}>
                                    {e.completed ? 'Completed' : 'Active'}
                                </button>
                                <button className="text-red-600" onClick={()=>deleteTodo(e.id)}>Delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
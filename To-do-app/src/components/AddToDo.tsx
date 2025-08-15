import {useState, type FormEvent} from 'react'


const AddToDo = () => {
  const[todo, setTodo]=useState("");



  const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      handleAddToDo(todo)
      setTodo("")
  }
  
    return (
    <>
    <form onSubmit={handleFormSubmit} >
    <input type='text' name="" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
        <button type="submit" > Add</button>
    </form>
    </>
  )
}

export default AddToDo;
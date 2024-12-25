import React, { useState } from 'react';
import '../style/todo.css';


function Todo() {
    let [todo , setTodo] = useState([]);
    

    let AddNew = (event)=>{
        event.preventDefault();

        let taskName = event.target.task.value;

        let task = {name : taskName , done : false}

        if(todo.filter(item=> item.name ===taskName).length > 0 ){
            alert("Task Already Added");
            return
        }
        let finalTodo = [...todo , task];


        setTodo(finalTodo);
        
        console.log(task);
    }

    let deleteTask = (task)=>{
        
        // Same Problem , Short Solution 👇
        let finalTodo = todo.filter(item=> item!== task);

        
        // Same Problem , lenghty Solution 👇
        // let finalTodo =  [todo]
        // let index = finalTodo.indexOf(task)
        // finalTodo.splice(index ,1)

        
        setTodo(finalTodo);

        
        console.log(todo);
        
    }


    let MarkasDone = (index)=>{
        let finalTask = todo[index];
        finalTask.done = !finalTask.done;

        let finalTodo = [...todo];
        finalTodo[index] = finalTask;
        
        setTodo(finalTodo);
        
        console.log("Orginal Todo: ",todo);
        console.log(finalTodo); 
    }


  return (
    <div className='container my-5'>
        <div className="row">
            
            <form className="input-group gap-3" onSubmit={AddNew}>

                <input type="text" placeholder="Add a Todo Task" name='task' className='form-control rounded-0' />
                <button className='btn btn-outline-dark col-3 rounded-0' type='submit'>Save</button>

            </form>

            <div className="col-12 my-5 todo text-start">
                
                {todo.map((data , index)=>{
                    return(
                        
                        <div className='row'> 
                        
                        <div onClick={()=>MarkasDone(index)} className={data.done  ? 'text-decoration-line-through col-11' : "col-11"}> {data.name}</div>
                        <button onClick={()=>deleteTask(data)} className='col-1'> &times; </button>
                        </div>
                    )
                })}
                
                
            </div> 
        </div>
    </div>
  )
}

export default Todo

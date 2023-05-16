import './App.css';
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1,name : "Buy Shopping", priority: "low"},
    { id: 2,name : "Clean Bathroom", priority: "High"},
    { id: 3,name : "Car's MOT", priority: "Low"}
  ])

  const [newTask, setNewTask] = useState("")
  const [newPriority, setNewPriority] = useState("")

  const completeTask = (taskId) => {
    // console.log("Purchase button clicked on:", itemId)
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const listTasks = tasks.map((task) => {
    return(
      <li key= {task.id}>
      {task.name}
      <button onClick={ () => completeTask(task.id)}>Complete</button>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const lastTask = tasks.slice(-1)
    const newTaskObj = { id: lastTask[0].id+1, name: newTask };
    const nextItems = [...tasks, newTaskObj];
    setTasks(nextItems);
    setNewTask("")
  };
  
  return (
    <div className="App">
      <h1>To Do List </h1>
    <hr></hr>

    <form onSubmit={saveNewTask} >
      <label htmlFor='new-task'>Add a new Task: </label>
      <input id='new-task' type='text' value= {newTask} onChange={handleTaskInput} />
       <input type="radio" id="high" name="priority" value="high"/>
      <label for="high">High</label>
       <input type="radio" id="low" name="priority" value="low"/>
       <label for="low">Low</label>
      <input type= 'submit' value="save New Task"/>
    </form>

    <ul>
      {listTasks}
    </ul>

    

    </div>
  );
}

export default App;

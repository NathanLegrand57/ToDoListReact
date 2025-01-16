import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Aller à la salle 💪", completed: false },
    { id: 2, title: "Lire 📚", completed: false },
    { id: 3, title: "Coder 💻", completed: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      alert("Task title cannot be empty");
      return;
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const [countCompletedTasks, setCountCompletedTasks] = useState(0);
  const [countUncompletedTasks, setCountUncompletedTasks] = useState(0);
  let [isChecked, setChecked] = useState(false);

  const toggleChecked = () => {
    // S'active lorsqu'on coche ou décoche une tâche
    setChecked(!isChecked);
    if (!isChecked) {
      // Si la tâche devient cochée lors du clic
      console.log("La tache est cochee ? " + !isChecked);
      setCountCompletedTasks(countCompletedTasks + 1); // On ajoute 1 au nombre de tâches complétées
      if (countUncompletedTasks > 0) {
        // Si le nombre de tâches non complétées est supérieur à 0
        setCountUncompletedTasks(countUncompletedTasks - 1); // On retire 1 au nombre de tâches non complétées
      }
    } else if (isChecked) {
      console.log("La tache est cochee ? " + !isChecked);
      setCountUncompletedTasks(countUncompletedTasks + 1);
      if (countCompletedTasks > 0) {
        setCountCompletedTasks(countCompletedTasks - 1);
      }
    }
  };

  const listTasks = tasks.map(
    (
      task // On parcourt le tableau tasks
    ) => (
      <div className="flex" key={task.id}>
        <li>
          <input
            className="ml-2 mr-2"
            type="checkbox"
            value={isChecked}
            checked={task.checked} // On vérifie si la tâche est cochée ou non
            onChange={toggleChecked} // On appelle la fonction toggleChecked lorsqu'on coche ou décoche une tâche
          />
          {task.title}
        </li>
      </div>
    )
  );

  return (
    <div className="main">
      <h1 className="mt-20 text-4xl flex justify-center">ToDoList</h1>
      <div className="flex justify-center text-white">
        <div className="mt-10 bg-gray-400 rounded-lg px-10 py-8">
          <input
          className="text-black p-1"
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            required
          />
          <button
            className="ml-4 px-4 py-1 rounded-md bg-red-500 text-black"
            onClick={addTask}
          >
            Add Task
          </button>
          <ul className="mt-4">{listTasks}</ul>
          <p className="mt-10">Completed tasks : {countCompletedTasks}</p>
          <p>Uncompleted tasks : {countUncompletedTasks}</p>
        </div>
      </div>
    </div>
  );
}
export default App;

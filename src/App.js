import React, { useState } from "react";
import "./App.css";
export default App;

const tasks = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: true,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
];

function App() {
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);
  const [countUncompletedTasks, setCountUncompletedTasks] = useState(0);
  let [isChecked, setChecked] = useState(false);

  const toggleChecked = () => { // S'active lorsqu'on coche ou décoche une tâche
    setChecked(!isChecked); 
    if (!isChecked) { // Si la tâche devient cochée lors du clic
      console.log("La tache est cochee ? " + !isChecked);
      setCountCompletedTasks(countCompletedTasks + 1); // On ajoute 1 au nombre de tâches complétées
      if (countUncompletedTasks > 0) { // Si le nombre de tâches non complétées est supérieur à 0
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

  const listTasks = tasks.map((task) => ( // On parcourt le tableau tasks
    <div className="flex" key={task.id}>
      <li>
        {task.title}
        <input
          className="ml-2"
          type="checkbox"
          value={isChecked}
          checked={task.checked} // On vérifie si la tâche est cochée ou non
          onChange={toggleChecked} // On appelle la fonction toggleChecked lorsqu'on coche ou décoche une tâche
        />
      </li>
    </div>
  ));

  return (
    <div className="main">
      <h1 className="mt-20 text-4xl flex justify-center">ToDoList</h1>
      <div className="flex justify-center text-white">
        <div className="mt-10 bg-gray-400 rounded-lg px-10 py-8">
          <ul>{listTasks}</ul>
          <p className="mt-10">Completed tasks : {countCompletedTasks}</p>
          <p>Uncompleted tasks : {countUncompletedTasks}</p>
        </div>
      </div>
    </div>
  );
}

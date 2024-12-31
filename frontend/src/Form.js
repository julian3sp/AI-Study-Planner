import { useState } from 'react';

let nextTaskID = 0; // Unique ID for tasks

export default function TaskForm() {
    // State to hold the current user input
    const [taskInput, setTaskInput] = useState('');

    // State to hold the list of tasks
    const [taskList, setTaskList] = useState([]);

    const handleRemoveItem = (id) => {
        const newItems = taskList.filter((task) => task.id !== id);
        setTaskList(newItems);
      };

    return (
        <>
            {/* Input field to capture the user's task */}
            <input
                value={taskInput} // Controlled input tied to state
                onChange={event => setTaskInput(event.target.value)} // Update state on input change
                placeholder="Enter a topic" // Placeholder for user guidance
            />

            {/* Button to add the task */}
            <button onClick={() => {
                const isDuplicate = taskList.some(task => task.name === taskInput); // Check if task already exists
                if (taskInput !== '' && !isDuplicate) {
                    setTaskList([
                        ...taskList,
                        { id: nextTaskID++, name: taskInput } // Add new task with a unique ID
                    ]);
                    setTaskInput(''); // Clear input after adding
                }
            }}>
                Add Task
            </button>

            {/* List of tasks */}
            <div class = "my-list">
            <ul >
                {taskList.map(task => (
                    <li key={task.id}>{task.name} <button onClick={() => handleRemoveItem(task.id)}>x</button></li> // Display task name
                ))}
            </ul>
            </div>
            <button onClick={ () => {
                //send post request to backend
            }
            }>
                Submit
            </button>
        </>
    );
}

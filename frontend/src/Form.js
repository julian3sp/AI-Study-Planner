import { useState } from 'react';

let nextTaskID = 0; // Unique ID for tasks

export default function TaskForm() {
    // State to hold the current user input
    const [taskInput, setTaskInput] = useState('');

    // State to hold the list of tasks
    const [taskList, setTaskList] = useState([]);

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
            <ul>
                {taskList.map(task => (
                    <li key={task.id}>{task.name}</li> // Display task name
                ))}
            </ul>
            <button onClick={ () => {

            }
            }>
                Submit
            </button>
        </>
    );
}

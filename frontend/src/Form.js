import { useState } from 'react';

let nextID = 0;

export default function Form(){
    //hold user inputs
    const [Name, setName] = useState('');
    const [Tasks, setTasks] = useState([]);
    return (
        <>
            <input
            value ={Name}
            onChange={event => setName(event.target.value)}
            />
            <button onClick={() => {
                setTasks([
                    ...Tasks, { id: nextID++, Name: Name}
                ]);
            }}>Add Item</button>
            <ul>
                {Tasks.map(task => (
                    <li key={task.id}>{task.Name}</li>
                ))}
            </ul>
        </>
    );
  }
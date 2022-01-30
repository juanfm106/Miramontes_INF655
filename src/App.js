import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const toDoList = [
    {
      id: 1,
      title: "Laundry",
      description: "Put clothes in washer",
    },
    {
      id: 2,
      title: "Clean Bathroom",
      description: "Clean the shower and toilets",
    },
    {
      id: 3,
      title: "Wash car",
      description: "Clean the car",
    },
  ];
  const myName = "Juan";

  const taskManager = () => {
    const int = Math.floor(Math.random() * 3);
    return toDoList[int].title;
  };
 
  return (
    <div className="App">
      <h1>This is my first react app</h1>
      <p>
        Hello {myName} you have a task of <h3>{taskManager()}</h3>
      </p>
    </div>
  );
}

export default App;


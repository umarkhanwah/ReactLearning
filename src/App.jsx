import './style/App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Pages/Shop';
import Todo from './Pages/Todo';
import PasswordGenerator from './Pages/PasswordGenerator';
import WeatherApp from './Pages/WeatherApp';


function App() {
    
  let allroutes= createBrowserRouter(
    [
      {
        path : '/',
        element : <Shop /> 
      },
      {
        path : 'todo',
        element : <Todo /> 
      },
      {
        path : 'password',
        element : <PasswordGenerator /> 
      },
      {
        path : 'weather',
        element : <WeatherApp /> 
      },
    ]
  )  
  return (
    <div className="App">
      <Header/>
      
      <RouterProvider router={allroutes} />
    </div>
  );
}

export default App;

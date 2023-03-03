import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Mainpage from './Pages/Mainpage/Mainpage';
import routes from './Routing/Routes';
import store from './Features/store'
import { Provider } from 'react-redux';

function App() {

  const route = useRoutes(routes)


  return (

    <Provider store={store}>
      <div className="App  w-screen min-h-screen overflow-hidden">
        <Navbar />
        {route}
      </div>
    </Provider>
  );
}

export default App;

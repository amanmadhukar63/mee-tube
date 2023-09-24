import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import DataContainer from './components/DataContainer';

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<DataContainer />,
      },
      {
        path:"/watch",
        element:<WatchPage />,
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

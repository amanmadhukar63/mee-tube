import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import DataContainer from './components/DataContainer';
import SearchResult from './components/SearchResult';

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
      },
      {
        path:"/results",
        element:<SearchResult />
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

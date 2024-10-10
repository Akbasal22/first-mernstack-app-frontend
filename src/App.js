import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './layouts/MainLayout/Layout';
import MainPage from './pages/MainPage/MainPage';
import GameDetail, { loader as GameDetailLoader } from './pages/GameDetail/GameDetail';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<MainPage />} />
      <Route path=":id" element={<GameDetail />} loader={GameDetailLoader} />
    </Route>

  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

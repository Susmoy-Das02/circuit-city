import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Pages/Dashbord/AddReview';
import Dashboard from './Pages/Dashbord/Dashboard';
import MyOrder from './Pages/Dashbord/MyOrder';
import MyProfile from './Pages/Dashbord/MyProfile';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import ItemDetails from './Pages/Home/ItemDetails';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/item/:itemId' element={

          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>

        }></Route>

        <Route path='dashboard' element={

          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
           <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;

import './App.css';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Routes/RootLayout';
import HomePage from './pages/homepage/HomePage'
import Login from './pages/login/Login'
import PostComment from './pages/postcomment/PostComment'
import Map from './pages/map/Map'
import TourDetails from './pages/tourdetails/TourDetails'
import Blog from './pages/blog/Blog'
import Explore from './pages/explore/Explore.jsx';
import Booking from './pages/booking/Booking.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
       {/* default route */}
      <Route index element={<Navigate to="home" replace/>}/>



        {/* other routes */}
      <Route  path ='home' element={<HomePage/>}/>
      <Route  path ='blog' element={<Blog/>}/>
      <Route  path ='explore' element={<Explore/>} />
      <Route  path ='booking' element={<Booking/>}/>
      <Route  path ='login' element={<Login/>}/>
      <Route  path ='postcomment' element={<PostComment/>}/>
      <Route  path ='details' element={<TourDetails/>}/>
      <Route  path ='map' element={<Map/>}/>
    </Route>
  )
)
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;

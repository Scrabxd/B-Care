import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Login from './Login';

const AppRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  );
}

export default AppRouter;
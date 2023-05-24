import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './page/home';
import Login from './page/user/login';
import Register from './page/user/register';
import { useSelector } from 'react-redux';
import List from './page/products/list';

function App() {
  const user = useSelector(({ user }) => {
    return user.user
  })
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} /> 

        {user ?
          <>
          <Route path='/home' element={<Home />}>
            <Route path='/home/list' element={<List/>}></Route>
          </Route>
          </>
          :
          <>
            <Route path={'*'} element={<Navigate to={'/'}/>}></Route>
          </>
        }
      </Routes>
    </>
  )
}

export default App;

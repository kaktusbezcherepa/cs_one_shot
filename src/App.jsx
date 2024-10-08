import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage'
import Test from './Pages/Someting/Test';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/test' element={<Test />} />
    </Routes>
  )
}

export default App

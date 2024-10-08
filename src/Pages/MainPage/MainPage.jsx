import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';


function MainPage() {
  

  return (
    <>
    <Header />
      <Link to='/test'>
      <button>проверка</button>
      </Link>
    </>
  )
}

export default MainPage

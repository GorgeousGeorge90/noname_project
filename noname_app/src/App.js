import './App.css';
import Header from   './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';






const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Routes>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/news' element={<News/>}/>
            </Routes>
        </div>
    )
}




export default App;

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Movie from './Movie'
import Header from './Header'
import Error from './ControlErros'
import Bookmarks from './Bookmarks'
import Dashboard from './Dashboard'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/dashboard" element={ <Dashboard/> }/>
                <Route path="/" element={ <Home/>      }/>
                <Route path="/movie/:id" element={ <Movie/> }/>
                <Route path="/bookmarks" element={ <Bookmarks/> }/>
                
                
                
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;
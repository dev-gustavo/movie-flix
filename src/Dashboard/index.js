
import '../Dashboard/styleDashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './UncontrolledExample';
import movieApi from '../UrlAPI/movieApi'

function Dashboard(){
    return(
        
        <div className="dashbord">
            
            <UncontrolledExample/>

            <div className='boxA'> 
                <h1> TOP RATED </h1>
            </div>
            <div className='boxB'>  
                <h1> NOW PLAYING </h1>
            </div>
            <div className='boxC'>  
                <h1> UP COMING </h1>
            </div>
        </div>
        
           
    )
}
export default Dashboard;
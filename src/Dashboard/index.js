
import '../Dashboard/styleDashboard.css'

function Dashboard(){
    return(
        <div className="dashbord">
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
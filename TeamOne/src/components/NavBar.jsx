import { Link } from 'react-router-dom';
import Select from './Select';
import '../css/NavBar.css';

export default function NavBar() {

    return (
        <div style={{backgroundColor: '#1565C0',width:'100vw'}}>

            <div className="navbar" 
            style={{
                backgroundColor: '#1565C0',
                margin: 'auto',
                paddingRight: '0',
                width: '80%',
            }}>
                <img src="../../public/Frame 3.png " alt="photo" style={{width:'40px'}}/>
                <div className="links"
                style={{display: "flex",
                    flexDirection: "row",
                    width: "calc(100% - 100px)",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
            
                    <Select style={{width: "100px"}}/>
                    <Link to="/vacations" style={{color:"white"}}>Vacations</Link>
                    <Link to="/assignments" style={{color:"white"}}>Assignments</Link>
                    <Link to="/profile" style={{color:"white"}}><button>Profile</button></Link>
                </div>
            </div>
        </div>
    )
}
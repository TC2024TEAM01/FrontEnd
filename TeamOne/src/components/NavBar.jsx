import { Link } from 'react-router-dom';
import Select from './Select';
import '../css/NavBar.css';

export default function NavBar() {

    return (
        <div style={{backgroundColor: 'blue',width:'100vw'}}>

            <div className="navbar" 
            style={{
                backgroundColor: 'blue',
                margin: 'auto',
                paddingRight: '0',
                width: '60%',
            }}>
                <img src="../../public/Frame 3.png " alt="photo" style={{width:'40px'}}/>
                <div className="links"
                style={{display: "flex",
                    flexDirection: "row",
                    width: "50%",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                    <Link to="/home" style={{color:"white"}}>Home</Link>
                    <Select style={{}}/>
                    <Link to="/vacations" style={{color:"white"}}>Vacations</Link>
                    <Link to="/assignments" style={{color:"white"}}>Assignments</Link>
                    <Link to="/profile" style={{color:"white"}}><button>Profile</button></Link>
                </div>
            </div>
        </div>
    )
}
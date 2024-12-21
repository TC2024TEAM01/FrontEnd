import { useLocation } from 'react-router-dom';

export default function Profile() {
    const location = useLocation();
    const person = location.state?.message;
    return (
        <div>
            <h1>Profile <span>{person}</span></h1>
        </div>
    )
}
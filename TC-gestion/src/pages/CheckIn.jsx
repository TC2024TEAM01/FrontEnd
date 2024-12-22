/* eslint-disable react/no-unknown-property */
import NavBarpro from '../components/NavBarpro'; 
import '../css/CheckIn.css';
const CheckIn = () => {
  return (
    <div className="checkin-page">
      <NavBarpro/>
      <div className="container">
        <h2>CheckIn / CheckOut Lists</h2>
        <div className="filter">
          <div>
            <svg width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.686151" d="M39.0294 51.1942V1" stroke="#979797" stroke-width="0.293094" stroke-linecap="square"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41942 23.8904C14.0693 23.8904 17.8388 21.9145 17.8388 19.477C17.8388 17.0395 14.0693 15.0635 9.41942 15.0635C4.7695 15.0635 1 17.0395 1 19.477C1 21.9145 4.7695 23.8904 9.41942 23.8904Z" stroke="black" stroke-width="1.46547" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 19.4771C1.00218 23.9057 3.68225 27.7529 7.47648 28.7738V34.9242C7.47648 36.143 8.34636 37.131 9.41942 37.131C10.4925 37.131 11.3624 36.143 11.3624 34.9242V28.7738C15.1566 27.7529 17.8367 23.9057 17.8388 19.4771" stroke="black" stroke-width="1.46547" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>Filter By</p>
          <input type="text" placeholder='Employee'/>
          <input type="text" placeholder='Status'/>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(6)].map((_, colIndex) => (
                  <td key={colIndex}>Data</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckIn

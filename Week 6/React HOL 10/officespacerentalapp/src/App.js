import './App.css';
import office from './office.jpg';

function App() {

  const officeSpaces = [

    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    },

    {
      Name: "WeWork",
      Rent: 70000,
      Address: "Bangalore",
      Image: office
    },

    {
      Name: "Regus",
      Rent: 55000,
      Address: "Hyderabad",
      Image: office
    }

  ];

  return (

    <div style={{ marginLeft: "40px" }}>

      <h1>Office Space, at Affordable Range</h1>

      {

        officeSpaces.map((office, index) => (

          <div key={index} style={{ marginBottom: "30px" }}>

            <img
              src={office.Image}
              alt="Office Space"
              width="300"
              height="200"
            />

            <h2>Name: {office.Name}</h2>

            <h3
              style={{
                color: office.Rent < 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {office.Rent}
            </h3>

            <h3>Address: {office.Address}</h3>

          </div>

        ))

      }

    </div>

  );

}

export default App;
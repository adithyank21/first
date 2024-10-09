
import React from 'react';
import backgroundImage from './images/headimg.jpg'; // Adjust the path as needed

function Homepage() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
        }}>
            <h1 style={{ textAlign: "center" }}>Shop Here</h1>
            {/* <h3 style={{ textAlign: "center" }}>Jolult Sport </h3> */}
            <p style={{ textAlign: "center" }}>Introducing latest Collection and designs.</p>
            <br/>
            <br/>
            <button style={{borderRadius:'25px', backgroundColor:'black' , color:'wheat' , width:"100px"}}>Shop Now</button>
        </div>
    );
}

export default Homepage;

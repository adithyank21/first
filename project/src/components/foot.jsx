import React from 'react';
import backgroundImage from './images/foot.jpg'; // Adjust the path as needed

function Footer() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'skyblue',
                textAlign: 'center',
                padding: '20px',
            }}>
                <h3>Sign Up to Our Newsletter</h3>
                <p>Get the latest beauty secrets and trends. Sign up for our newsletter and stay informed about all things beauty.</p>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Enter Email Id' 
                    style={{
                        width: '300px',
                        borderRadius: '25px',
                        textAlign: 'center',
                        marginBottom: '10px',
                    }} 
                />
                <button 
                    style={{
                        backgroundColor: 'lightpink',
                        borderRadius: '20px',
                        width: '150px',
                        color: 'black',
                    }}
                >
                    Submit
                </button>
            </div>

            <div style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <table style={{ 
                    borderCollapse: 'collapse', 
                    width: '100%', 
                    height: '100%',
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'space-around', 
                    textAlign: 'center' 
                }}>
                    <tbody>
                        <tr style={{ width: '100%' }}>
                            <td style={{ flex: 1, padding: '10px', minWidth: '150px' }}>
                                <h3 style={{ margin: 0 }}>Jolt</h3>
                                <h6 style={{ margin: 0 }}>
                                    Experience the great Outdoors style with Joults.
                                    <br />
                                    Shop now and gear up for adventure in Jolts.
                                </h6>
                            </td>
                            <td style={{ flex: 1, padding: '10px', minWidth: '150px' }}>
                                <h3 style={{ margin: 0 }}>Categories</h3>
                                <h6 style={{ margin: 0 }}>Jackets</h6>
                                <h6 style={{ margin: 0 }}>Shirts</h6>
                                <h6 style={{ margin: 0 }}>Shoes</h6>
                                <h6 style={{ margin: 0 }}>Bags</h6>
                            </td>
                            <td style={{ flex: 1, padding: '10px', minWidth: '150px' }}>
                                <h3 style={{ margin: 0 }}>Customer Care</h3>
                                <h6 style={{ margin: 0 }}>FAQ</h6>
                                <h6 style={{ margin: 0 }}>Shipping</h6>
                                <h6 style={{ margin: 0 }}>Order Status</h6>
                                <h6 style={{ margin: 0 }}>Return & Exchange</h6>
                            </td>
                            <td style={{ flex: 1, padding: '10px', minWidth: '150px' }}>
                                <h3 style={{ margin: 0 }}>Company</h3>
                                <h6 style={{ margin: 0 }}>Privacy</h6>
                                <h6 style={{ margin: 0 }}>Guides</h6>
                                <h6 style={{ margin: 0 }}>Terms And Conditions</h6>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

           
        </>
    );
}

export default Footer;
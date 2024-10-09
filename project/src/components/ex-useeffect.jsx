import { useEffect, useState } from 'react';

function ExuseEffect() {
    const [record, setRecord] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setRecord(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Inline styles
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '20px auto',
            padding: '20px',
            backgroundColor: 'black',
            color: 'white', // Set text color to white
        },
       
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        card: {
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            width: 'calc(33.333% - 20px)',
            textAlign: 'center',
            transition: 'transform 0.2s',
            overflow: 'hidden', // Ensure text does not overflow
        },
        cardImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
        },
        cardTitle: {
            fontSize: '18px',
            margin: '10px 0',
            whiteSpace: 'nowrap', // Prevents the title from wrapping
            overflow: 'hidden', // Hides overflow text
            textOverflow: 'ellipsis', // Adds ellipsis for overflow text
        },
        cardPrice: {
            color: '#e91e63',
            fontSize: '16px',
            margin: '5px 0',
        },
        cardButton: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            margin: '5px', // Added margin for buttons
        },
        searchInput: {
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            width: '100%',
        },
    };

    // Responsive styles for different screen sizes
    const updateCardWidth = () => {
        const width = window.innerWidth;
        if (width < 480) {
            return '100%';
        } else if (width < 768) {
            return 'calc(50% - 20px)';
        } else {
            return 'calc(33.333% - 20px)';
        }
    };

    // Filter products based on title search
    const filteredProducts = record.filter(item => 
        item.title.toLowerCase().includes(title.toLowerCase())
    );

    return (
        <>
            <h3 style={{ textAlign: "center" }}>New Arrivals</h3>
            <p style={{ textAlign: "center" }}>Our new arrivals are built to withstand your activities while keeping you looking your best!</p>
            <div style={styles.container}>
                <input 
                    type="text" 
                    name="sch" 
                    onChange={(e) => setTitle(e.target.value)} 
                    className='form-control' 
                    placeholder='Search here!' 
                    style={styles.searchInput}
                />
                <h1 style={{textAlign:'center'}}>Products</h1>
                <div style={{ ...styles.cardContainer }}>
                    {filteredProducts.length > 0 ? 
                        filteredProducts.map((item) => (
                            <div key={item.id} style={{ ...styles.card, width: updateCardWidth() }}>
                                <img src={item.image} alt={item.title} style={styles.cardImage} />
                                <h2 style={styles.cardTitle} title={item.title}>{item.title}</h2>
                                <p style={styles.cardPrice}>${item.price}
                                <h2 style={styles.cardTitle} title={item.title}>{item.title}</h2>

                                </p>
                                <button style={styles.cardButton}>Add to Cart</button>
                                <button style={styles.cardButton}>Buy Now</button>
                            </div>
                        ))
                    : <p style={{ textAlign: "center", color: 'white' }}>No products found</p>}
                </div>
            </div>
        </>
    );
}

export default ExuseEffect;
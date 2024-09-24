import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k  from  './images/kochi.jpg'
import alap from './images/alappuzha.jpg';
import  mn from './images/munnar.jpg';
import knr from './images/kannur.jpg'
import vgmn from './images/vagamon.jpg'
import tvm from './images/trivandrum.jpg'
import{useState} from 'react'
import { Container, Row,Col } from 'react-bootstrap';
function Cardskerala(){
    const [title,setTitle]=useState("")
    const record=[{ idno:1 ,title:'kochi', description:"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship. Cantilevered Chinese fishing nets, typical of Kochi, have been in use for centuries." ,
        imageUrl:k
    },
    { idno: 2, title:'alappuzha', description:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event. ." ,
        imageUrl:alap
    },
    {idno:3, title:'munnar', description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak" ,
        imageUrl:mn
    },
    {idno:4 ,title:'kannur', description:"Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade. Housed in a former palace, the Arakkal Museum highlights Kerala's one Muslim royal family. The palm-fringed sands of Payyambalam Beach run along Kannur’s western shore" ,
        imageUrl:knr
    },
    {idno:5 ,title:'Vagamon', description:"Vagamon is an Indian hill station and a revenue village located in Peerumedu Taluk of Idukki district, and also Meenachil taluk and Kanjirappally taluk of Kottayam district in the state of Kerala, India" ,
        imageUrl:vgmn
    },
    {idno:6 ,title:'Trivandrum', description:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries" ,
        imageUrl:vgmn
    },
]
    return(
        <>
       <Container className='margint'>
        <Row ClassName='mb-3'>
            <Col>
            <input type='text' name="sh" onChange={(e) =>
                {
                    setTitle(e.target.value)
                }
            } className='form-control' placeholder='type place name here'/>
            </Col>
            <br/>
            <br />
            <br/>
            <Row ClassName='mb-3'>
            <Col>
            <Button variant='success' onClick={(e)=>{
                setTitle("")
            }}>
                All
            </Button>
            </Col>
            
           {
            record.length>0&&
            record.map((item) =>{
                return(
                    <Col key={item.idno}>
                    <Button variant='info' onClick={(e)=>{
                          setTitle(item.title)
                    }}>
                        {item.title}
                    </Button>
                  
                    </Col>
                    
                )
            })
           }
           <br/>
           <br/>
           <br/>
        </Row>
        </Row>
        
        <Row>
            {
                record.length>0 ? 
                record.filter((rec) =>{
                    return (rec.title.toLocaleLowerCase().match(title.toLocaleLowerCase()))
                })
                .map((list)=>{
                    return(
                        <Col lg={4} className='mb-2' key={list.idno} >
            <Card>
                <Card.Img variant="top" src={list.imageUrl}  style={{height:'250px'}}/>
                <Card.Body>
                <Card.Title>{list.title}</Card.Title>
                        <Card.Text>
                            {list.description}
                        
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Col>
      
                    )
                })    :" No Data found"
            }
            </Row>
       </Container>
      </>)
}
export default Cardskerala;
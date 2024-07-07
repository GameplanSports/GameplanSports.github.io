import NavbarLoggedIn from '../components/Navbar_logged_in';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default function Dashboard() {
    return (
        <div className='px-5' style={{ minHeight: "100vh" }}>
            <NavbarLoggedIn />
            <h1 className='sectionTitle'>Upcoming games and events:</h1>
            <Container style={{margin:'0px', padding:'0px'}}>
                <Row className='eventBoxRows'>
                    <Col>
                        <div className='eventBoxStyle'>
                            <p className='eventTextStyle'>You (Ottawa Senators) @ Edmonton Oilers</p>
                            <hr className='eventLineStyle'/>
                            <p className='eventTextStyle'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</p>
                            <p className='eventTextStyle'>Today, April 29th, 7:00 pm</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='eventBoxStyle'>
                            <p className='eventTextStyle'>You (Ottawa Senators) @ Edmonton Oilers</p>
                            <hr className='eventLineStyle'/>
                            <p className='eventTextStyle'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</p>
                            <p className='eventTextStyle'>Today, April 29th, 7:00 pm</p>
                        </div>
                    </Col>
                </Row>
                <Row className='eventBoxRows'>
                    <Col>
                        <div className='eventBoxStyle'>
                            <p className='eventTextStyle'>You (Ottawa Senators) @ Edmonton Oilers</p>
                            <hr className='eventLineStyle'/>
                            <p className='eventTextStyle'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</p>
                            <p className='eventTextStyle'>Today, April 29th, 7:00 pm</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='eventBoxStyle'>
                            <p className='eventTextStyle'>You (Ottawa Senators) @ Edmonton Oilers</p>
                            <hr className='eventLineStyle'/>
                            <p className='eventTextStyle'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</p>
                            <p className='eventTextStyle'>Today, April 29th, 7:00 pm</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <h1 className='sectionTitle'>Your team stats:</h1>
            <Table bordered classname='statsTable' style={{border:'black', backgroundColor:'#FAF9F9'}}>
            <thead>
                <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Games played</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Shane Pinto</td>
                <td>Center</td>
                <td>41</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                </tr>
                <tr>
                <td>Brady Tkachuk</td>
                <td>Left Wing</td>
                <td>81</td>
                <td>37</td>
                <td>37</td>
                <td>74</td>
                </tr>
                <tr>
                <td>Thomas Chabot</td>
                <td>Defence</td>
                <td>51</td>
                <td>9</td>
                <td>21</td>
                <td>30</td>
                </tr>
                <tr>
                <td>Shane Pinto</td>
                <td>Center</td>
                <td>41</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                </tr>
                <tr>
                <td>Brady Tkachuk</td>
                <td>Left Wing</td>
                <td>81</td>
                <td>37</td>
                <td>37</td>
                <td>74</td>
                </tr>
                <tr>
                <td>Thomas Chabot</td>
                <td>Defence</td>
                <td>51</td>
                <td>9</td>
                <td>21</td>
                <td>30</td>
                </tr>
                <tr>
                <td>Shane Pinto</td>
                <td>Center</td>
                <td>41</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                </tr>
                <tr>
                <td>Brady Tkachuk</td>
                <td>Left Wing</td>
                <td>81</td>
                <td>37</td>
                <td>37</td>
                <td>74</td>
                </tr>
                <tr>
                <td>Thomas Chabot</td>
                <td>Defence</td>
                <td>51</td>
                <td>9</td>
                <td>21</td>
                <td>30</td>
                </tr>
                <tr>
                <td>Shane Pinto</td>
                <td>Center</td>
                <td>41</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                </tr>
                <tr>
                <td>Brady Tkachuk</td>
                <td>Left Wing</td>
                <td>81</td>
                <td>37</td>
                <td>37</td>
                <td>74</td>
                </tr>
                <tr>
                <td>Thomas Chabot</td>
                <td>Defence</td>
                <td>51</td>
                <td>9</td>
                <td>21</td>
                <td>30</td>
                </tr>
                <tr>
                <td>Shane Pinto</td>
                <td>Center</td>
                <td>41</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                </tr>
                <tr>
                <td>Brady Tkachuk</td>
                <td>Left Wing</td>
                <td>81</td>
                <td>37</td>
                <td>37</td>
                <td>74</td>
                </tr>
                <tr>
                <td>Thomas Chabot</td>
                <td>Defence</td>
                <td>51</td>
                <td>9</td>
                <td>21</td>
                <td>30</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}
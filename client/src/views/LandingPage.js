import {Carousel, Navbar, Nav, Button, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../assets/online-education.png'
import Learn from '../assets/open-book.png'
import Exercise from '../assets/exam.png'
import Ranking from '../assets/rank.png'
import LP1 from '../assets/landing-page1.jpg'
import LP2 from '../assets/landing-page2.jpg'
import LP3 from '../assets/landing-page3.jpg'
import Idea from '../assets/idea.png'
import Motivation from '../assets/motivation.png'
import Presentation from '../assets/presentation.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Telegram from '../assets/telegram.png'

const LandingPage = () => {
    document.title = "Easy English"

    const styleFooter = {
        backgroundColor: "#2adaeb",
        borderTop : '1px solid',
        textAlign: "center",
        padding: "20px",
        position: "relative",
        bottom : '0',
        height: "150px",
        width: "100%",
    }
    
    const imgSize = {
        height : '72px',
        width : '72px'
    }

    const logoSize = {
        height : '28px',
        width : '28px',
        marginRight : '15px'
    }

    return (
        <div style={{display : 'flex', flexDirection : 'column', minHeight : '100vh'}}>
            <title>Easy English</title>
            <div style={{flex : 1}}>
            <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                    <img src={Logo} alt="logo" width='32' height='32' className='mr-2'/>
                    EzEnglish
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link className='font-weight-bolder text-white' to='/learn' as={Link} style={{paddingLeft : '30px'}}>
                        <img src={Learn} alt="logo" width='32' height='32' className='mr-2'/>
                        Học
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/exercise' as={Link} style={{paddingLeft : '30px'}}>
                        <img src={Exercise} alt="logo" width='32' height='32' className='mr-2'/>
                        Luyện đề
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/ranking' as={Link} style={{paddingLeft : '30px'}}>
                        <img src={Ranking} alt="logo" width='32' height='32' className='mr-2'/>
                        Xếp hạng
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Button style={{marginLeft : '00px'}} variant='danger' href='/login' size='lg'>Bắt đầu ngay</Button>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Carousel style={{borderBottom : '1px solid'}}>
                <Carousel.Item interval={3000}>
                    <img
                    width={900}
                    height={500}
                    className="d-block w-100"
                    src={LP1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    width={900}
                    height={500}
                    className="d-block w-100"
                    src={LP2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    width={900}
                    height={500}
                    className="d-block w-100"
                    src={LP3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <div >
                <div style={{textAlign : 'center', fontSize : '32px', fontStyle : 'bold'}}>Tại sao bạn nên sử dụng EasyEnglish?</div>
                <br/>
                <Container style={{marginRight : 'auto', marginLeft : 'auto'}}>
                    <Row>
                        <Col lg={{span : 3, offset: 1}} style={{textAlign : 'center'}}>
                            <img src={Presentation} style={imgSize}/>
                            <br/>
                            <p>Kiến thức có chọn lọc, phân chia theo từng chủ đề. Kết hợp xen kẽ giữa lý thuyết và bài tập</p>
                        </Col>
                        <Col lg={{span : 3, offset: 1}} style={{textAlign : 'center'}}>
                            <img src={Idea} style={imgSize}/>
                            <br/>
                            <p>Giao diện đẹp mắt, màu sắc nhẹ nhàng, chức năng dễ sử dụng</p>
                        </Col>
                        <Col lg={{span : 3, offset: 1}} style={{textAlign : 'center'}}>
                            <img src={Motivation} style={imgSize}/>
                            <br/>
                            <p>Các tính năng kết hợp học mà chơi, chơi mà học, tạo hứng thú cho người dùng</p>
                        </Col>
                    </Row>
                </Container> 
            </div>
            </div>
            <div style={styleFooter}>
                <Container style={{width : '100%', height : '100%'}}>
                    <Row>
                        <Col  lg={{span : 5}} style={{textAlign: 'left'}}>
                            <b>Liên hệ</b>
                            <br/>
                            <span>Số điện thoại: 0386499267</span>
                            <br/>
                            <span>Email: trung23031999@gmail.com</span>
                            <br/>
                            <span>Facebook: fb.com/trung.nd.23.03</span>
                        </Col>
                        <Col lg={{span : 3, offset : 3}} style={{textAlign: 'left'}}>
                            <b>Theo dõi chúng tôi tại</b>
                            <br/>
                            <img src={Facebook} style={logoSize}/>
                            <img src={Instagram} style={logoSize}/>
                            <img src={Twitter} style={logoSize}/>
                            <img src={Telegram} style={logoSize}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default LandingPage

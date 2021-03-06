import QuotesContainer from '../components/layout/QuotesContainer'
import NavbarMenu from "../components/layout/NavbarMenu"
import {Accordion, Card, Button, Spinner, Container, Row, Col} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { apiUrl } from '../contexts/constants'
import {AuthContext} from '../contexts/AuthContext'


const Exercise = (props) => {
    const [exTopics, setExTopics] = useState([])
    const [isBusy, setBusy] = useState(true)
    const [defaultKey, setDefaultKey] = useState(0)
    const [learnProcess, setLearnProcess] = useState()

    const {
        authState: {
            user: {username}
        }
    } = useContext(AuthContext)

    useEffect(() => {
        const getExercisePage = async () => {
            try {
                const res = await axios.post(`${apiUrl}/api/auth/getExercisePage`)
                setExTopics(res.data)
                if (props.location.state === undefined){

                } else {
                    setDefaultKey(props.location.state.exTopicId)
                }
                const score = await axios.post(`${apiUrl}/api/auth/getExerciseProcess`, {username : username})
                setLearnProcess(score.data)
                setBusy(false)
                const titleElement = document.getElementById(props.location.state.exTopicId + '/' + props.location.state.exLessonId)
                titleElement.scrollIntoView({
                    behavior : 'smooth',
                    block : 'start'
                })
            } catch (error) {
                console.log(error.message)
            }
        }

        getExercisePage();
    }, [])

    if (isBusy) 
    return (
        <div className='spinner-container'>
            <Spinner animation='border' variant='info'/>
        </div>
    ); else 
    return (
        <div>
            <NavbarMenu/>
            <br/>
            <Container >
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <QuotesContainer/>
                    </Col>
                </Row>
            </Container>
            <br/>
            {
                exTopics.map(exTopic => (
                    <Accordion defaultActiveKey={defaultKey}>
                        <Card>
                            {/* <Card.Header style={{backgroundColor : '#7ae0f5', alignItems : 'left'}}> */}
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={exTopic.exTopicId} style={{backgroundColor : '#7ae0f5', alignItems : 'left'}}>
                                    <div>
                                        <Button variant='info' style={{width : '200px'}}>{exTopic.exTopicNameEn}</Button>
                                        {/* <span style={{marginLeft : 'auto', marginRight : 'auto', border : '1px solid black', fontSize : '10px', fontFamily : ''}}>{exTopic.exTopicNameVn}</span> */}
                                    </div>
                                </Accordion.Toggle>
                            {/* </Card.Header> */}
                            <Accordion.Collapse eventKey={exTopic.exTopicId}>
                                <Card.Body>
                                        <table className="table table-hover" style={{border : '1px solid black'}}>
                                            <tbody>
                                            {exTopic.exListLesson.map(exLesson =>(
                                                <tr className="table table-primary" style={{border : '1px solid black'}} id={exLesson.exTopicId + '/' + exLesson.exLessonId}>
                                                    <td>{exLesson.exLessonNameVn}</td>
                                                    <td>{(learnProcess[exTopic.exTopicId-1][exLesson.exLessonId-1] ? learnProcess[exTopic.exTopicId-1][exLesson.exLessonId-1] : 0) + "/" + exLesson.maxScore}</td>
                                                    <td>
                                                        {/* kh??ng direct ?????n /study ???????c v?? thi???u style c???a lesson, ph???i direct ?????n trang /learn v?? lesson*/}
                                                        <Link to={{pathname: '/exstudy', state : {exTopicId : exLesson.exTopicId, exLessonId : exLesson.exLessonId, type : exLesson.type, currentScore : learnProcess[exTopic.exTopicId-1][exLesson.exLessonId-1], minScore : exLesson.minScore, username : username}}}>
                                                        <Button variant='secondary'>B???t ?????u</Button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}   
                                            </tbody>
                                        </table>                                             
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))
            }
        </div>
    )



}

export default Exercise
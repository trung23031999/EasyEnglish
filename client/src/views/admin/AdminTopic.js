import NavbarAdmin from "../../components/layout/NavbarAdmin"
import {Spinner, Container, Row, Col, Button, Table} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import { apiUrl } from "../../contexts/constants"


const AdminTopic = () => {
    const [listTopic, setListTopic] = useState([])
    const [listExTopic, setListExTopic] = useState([])

    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.post(`${apiUrl}/api/auth/getLearnPage`)
                const resEx = await axios.post(`${apiUrl}/api/auth/getExercisePage`)
                setListTopic(res.data)
                console.log(res.data)
                setListExTopic(resEx.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        getList();
        
    }, [])

    return (
        <div>
            <NavbarAdmin/>
            <div>
                <h3 style={{textAlign :'center'}}>Danh sách chủ đề ngữ pháp</h3>
                <Table striped bordered hover size="sm" style={{width : '900px', marginLeft : 'auto', marginRight : 'auto'}}>
                    <thead>
                        <tr>
                        <th>Sửa</th>
                        <th>ID</th>
                        <th>Tên tiếng Anh</th>
                        <th>Tên tiếng Việt</th>
                        <th>Số bài học</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTopic.map(topic => (
                            <tr >
                                <td style={{width : '100px'}}><Button variant='primary'>Sửa</Button></td>
                                <td style={{width : '80px'}}>{topic.topicId}</td>
                                <td style={{width : '300px'}}>{topic.topicNameEn}</td>
                                <td style={{width : '300px'}}>{topic.topicNameVn}</td>
                                <td style={{width : '120px'}}>{topic.listLesson.length}<Link to={{pathname : '/admin/lesson', state : {topicId : topic.topicId}}}><Button style={{marginLeft : '20px'}} variant='primary'>Xem</Button></Link></td>
                            </tr>
                        ))}                     
                    </tbody>
                </Table>
                <br/>
                <br/>
                <br/>
                <h3 style={{textAlign :'center'}}>Danh sách chủ đề bài tập</h3>
                <Table striped bordered hover size="sm" style={{width : '900px', marginLeft : 'auto', marginRight : 'auto'}}>
                    <thead>
                        <tr>
                        <th>Sửa</th>
                        <th>ID</th>
                        <th>Tên tiếng Anh</th>
                        <th>Tên tiếng Việt</th>
                        <th>Số bài học</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listExTopic.map(exTopic => (
                            <tr >
                                <td style={{width : '100px'}}><Button variant='primary'>Sửa</Button></td>
                                <td style={{width : '80px'}}>{exTopic.exTopicId}</td>
                                <td style={{width : '300px'}}>{exTopic.exTopicNameEn}</td>
                                <td style={{width : '300px'}}>{exTopic.exTopicNameVn}</td>
                                <td style={{width : '120px'}}>{exTopic.exListLesson.length}<Button style={{marginLeft : '20px'}} variant='primary'>Xem</Button></td>
                            </tr>
                        ))}                     
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AdminTopic
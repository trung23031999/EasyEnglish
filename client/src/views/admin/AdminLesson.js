import NavbarAdmin from "../../components/layout/NavbarAdmin"
import {Spinner, Container, Row, Col, Button, Table} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import { apiUrl } from "../../contexts/constants"

const AdminLesson = () => {
    const [listLesson, setListLesson] = useState([])
    const [listExLesson, setListExLesson] = useState([])

    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.post(`${apiUrl}/api/auth/getLearnPage`)
                const resEx = await axios.post(`${apiUrl}/api/auth/getExercisePage`)
                console.log(res)
                setListLesson(res.data[0].listLesson)
                console.log(res.data[0].listLesson)
                setListExLesson(resEx.data[0].exListLesson)
            } catch (error) {
                console.log(error.message)
            }
        }

        getList();
        console.log(listLesson)
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
                        {listLesson.map(lesson => (
                            <tr >
                                <td style={{width : '100px'}}><Button variant='primary'>Sửa</Button></td>
                                <td style={{width : '80px'}}>{lesson.lessonId}</td>
                                <td style={{width : '300px'}}>{lesson.lessonNameEn}</td>
                                <td style={{width : '300px'}}>{lesson.lessonNameVn}</td>
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
                        {listExLesson.map(exLesson => (
                            <tr >
                                <td style={{width : '100px'}}><Button variant='primary'>Sửa</Button></td>
                                <td style={{width : '80px'}}>{exLesson.exLessonId}</td>
                                <td style={{width : '300px'}}>{exLesson.exLessonNameEn}</td>
                                <td style={{width : '300px'}}>{exLesson.exLessonNameVn}</td>
                            </tr>
                        ))}                     
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AdminLesson
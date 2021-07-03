import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import React from 'react';

const NavbarAdmin = () => {
    return (
        <div>
          <Navbar expand='lg' bg='info' variant='dark' className='shadow'>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link className='font-weight-bolder text-white' to='/admin/topic' as={Link} style={{paddingLeft : '30px'}}>
                  Quản lý Topic
                </Nav.Link>
                <Nav.Link className='font-weight-bolder text-white' to='/admin/lesson' as={Link} style={{paddingLeft : '30px'}}>
                  Quản lý Lesson
                </Nav.Link>
                <Nav.Link className='font-weight-bolder text-white' to='/admin/slide' as={Link} style={{paddingLeft : '30px'}}>
                  Quản lý Slide
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
}

export default NavbarAdmin
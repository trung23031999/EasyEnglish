import React from 'react';
import { useForm } from 'react-hook-form';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavbarAdmin from "../../components/layout/NavbarAdmin"

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <NavbarAdmin/>
    </div>

  );
}

export default Admin
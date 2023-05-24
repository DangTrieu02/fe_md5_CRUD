import React, { useState } from 'react';
import './login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Field, Formik,Form } from 'formik';
import { login } from './../../services/userService';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import {storage} from "../../config/firebase";
import {v4} from "uuid";

function Login() {

  const [imageUpload, setImageUpload] = useState(null);

  const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
              console.log(url)
          });
      });
  };

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const submit=(value)=>{
    dispatch(login(value)).then((data)=>{
      navigate('/home')
      if(data.payload === "User is not exist"){
        localStorage.clear();
        navigate('/login');
    } else {
        navigate('/home');
    }
    })
  }

  return (
    <>
       {/* <input
                type="file"
                onChange={(event) => {setImageUpload(event.target.files[0]);}}
            />
            <button onClick={uploadFile}> Upload Image</button> */}


      <div class="wrapper fadeInDown">
        <div id="formContent">

        <h1>Login</h1>

          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={values => {
              submit(values);
            }}
          >
            <Form>
            
              <Field type="text" id="login" class="fadeIn second" name={"username"} placeholder="username" />
              <Field type="text" id="password" class="fadeIn third" name={"password"} placeholder="password" />
              
              <input type="submit" />
            </Form>
          </Formik>
          <div id="formFooter">

          </div>

        </div>
      </div>
    </>

  );
}

export default Login;
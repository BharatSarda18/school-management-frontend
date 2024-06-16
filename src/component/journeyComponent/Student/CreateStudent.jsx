import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormComponent from '../../common/Form';
import { formFields } from './StudentConstant';
import FileUploadForm from '../../common/FileUploadForm';
import { createStudentApi } from '../../../service/student/studentService';

function CreateStudent() {

  const [fileList, setFileList] = useState([]);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required'),
    fathername: Yup.string().required('Fathername is required'),
    mothername: Yup.string().required('Mothername is required'),
    contactnumber: Yup.number().required('Contactnumber is required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      age: null,
      fathername: '',
      mothername: '',
      contactnumber: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const response=await createStudentApi(values);

    }
  });

  const fileFormateDownloader=()=>{

  }

  const handleChange = info => {
    let newFileList = [...info.fileList];
    // Only keep the most recent upload
    setFileList(newFileList);
  };

  return (
    <>
      <h1 className=' text-2xl font-bold mb-4'>Create Student</h1>
      <div className='flex flex-col space-y-5'>
        <FormComponent formFields={formFields} formik={formik} />
        <div className='border'></div>
        <FileUploadForm handleFileChange={handleChange} fileList={fileList} fileFormateDownloader={fileFormateDownloader} />
      </div>
    </>
  )
}

export default CreateStudent

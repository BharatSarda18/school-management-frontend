import React, { useEffect, useState } from 'react'
import TableLayout from '../../common/TableLayout'
import { getStudentListApi } from '../../../service/student/studentService';
import { studentColumns } from './StudentConstant';

function GetStudent() {

  const [studentData,setStudentData]=useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  
  const onSelectChange = newSelectedRowKeys =>setSelectedRowKeys(newSelectedRowKeys)

  useEffect(()=>{

    const getListOFstudent=async()=>{
      const response= await getStudentListApi();
      setStudentData(response);
    }
    getListOFstudent();
   
  },[])
  return (
    <div>
       <h1 className=' text-2xl font-bold mb-4'>Get Student List</h1>
      <TableLayout onSelectChange={onSelectChange} selectedRowKeys={selectedRowKeys} columns={studentColumns} rows={studentData} />
    </div>
  )
}

export default GetStudent

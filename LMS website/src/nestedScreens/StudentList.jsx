import React, { useEffect, useState } from 'react'
import DataGridData from '../components/GridData'
import { Link, useNavigate } from 'react-router-dom'
import { collection, doc, getDocs } from 'firebase/firestore';
import { database } from '../components/firebase';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'students'));
        const studentList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Fetched students:', studentList); // Add this line
        setStudents(studentList);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
  
    fetchStudents();
  }, []);
 
 
  return (
   
    <div className=''>
    <div className='xs:ml-[10px] sm:ml-[10px] md900:ml-[300px] lg:ml-[300px] xl:ml-[300px] m-5 pt-6 text-right font-bold text-3xl text-green pb-6 mt-20 bg-gray-100  '>
        
        <h1 className='flex justify-center  '>Student List </h1>

        <Link className='text-xl bg-green font-normal text-white px-4 py-1 rounded-md shadow-md  hover:bg-lgreen hover:shadow-green mr-9' to={"/student/student-add"} >Add</Link>
        <div className='  m-5  '>
      <DataGridData rows={students}/>
    </div>
    </div>
     
   </div>
   
  )
}

export default StudentList

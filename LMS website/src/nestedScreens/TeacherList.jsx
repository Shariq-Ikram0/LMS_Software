import React, { useEffect, useState } from 'react';
import DataGridData from '../components/GridData'; // Assuming this is your data grid component
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../components/firebase';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'teacher'));
        const teacherList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Fetched teachers:', teacherList); // Add this line
        setTeachers(teacherList);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className=''>
      <div className='xs:ml-[10px] sm:ml-[10px] md900:ml-[300px] lg:ml-[300px] xl:ml-[300px] m-5 pt-6 text-right font-bold text-3xl text-green pb-6 mt-20 bg-gray-100'>
        <h1 className='flex justify-center'>Teacher List</h1>
        <Link
          className='text-xl bg-green font-normal text-white px-4 py-1 rounded-md shadow-md hover:bg-lgreen hover:shadow-green mr-9'
          to="/teacher/teacher-add"
        >
          Add
        </Link>
        <div className='m-5'>
          <DataGridData rows={teachers} />
        </div>
      </div>
    </div>
  );
};

export default TeacherList;

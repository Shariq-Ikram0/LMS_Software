import React, { useEffect, useState } from 'react';
import SubjectGridData from '../components/SubjectGridData'; // Import the new component
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../components/firebase';

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'subject'));
        const subjectList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Fetched subjects:', subjectList);
        setSubjects(subjectList);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className=''>
      <div className='xs:ml-[10px] sm:ml-[10px] md900:ml-[300px] lg:ml-[300px] xl:ml-[300px] m-5 pt-6 text-right font-bold text-3xl text-green pb-6 mt-20 bg-gray-100'>
        <h1 className='flex justify-center'>Subject List</h1>
        <Link className='text-xl bg-green font-normal text-white px-4 py-1 rounded-md shadow-md hover:bg-lgreen hover:shadow-green mr-9' to={"/subject/subject-add"}>Add</Link>
        <div className='m-5'>
          <SubjectGridData rows={subjects} />
        </div>
      </div>
    </div>
  );
};

export default SubjectsList;

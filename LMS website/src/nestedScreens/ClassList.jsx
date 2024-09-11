import React, { useEffect, useState } from 'react';
import AdmissionGridData from '../components/AdmissionGridData'; // Adjust the import path as needed
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../components/firebase';

const ClassList = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'admissions'));
        const admissionList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Fetched admissions:', admissionList);
        setAdmissions(admissionList);
      } catch (error) {
        console.error('Error fetching admissions:', error);
      }
    };

    fetchAdmissions();
  }, []);

  return (
    <div>
      <div className='xs:ml-[10px] sm:ml-[10px] md900:ml-[300px] lg:ml-[300px] xl:ml-[300px] m-5 pt-6 text-right font-bold text-3xl text-green pb-6 mt-20 bg-gray-100'>
        <h1 className='flex justify-center'>Class List</h1>
        <Link className='text-xl bg-green font-normal text-white px-4 py-1 rounded-md shadow-md hover:bg-lgreen hover:shadow-green mr-9' to={"/admission/admission-add"}>Add</Link>
        <div className='m-5'>
          <AdmissionGridData rows={admissions} />
        </div>
      </div>
    </div>
  );
}

export default ClassList;



import SideBarItem from './SideBarItem';
import Navbar from './Navbar';



const SideBar = () => {
  
  return (
        <>
      
   
      <div>
      
      


      <SideBarItem PropForList="/student/student-list" PropForAdd="/student/student-add" DrowName="Students" list="Student List" add="Student Registration"></SideBarItem>

      <SideBarItem PropForList="/teacher/teacher-list" PropForAdd="/teacher/teacher-add" DrowName=" Teacher " list="Teacher List" add="Teacher Registration"></SideBarItem>

      <SideBarItem PropForList="/subject/subject-list" PropForAdd="/subject/subject-add" DrowName="Subjects" list="Subjects List" add="Subjects Add"></SideBarItem>

      <SideBarItem PropForList="/syllabus/syllabus-list" PropForAdd="/syllabus/syllabus-add" DrowName="Syllabus" list="Syllabus List" add="Syllabus Add"></SideBarItem>

      <SideBarItem PropForList="/school/teacher-add" PropForAdd="/school/student-add" DrowName="School" list="Teacher Registration" add="Student Registration"></SideBarItem>

      <SideBarItem PropForList="/class/class-list" PropForAdd="/class/class-add" DrowName="Class " list="Class List" add="Class Form"></SideBarItem>

      <SideBarItem PropForList="/fees/fee-voucher" PropForAdd="/fees/fee-structure" DrowName="Fees " list="Fee Voucher" add="Fee Structure"></SideBarItem>

      <SideBarItem PropForList="/admission/admission-list" PropForAdd="/admission/admission-add" DrowName="Admission " list="Admission List" add="Admission Form"></SideBarItem>

      <SideBarItem PropForList="/exam/exam-result" PropForAdd="/exam/exam-schedule" DrowName="Exam " list="Exam Result" add="Exam Schedule"></SideBarItem>
   
        
 
     
  </div>

     
    </>
  )
}

export default SideBar

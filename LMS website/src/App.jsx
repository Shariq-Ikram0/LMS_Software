import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Student from './screens/Student'
import { useState } from 'react'
import { auth } from './components/firebase'
import StudentList from './nestedScreens/StudentList'
import StudentAdd from './nestedScreens/StudentAdd'
import Navbar from './components/Navbar'
import Teacher from './screens/Teacher'
import TeacherList from './nestedScreens/TeacherList'
import TeacherAdd from './nestedScreens/TeacherAdd'
import Subjects from './screens/Subjects'
import SubjectsList from './nestedScreens/SubjectsList'
import SubjectAdd from './nestedScreens/SubjectAdd'
import SyllabusAdd from './nestedScreens/SyllabusAdd'
import SyllabusList from './nestedScreens/SyllabusList'
import Syllabus from './screens/Syllabus'
import School from './screens/School'
import Class from './screens/Class'
import ClassList from './nestedScreens/ClassList'
import ClassAdd from './nestedScreens/ClassAdd'
import Fees from './screens/Fees'
import FeeStucture from './nestedScreens/FeeStucture'
import FeeVoucher from './nestedScreens/FeeVoucher'
import FeeSubmission from './nestedScreens/FeeSubmission'
import AdmissionList from './nestedScreens/AdmissionList'
import AdmissionAdd from './nestedScreens/AdmissionAdd'
import Exam from './screens/Exam'
import ExamSchedule from './nestedScreens/ExamSchedule'
import ExamSyllabus from './nestedScreens/ExamSyllabus'
import Admission from './screens/Admission'


const App = () => {
             //for keep loging
  const [user,setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    })
  })

  return (
    <div>
      
     
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/student" element={<Student/>} >
             <Route path="student-list" element={<StudentList/>}/>
             <Route path="student-add" element={<StudentAdd/>}/>
        </Route>
        <Route path="/teacher" element={<Teacher/>} >
             <Route path="teacher-list" element={<TeacherList/>}/>
             <Route path="teacher-add" element={<TeacherAdd/>}/>
        </Route>
        <Route path='/subject' element={<Subjects/>}>
          <Route path='subject-list' element={<SubjectsList/>}/>
          <Route path='subject-add' element={<SubjectAdd/>}/>
        </Route>
        <Route path='/syllabus' element={<Syllabus/>}>
          <Route path='syllabus-list' element={<SyllabusList/>}/>
          <Route path='syllabus-add' element={<SyllabusAdd/>}/>
        </Route>
        <Route path='/school' element={<School/>}>
          <Route path='student-add' element={<StudentAdd/>}/>
          <Route path='teacher-add' element={<TeacherAdd/>}/>
        </Route>
        <Route path='/class' element={<Class/>}>
          <Route path='class-list' element={<ClassList/>}/>
          <Route path='class-add' element={<ClassAdd/>}/>
        </Route>
        <Route path='/fees' element={<Fees/>}>
          <Route path='fee-structure' element={<FeeStucture/>}/>
          <Route path='fee-voucher' element={<FeeVoucher/>}/>
          <Route path='fee-submission' element={<FeeSubmission/>}/>
        </Route>
        <Route path='/admission' element={<Admission/>}>
          <Route path='admission-list' element={<AdmissionList/>}/>
          <Route path='admission-add' element={<AdmissionAdd/>}/>
        </Route>
        <Route path='/exam' element={<Exam/>}>
          <Route path='exam-schedule' element={<ExamSchedule/>}/>
          <Route path='exam-result' element={<ExamSyllabus/>}/>
        </Route>
      
      
      </Routes>
      
      
    </div>
  )
}

export default App

import JobsList from './JobsList';
import CompaniesList from './CompaniesList';
import Homepage from './Homepage'
import CompanyDetail from './CompanyDetail';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { Route, Routes, Navigate } from 'react-router';
import '../css/AppRoutes.css'
import JobDetail from './JobDetail';

function AppRoutes({ login, signup }) {
  return (
  <div className='AppRoutes'>
    <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/signup" element={<SignUpForm signup={signup}/>} />
        <Route path="/login" element={<LoginForm login={login}/>} />
        <Route path="/profile" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" />}  />
    </Routes>
  </div>
  )
}

export default AppRoutes;

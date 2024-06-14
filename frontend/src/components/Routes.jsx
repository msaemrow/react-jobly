import JobsList from './JobsList';
import CompaniesList from './CompaniesList';
import Homepage from './Homepage'
import { Route, Routes, Navigate } from 'react-router';

function AppRoutes() {
  return (
  <div className='AppRoutes'>
    <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/jobs" element={<JobsList />} />
    </Routes>
  </div>
  )
}

export default AppRoutes

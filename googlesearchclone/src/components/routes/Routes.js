import { Routes, Route, Navigate } from 'react-router-dom'
import Results from '../results/Results'


const AllRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/search' element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route news="/videos" element={<Results />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
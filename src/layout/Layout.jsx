import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div className='bg-main text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

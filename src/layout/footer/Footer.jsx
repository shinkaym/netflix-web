import React from 'react'
import { Link } from 'react-router-dom'
import { Links } from '~/data'

const Footer = () => {
  return (
    <div className='bg-dry py-4 border-t-2 border-black'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-7 py-10 justify-between'>
          {Links.map((e, i) => (
            <div key={i} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
              <h3 className='text-md lg:leading-7 mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{e.title}</h3>
              <ul className='text-sm flex flex-col space-y-3'>
                {e.links.map((t, u) => (
                  <li key={u} className='flex items-baseline'>
                    <Link to={t.link} className='text-border inline-block w-full hover:text-subMain'>
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
            <Link to={'/'}>
              <img src='/images/logo.png' alt='logo' className='w-2/4 object-contain h-12' />
            </Link>
            <p className='leading-7 text-sm text-border mt-3'>
              <span>
                CC Happy City, Huyện Bình Chánh, TP.HCM <br /> Việt Nam
              </span>
              <br />
              <span>Tell: +84 12345678</span>
              <br />
              <span>Email: shinkaym.services@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

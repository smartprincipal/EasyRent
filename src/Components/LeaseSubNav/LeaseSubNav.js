import './LeaseSubNav.css'
import documentImg from '../../Assets/document-img.svg'
import bell from '../../Assets/bell.svg'

import React from 'react'

const LeaseSubNav = () => {
  return (
    <div className='sub-nav-container'>
        <div className='image-text-container'>
            <img src={documentImg} alt='' />
            <p>Documents</p>
        </div>
        <div className='image-text-container'>
            <img src={bell} alt='' />
            <p>Alerts</p>
        </div>
        <div >
        <p className='name-field'>Hi, Shemuel</p>
        </div>     
    </div>
  )
}

export default LeaseSubNav
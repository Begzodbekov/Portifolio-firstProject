import React from 'react'
import './Cloud.scss'
import Billing from '../../img/cloud-billing.png'
import Scheduling from '../../img/cloud-scheduling.png'
import Customer from '../../img/cloud-customer.png'
function Cloud() {
  return (
    <div className='Cloud'>
        <div className="container">
         <div className="cloud-inner">
            <h1 className='cloud-title'>All-In-One <span>Cloud Software.</span></h1>
            <p className='cloud-description'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            <div className="cloud-list">
              <div>
                <img src={Billing} alt="" />
                <h1>Online Billing, Invoicing, & Contracts</h1>
                <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
              </div>
              <div>
                <img src={Scheduling} alt="" />
                <h1>Easy Scheduling & Attendance Tracking</h1>
                <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
              </div>
              <div>
                <img src={Customer} alt="" />
                <h1 className='list-title'>Customer Tracking</h1>
                <p className='list-description'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
              </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Cloud
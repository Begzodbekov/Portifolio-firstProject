import React from 'react'
import Dcontent from '../../components/Dcontent/Dcontent'
import Dhero from '../../components/Dhero/Dhero'
import Dtotc from '../../components/Dtotc/Dtotc'
import Education from '../../components/Education/Education'
import Articles from '../../components/Articles/Articles'

function Cdetail() {
  return (
    <div>
      <Dhero/>
      <Dcontent/>
      <Articles/>
      <Dtotc/>
      <Education/>
    </div>
  )
}

export default Cdetail
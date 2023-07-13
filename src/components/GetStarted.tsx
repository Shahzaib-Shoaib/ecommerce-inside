import React from 'react'
import GetStartedForm from './Forms/GetStartedForm'

const GetStarted = () => {
  return (
    <section className="section Get_Started bg-darkpurpule">
        <div className="heading">
            <h3 className="section_mainheading text-center text-white">Let’s Get Started!</h3>
            <p className="section_description text-center text-white">Drive your business forward and get in touch today.</p>
          </div>

          {/* Get Started Form */}
          <GetStartedForm darkmode={false} />

    </section>
  )
}

export default GetStarted
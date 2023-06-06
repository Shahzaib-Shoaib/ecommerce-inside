import React from 'react'

const ErrorAlert = ({error}:{error:string}) => {
  return (
    <div className='border border-red-700 bg-red-100 rounded-sm p-2 mt-2'>
        <p className="text-red-800">{error}</p>
    </div>
  )
}

export default ErrorAlert
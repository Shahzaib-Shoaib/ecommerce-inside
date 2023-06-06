'use client'
import { useState } from 'react';
import Stepper from '~/components/OrderProcess/Stepper'
import Brief from '~/components/OrderProcess/Steps/Brief';
import OrderNow from '~/components/OrderProcess/Steps/OrderNow';
import Payment from '~/components/OrderProcess/Steps/Payment';

const OrderPage = () => {
  const [currentStep,setCurrentStep] = useState<Number>(1);


  const displaySteps = (step:Number) => {
    switch(step){
      case 1:
        return <OrderNow />
      case 2 :
        return <Brief />
      case 3:
         return <Payment />
      default:
    }
  }
  return (
    <div className='order_page'>
      <Stepper  currentStep={currentStep} brief="Logo Brief" />
    </div>
  )
}

export default OrderPage
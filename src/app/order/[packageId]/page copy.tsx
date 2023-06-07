'use client'
import { useState } from 'react';
import Stepper from '@/components/OrderProcess/Stepper'
import Brief from '@/components/OrderProcess/Steps/Brief';
import OrderNow from '@/components/OrderProcess/Steps/OrderNow';
import Payment from '@/components/OrderProcess/Steps/Payment';
import packages from '@/data/packages';

type paramsType = {
  packageId:string
}

type PackageType = {
  id: string;
  name: string;
  price: string;
  discprice: string;
  desc: string;
  cat: string;
  points: string[];
}[];

const OrderPage = ({params}:{params:paramsType}) => {

  const orderPackage: PackageType = packages.filter((obj) => {
    return obj.id === params.packageId;
  });

  const [currentStep,setCurrentStep] = useState<number>(1);

  const changeStep = () => {
    console.log(currentStep+1)
    setCurrentStep(currentStep+1);
  }




  const displaySteps = (step:Number) => {
    switch(step){
      case 1:
        return <OrderNow selectedpackage={orderPackage} changeStep={()=>changeStep()} />
      case 2 :
        return <Brief changeStep={()=>changeStep()}  />
      case 3:
         return <Payment />
      default:
    }
  }
  
  return (
    <div className='order_page'>
      <Stepper  currentStep={currentStep} brief="Logo Brief" />
      <div className="div_container mx-auto mt-16 px-4">
        {displaySteps(currentStep)}
      </div>
    </div>
  )
}

export default OrderPage
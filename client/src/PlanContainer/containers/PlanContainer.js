import React from 'react';
import PlanList from '../components/PlanList.js';

const PlanContainer = ({plans}) => {
  if(plans.length === 0){
    return null;
  }

  return (
    <PlanList plans={plans} />
  )
}

export default PlanContainer;

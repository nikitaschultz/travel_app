import React from 'react';
import { Timeline } from 'rsuite';
import Event from './Event.js';

const PlanList = ({plans}) => {
  const planList = plans.map((plan, index) => {
    switch(plan.planType){
      case "FLIGHT":
        return (
          <Timeline.Item key={index}>
            <p>{plan.date}</p>
            <h4>Flight</h4>
          </Timeline.Item>
        );
      case "EVENT":
        return (
          <Timeline.Item key={index}>
            <p>{plan.date}</p>
            <h4>Event</h4>
            <Event plan={plan} />
          </Timeline.Item>
        );
      case "ACCOMMODATION":
        return (
          <Timeline.Item key={index}>
            <p>{plan.date}</p>
            <h4>Accommodation</h4>
          </Timeline.Item>
        );
      case "TRAIN":
        return (
          <Timeline.Item key={index}>
            <p>{plan.date}</p>
            <h4>Train</h4>
          </Timeline.Item>
        );
    }
  })

    return (
      <Timeline align="right">
        {planList}
      </Timeline>
    )

}

export default PlanList;

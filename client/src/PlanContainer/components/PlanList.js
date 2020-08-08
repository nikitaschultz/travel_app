import React from 'react';
import { Timeline } from 'rsuite';
import Event from './Event.js';
import Flight from './Flight.js';
import Accommodation from './Accommodation.js';
import Train from './Train.js';
import DateFormat from '../../helpers/DateFormat.js';

const PlanList = ({plans}) => {
  const dateFormatter = new DateFormat();

  const planList = plans.map((plan, index) => {
    switch(plan.planType){
      case "FLIGHT":
        return (
          <Timeline.Item key={index}>
            <h4>{dateFormatter.format(plan.date)}</h4>
            <h5>Flight</h5>
            <Flight plan={plan} />
          </Timeline.Item>
        );
      case "EVENT":
        return (
          <Timeline.Item key={index}>
            <h4>{dateFormatter.format(plan.date)}</h4>
            <h5>Event</h5>
            <Event plan={plan} />
          </Timeline.Item>
        );
      case "ACCOMMODATION":
        return (
          <Timeline.Item key={index}>
            <h4>{dateFormatter.format(plan.date)}</h4>
            <h5>Accommodation</h5>
            <Accommodation plan={plan} />
          </Timeline.Item>
        );
      case "TRAIN":
        return (
          <Timeline.Item key={index}>
            <h4>{dateFormatter.format(plan.date)}</h4>
            <h5>Train</h5>
            <Train plan={plan} />
          </Timeline.Item>
        );
    }
  })

    return (
      <Timeline align="left">
        {planList}
      </Timeline>
    )

}

export default PlanList;

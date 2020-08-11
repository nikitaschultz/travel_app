import React from 'react';
import { Timeline, Icon } from 'rsuite';
import { Link } from 'react-router-dom';
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
          <Timeline.Item key={index} dot={<Icon icon="plane" size="2x" />}>
            <p>{dateFormatter.format(plan.date)}</p>
            <h5>Flight</h5>
            <Flight plan={plan} />
            <button className="sml-white">Edit Plan</button>
          </Timeline.Item>
        );
      case "EVENT":
        return (
          <Timeline.Item key={index} dot={<Icon icon="calendar" size="2x"/>}>
            <p>{dateFormatter.format(plan.date)}</p>
            <h5>Event</h5>
            <Event plan={plan} />
            <button className="sml-white">Edit Plan</button>
          </Timeline.Item>
        );
      case "ACCOMMODATION":
        return (
          <Timeline.Item key={index} dot={<Icon icon="bed" size="2x" />}>
            <p>{dateFormatter.format(plan.date)}</p>
            <h5>Accommodation</h5>
            <Accommodation plan={plan} />
          </Timeline.Item>
        );
      case "TRAIN":
        return (
          <Timeline.Item key={index} dot={<Icon icon="train" size="2x" />}>
            <p>{dateFormatter.format(plan.date)}</p>
            <h5>Train</h5>
            <Train plan={plan} />
            <button className="sml-white">Edit Plan</button>
          </Timeline.Item>
        );
      default:
        return null
    }
  })

    return (
      <Timeline className="custom-timeline">
        {planList}
      </Timeline>
    )

}

export default PlanList;

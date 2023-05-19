import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

class MyCalendar extends Component {
  render() {
    return (
      <div className="App w-[355px] h-[122px]">
        <FullCalendar defaultView="dayGridMonth" plugins={[timeGridPlugin]} />
      </div>
    );
  }
}
export default MyCalendar;

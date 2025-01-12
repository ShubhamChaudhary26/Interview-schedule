import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = ({ events, deleteEvent }) => {
  const handleSelectEvent = (event) => {
    if (window.confirm("Do you want to delete this event?")) {
      deleteEvent(event);
    }
  };

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "500px" }}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default Calendar;

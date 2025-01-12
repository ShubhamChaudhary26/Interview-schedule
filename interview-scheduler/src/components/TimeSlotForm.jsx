import React, { useState } from "react";

const TimeSlotForm = ({ addEvent }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ start: new Date(start), end: new Date(end), title: "Interview" });
    setStart("");
    setEnd("");
  };

  return (
    <form className="timeslot-form" onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
      />
      <button type="submit">Add Time Slot</button>
    </form>
  );
};

export default TimeSlotForm;

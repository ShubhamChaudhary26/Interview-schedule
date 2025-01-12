import React, { useState } from "react";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import TimeSlotForm from "./components/TimeSlotForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);

  const handleLogin = (username, password) => {
    if (username === "Shubham" && password === "pass123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const addEvent = (newEvent) => {
    const hasClash = events.some(
      (event) =>
        (newEvent.start >= event.start && newEvent.start < event.end) ||
        (newEvent.end > event.start && newEvent.end <= event.end)
    );
    if (hasClash) {
      alert("Time slot clashes with an existing event!");
      return;
    }
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event !== eventToDelete));
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="main-container">
          <h1>HR Interview Scheduler</h1>
          <div className="scheduler-container">
            <TimeSlotForm addEvent={addEvent} />
            <Calendar events={events} deleteEvent={deleteEvent} />
          </div>
          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

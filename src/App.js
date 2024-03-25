import React from 'react';
import WeeklyCalendar from './WeeklyCalendar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
    <header className="App-header">
    <h1>Weekly Events Calendar</h1>
</header>
<WeeklyCalendar />
</div>
);
}

export default App;
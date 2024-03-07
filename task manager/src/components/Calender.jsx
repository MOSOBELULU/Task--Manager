import React, { useState } from 'react';
import classes from './Calender.module.css'

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const calendarDays = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div className={classes.calendarDayEmpty} key={`empty-${i}`} />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div className={classes.calendar-day} key={day}>
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className={classes.calendar}>
      <div className={classes.calendarHeader}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className={classes.calendarBody}>{renderCalendar()}</div>
    </div>
  );
}

export default Calendar;

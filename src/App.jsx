// 


import { useState } from 'react';
import './App.css'
import arrow from "./assets/icon-arrow.svg"

function App() {
  const [days, setDays] = useState(null)
  const [months, setMonths] = useState(null)
  const [years, setYears] = useState(null)
  //error state
  const [dayError, setDayError] = useState(null)
  const [monthError, setMonthError] = useState(null)
  const [yearError, setYearError] = useState(null);

  const date = new Date();
  const currentMonth = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
  const currentDay = date.getDate();
  const currentYear = date.getFullYear()

  const handleCalculate = (e) => {
    e.preventDefault();
    const day = parseInt(e.target.day.value);
    const month = parseInt(e.target.month.value);
    const year = parseInt(e.target.year.value);

    if (!day) {
      setMonthError(null);
      setYearError(null);
      return setDayError("The field is required.");
    } else if (day > 31 || day < 1) {
      setMonthError(null);
      setYearError(null);
      return setDayError("Must be a valid day.");
    } else if (!month) {
      setDayError(null);
      setYearError(null);
      return setMonthError("The field is required.");
    } else if (month > 12 || month < 1) {
      setDayError(null);
      setYearError(null);
      return setMonthError("Must be a valid month.");
    } else {
      setDayError(null);
      setMonthError(null);

      if (!year) {
        return setYearError("The field is required.");
      }
      setYearError("")
      const calculatedAge = Math.abs(currentYear - year);
      const calculatedMonth = Math.abs(currentMonth - month);
      const calculatedDays = Math.abs(currentDay - day);

      setYears(calculatedAge);
      setMonths(calculatedMonth);
      setDays(calculatedDays);
    }
  }

  return (
    <div className='bg-slate-100 pt-10 w-full h-screen'>
      <div className="w-11/12 md:w-3/5 mx-auto bg-white my-6 rounded-3xl rounded-br-[90px]">
        <h2 className='text-2xl md:text-4xl font-bold text-center text-indigo-500 pt-4 pb-3 md:pb-6'>Age Calculator</h2>
        <form onSubmit={handleCalculate} >
          <div className='flex justify-center md:justify-start gap-3 md:gap-10  ml-0 md:ml-12'>
            <div>
              <label className={`text-slate-500 text-sm font-bold ${dayError ? "text-red-600" : "text-black"}`} htmlFor="day">Day</label> <br />
              <input className='border border-slate-900 font-bold font-2xl px-6 py-2 w-24 rounded-md' name='day' type="text" placeholder='DD' inputMode="numeric" />
              <p className='text-red-600'>{dayError}</p>
            </div>
            <div>
              <label className={`text-slate-500 text-sm font-bold ${monthError ? "text-red-600" : "text-black"}`} htmlFor="month">Month</label> <br />
              <input className='border border-slate-900 font-bold font-2xl px-6 py-2 w-24 rounded-md' name='month' type="text" placeholder='MM' inputMode="numeric" />
              <p className='text-red-600'>{monthError}</p>
            </div>
            <div>
              <label className={`text-slate-500 text-sm font-bold ${yearError ? "text-red-600" : "text-black"}`} htmlFor="day">Year</label> <br />
              <input className='border border-slate-900 font-bold font-2xl px-6 py-2 w-24 rounded-md' name='year' type="text" placeholder='YYYY' inputMode="numeric" />
              <p className='text-red-600'>{yearError}</p>
            </div>
          </div>
          <div className='flex justify-around md:justify-between px-4'>
            <hr className='w-full mt-10' />
            <button className='bg-indigo-500 w-14 h-12 rounded-full flex items-center justify-center mt-5'>
              <img src={arrow} className='w-8' alt="" />
              <input className='hidden' type="submit" />
            </button>
          </div>
        </form>
        <div className='text-4xl md:text-6xl font-extrabold italic px-16 pb-5'>
          <h2><span className='text-indigo-500'>  {years !== null ? years : "__"}</span>  years</h2>
          <h2><span className='text-indigo-500'>  {days !== null ? days : "__"}</span>  days</h2>
          <h2><span className='text-indigo-500'>  {months !== null ? months : "__"}</span>  months</h2>
        </div>
      </div>
    </div>
  )
}

export default App

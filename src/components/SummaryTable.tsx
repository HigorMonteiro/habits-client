import { generateDatesFromYearBeginning } from "../ultils/generate-range-between-dates"
import { HabitDay } from "./HabitDay"

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => { 
        return (
          <div key={`${weekDay}-${i}`} className="text-white text-xl font-bold h-10 w-10 flex items-center justify-center">
            {weekDay}
          </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          return <HabitDay key={date.toString()}/> 
        })}
        {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => {
          return (
            <div 
              key={i} 
              className="w-10 h-10 bg-teal-200 border-2 border-teal-100 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })}
      </div>
    </div>
  )
}
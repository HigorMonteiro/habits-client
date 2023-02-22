import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";

const availableWeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday '
]
export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  function createNewHabit(event: FormEvent) {
    event.preventDefault()

    console.log(title, weekDays)
  }

  function handleToggleWeekDay(weekDay: number){
    if(weekDays.includes(weekDay)) {
      const setWeekDaysWithRemovedOne = weekDays.filter(day =>  day != weekDay)
      setWeekDays(setWeekDaysWithRemovedOne)
    } else {
      const weekDaysWithAddOne = [...weekDays, weekDay]
      setWeekDays(weekDaysWithAddOne)
    }
  }
  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        className="p-4 rounded-lg mt-3 bg-shadow text-white placeholder-white"
        type="text"
        id="title"
        placeholder="Ex: Estudar React"
        autoFocus
        onChange={event => setTitle(event.target.value)}
      />
      
      <label htmlFor="recurrence" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-3 mt-3">
        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root 
              key={weekDay} 
              className="flex items-center gap-3 group"
              onCheckedChange={()=> handleToggleWeekDay(index)}
            >
              <div className='
                  h-8 w-8 rounded-lg flex items-center 
                  justify-center bg-zinc-900 border-2 border-zinc-800
                  group-data-[state=checked]:bg-green-500
                  group-data-[state=checked]:border-green-200
              '>
                <Checkbox.Indicator>
                  <Check size={20} className=" text-white"/>
                </Checkbox.Indicator>
              </div>

              <span 
                className='
                  font-semibold text-xl text-white leading-tight
                '>
                {weekDay}
              </span>
            </Checkbox.Root>
          )
        })}

      </div>
      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
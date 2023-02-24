import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";
import dayjs from "dayjs";
import { HabitsList } from "./HabitsList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function HabitDay({
  defaultCompleted = 0,
  amount = 0,
  date,
}: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");
  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  function handleCompletedChaged(completed: number) {
    setCompleted(completed);
  }
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-teal-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-100 focus:ring-offset-2 focus:ring-offset-background",
          {
            "bg-teal-800 border-teal-700": completedPercentage >= 80,
            "bg-teal-600 border-teal-500":
              completedPercentage >= 60 && completedPercentage < 80,
            "bg-teal-700 border-teal-500":
              completedPercentage >= 40 && completedPercentage < 60,
            "bg-teal-500 border-teal-300":
              completedPercentage >= 20 && completedPercentage < 40,
            "bg-teal-900 border-teal-700":
              completedPercentage > 0 && completedPercentage < 20,
            "bg-teal-100  border-teal-200": completedPercentage === 0,
            ["border- border-4"]: isCurrentDay,
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-btn flex flex-col">
          <span className="font-semibold text-white">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>
          <ProgressBar progress={completedPercentage} />
          <HabitsList date={date} onCompletedChanged={handleCompletedChaged} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

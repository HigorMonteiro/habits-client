import { useMemo } from 'react';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';

import { ProgressBar } from './ProgressBar';

interface IHabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay({ amount, completed }: IHabitDayProps) {
  const completedPercentage = useMemo(() => {
    return Math.round((completed / amount) * 100);
  }, [completed, amount])



  return (
    <Popover.Root>
      <Popover.Trigger className={clsx("w-10 h-10 bg-teal-900 border-2 border-teal-800 rounded-lg", {
        'bg-teal-900 border-teal-800': completedPercentage === 0,
        'bg-teal-900 border-teal-700': completedPercentage > 0 && completedPercentage < 20,
        'bg-teal-800 border-teal-600': completedPercentage >= 20 && completedPercentage < 40,
        'bg-teal-700 border-teal-500': completedPercentage >= 40 && completedPercentage < 60,
        'bg-teal-600 border-teal-500': completedPercentage >= 60 && completedPercentage < 80,
        'bg-teal-500 border-teal-400': completedPercentage >= 80,
      })} />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-dialog flex flex-col">
          <span className="font-semibold text-white">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">06/01</span>

          <ProgressBar progress={completedPercentage} />

          <Popover.Arrow height={8} width={16} className="fill-dialog" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
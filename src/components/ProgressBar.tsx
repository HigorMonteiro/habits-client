interface IProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: IProgressBarProps) {
  const progressStyle = {
    width: `${progress}%`,
  }

  return (
    <div className="h-3 rounded-xl bg-teal-200 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={75}
        className="h-3 rounded-xl bg-teal-600"
        style={progressStyle}
      />
    </div>
  );
}
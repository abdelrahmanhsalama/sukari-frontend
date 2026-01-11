const GlucoseEntry = ({
  reading,
  time,
  date,
}: {
  reading: number;
  time: string;
  date: string;
}) => {
  return (
    <div className="flex justify-between items-center bg-red-100 p-2 rounded-md h-[70px]">
      <div className="flex gap-1 items-center">
        <p className="text-3xl">🩸</p>
        <p>
          <span className="text-2xl">{reading}</span>
          <span className="text-sm"> mg/dL</span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-left text-sm">{time}</p>
        <p className="text-left text-sm">{date}</p>
      </div>
    </div>
  );
};

export default GlucoseEntry;

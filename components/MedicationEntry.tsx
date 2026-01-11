const MedicationEntry = ({
  units,
  subType,
  medicationName,
  time,
  date,
}: {
  units: number;
  subType: "insulin" | "oralMed";
  medicationName: string;
  time: string;
  date: string;
}) => {
  return (
    <div className="flex justify-between align-center bg-blue-100 p-2 rounded-md h-[70px]">
      <div className="flex gap-1">
        <p className="text-3xl flex items-center">
          {subType === "insulin" ? "💉" : "💊"}
        </p>
        <div className="-space-y-1">
          <p>
            <span className="text-xl">{units}</span>
            <span className="text-sm">
              {subType === "insulin" ? " units of " : " pills of "}
            </span>
          </p>
          <p className="text-xl">{medicationName}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <p className="text-left text-sm">{time}</p>
        <p className="text-left text-sm">{date}</p>
      </div>
    </div>
  );
};

export default MedicationEntry;

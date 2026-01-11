import GlucoseEntry from "@/components/GlucoseEntry";
import MedicationEntry from "@/components/MedicationEntry";
import { Card, CardContent } from "@/components/ui/card";

type GlucoseLog = {
  id: number;
  type: "glucose";
  reading: number;
  date: string;
  time: string;
};
type MedicationLog = {
  id: number;
  type: "medication";
  subType: "insulin" | "oralMed";
  units: number;
  date: string;
  time: string;
  medicationName: string;
};
type Log = GlucoseLog | MedicationLog;

const History = () => {
  const logs: Log[] = [
    { id: 1, reading: 100, date: "11/01/2026", time: "11:51", type: "glucose" },
    {
      id: 1,
      units: 10,
      date: "11/01/2026",
      time: "20:55",
      type: "medication",
      subType: "insulin",
      medicationName: "Apidra",
    },
  ];
  return (
    <div className="h-[80vh] w-[80vw] space-y-3 flex flex-col">
      <h1 className="text-center text-[2rem]">🍎 Sukari</h1>
      <Card className="flex-1 p-0">
        <CardContent className="flex flex-col justify-center space-y-2 p-3">
          {logs.map((logEntry) =>
            logEntry.type === "glucose" ? (
              <GlucoseEntry
                reading={logEntry.reading}
                date={logEntry.date}
                time={logEntry.time}
                key={`reading-${logEntry.id}`}
              />
            ) : (
              <MedicationEntry
                units={logEntry.units}
                subType={logEntry.subType}
                medicationName={logEntry.medicationName}
                date={logEntry.date}
                time={logEntry.time}
                key={`medication-${logEntry.id}`}
              />
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default History;

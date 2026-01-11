"use client";
import { TabsContent } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";
import Insulin from "./Insulin";
import OralMedication from "./OralMedication";

const Medication = () => {
  const [option, setOption] = useState("insulin");

  return (
    <TabsContent value="medication">
      <Card className="h-full w-[80vw] sm:w-[480px] flex flex-col justify-center">
        <CardContent className="flex flex-col justify-center space-y-4">
          <p className="text-center text-xl font-medium">
            Add Medication Entry
          </p>
          <RadioGroup defaultValue={option} className="gap-2">
            <div
              className="flex items-center gap-3"
              onClick={() => setOption("insulin")}
            >
              <RadioGroupItem value="insulin" id="insulin" />
              <Label htmlFor="insulin">Insulin</Label>
            </div>
            <div
              className="flex items-center gap-3"
              onClick={() => setOption("medication")}
            >
              <RadioGroupItem value="medication" id="medication" />
              <Label htmlFor="medication">Oral Medication</Label>
            </div>
          </RadioGroup>
          {option === "insulin" ? <Insulin /> : <OralMedication />}
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Medication;

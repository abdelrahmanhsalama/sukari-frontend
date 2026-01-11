// Add only active when there is an actual value

"use client";

import { TabsContent } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

const Glucose = () => {
  return (
    <TabsContent value="glucose">
      <Card className="h-full w-[80vw] sm:w-[480px] flex flex-col justify-center">
        <CardContent className="flex flex-col space-y-2">
          <p className="text-center text-xl font-medium">Add Glucose Reading</p>
          <div className="flex gap-2 w-full">
            <div className="relative w-full">
              <p className="absolute top-1/2 -translate-y-1/2 right-3 text-muted-foreground">
                mg/dL
              </p>
              <Input type="number" className="no-spinner"></Input>
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Flag" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">
                  <span>🥱</span>
                  <span>Fasting</span>
                </SelectItem>
              </SelectGroup>
              <Label
                className="p-2 hover:bg-muted rounded-md"
                onClick={() => alert("Hello!")}
              >
                Edit Flags
              </Label>
            </SelectContent>
          </Select>
          <Button className="mx-auto">Add</Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Glucose;

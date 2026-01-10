// Add only active when there is an actual value

import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const OralMedication = () => {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Medication" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="m01">🔵 Medication #1</SelectItem>
            <SelectItem value="m02">🟣 Medication #2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="relative w-full">
        <p className="text-sm absolute top-1/2 -translate-y-1/2 right-3 text-muted-foreground">
          pills
        </p>
        <Input type="number"></Input>
      </div>
      <Button>Add</Button>
    </div>
  );
};

export default OralMedication;

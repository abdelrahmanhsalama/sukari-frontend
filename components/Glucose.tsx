// Add only active when there is an actual value

import { TabsContent } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Glucose = () => {
  return (
    <TabsContent value="glucose">
      <Card>
        <CardContent className="flex flex-col justify-center space-y-2 h-50 w-[80vw]">
          <p className="text-center text-sm font-medium">
            What is the reading you want to add?
          </p>
          <div className="flex gap-2 w-full">
            <div className="relative w-full">
              <p className="absolute top-1/2 -translate-y-1/2 right-3 text-muted-foreground">
                mg/dL
              </p>
              <Input type="number" className="no-spinner"></Input>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full cursor-pointer">
              <Button variant="outline">🏳️ Flags</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[50vw]" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                  🥱 Fasting
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                Edit Flags
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>Add</Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Glucose;

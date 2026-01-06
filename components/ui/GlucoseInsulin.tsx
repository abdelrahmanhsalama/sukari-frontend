import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const GlucoseInsulin = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-center text-[2rem]">🍎 Sukari</h1>
      <Tabs defaultValue="glucose">
        <TabsList className="*:cursor-pointer mx-auto">
          <TabsTrigger value="glucose">Glucose</TabsTrigger>
          <TabsTrigger value="insulin">Insulin</TabsTrigger>
        </TabsList>
        <TabsContent value="glucose">
          <Card>
            <CardContent className="space-y-4">
              <p>What is the reading you want to add?</p>
              <div className="flex gap-2">
                <div className="relative">
                  <p className="absolute top-1/2 -translate-y-1/2 right-3 text-muted-foreground">
                    mg/dL
                  </p>
                  <Input></Input>
                </div>
                <Button>Add</Button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="w-full cursor-pointer">
                  <Button variant="outline">🏳️ Flags</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
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
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insulin">
          <Card>
            <CardContent className="space-y-4">
              <p>How many insulin units did you take?</p>
              <div className="flex gap-2">
                <Input></Input>
                <Button>Add</Button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="w-full cursor-pointer">
                  <Button variant="outline">💉 Type</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                      🔵 Apidra
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                      🟣 Lantus
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                    Edit Types
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GlucoseInsulin;

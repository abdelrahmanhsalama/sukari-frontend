import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Glucose from "./Glucose";
import Medication from "./Medication";

const GlucoseInsulin = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-center text-[2rem]">🍎 Sukari</h1>
      <Tabs defaultValue="glucose">
        <TabsList className="*:cursor-pointer mx-auto">
          <TabsTrigger value="glucose">Glucose</TabsTrigger>
          <TabsTrigger value="medication">Medication</TabsTrigger>
        </TabsList>
        <Glucose />
        <Medication />
      </Tabs>
    </div>
  );
};

export default GlucoseInsulin;

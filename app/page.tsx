import Image from "next/image";
import GlucoseInsulin from "../components/ui/GlucoseInsulin";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <GlucoseInsulin />
    </div>
  );
}

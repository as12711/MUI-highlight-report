import { TooltipProvider } from "@/components/ui/tooltip";
import Report from "@/pages/Report";

function App() {
  return (
    <TooltipProvider>
      <Report />
    </TooltipProvider>
  );
}

export default App;

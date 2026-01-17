import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Report from "@/pages/Report";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Report} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Router />
    </TooltipProvider>
  );
}

export default App;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe2 } from "lucide-react";

export const DashboardMap = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Global Activity Map</CardTitle>
        <CardDescription>Real-time monitoring of wildlife protection zones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] rounded-md bg-muted overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
            <Globe2 className="h-12 w-12 text-muted-foreground animate-pulse" />
            <p className="text-muted-foreground text-sm">Interactive map visualization coming soon</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </CardContent>
    </Card>
  );
};
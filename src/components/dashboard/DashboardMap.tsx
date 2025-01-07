import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardMap = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Global Activity Map</CardTitle>
        <CardDescription>Real-time monitoring of wildlife protection zones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] rounded-md bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Map visualization coming soon</p>
        </div>
      </CardContent>
    </Card>
  );
};
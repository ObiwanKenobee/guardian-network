import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    type: "warning",
    message: "Unusual activity detected in Southeast Asian wildlife corridor",
    time: "2 hours ago",
    location: "Southeast Asia",
    severity: "high",
  },
  {
    type: "success",
    message: "Community intervention prevented potential trafficking incident",
    time: "4 hours ago",
    location: "Central Africa",
    severity: "medium",
  },
  {
    type: "warning",
    message: "Supply chain compliance alert in textile manufacturing sector",
    time: "6 hours ago",
    location: "South Asia",
    severity: "medium",
  },
];

export const DashboardAlerts = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>Latest updates and notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-4 rounded-lg border p-4 transition-all hover:shadow-md",
                alert.severity === "high" && "border-red-200 bg-red-50/50",
                alert.severity === "medium" && "border-yellow-200 bg-yellow-50/50"
              )}
            >
              {alert.type === "warning" ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{alert.message}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {alert.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";

const alerts = [
  {
    type: "warning",
    message: "Unusual activity detected in Southeast Asian wildlife corridor",
    time: "2 hours ago",
  },
  {
    type: "success",
    message: "Community intervention prevented potential trafficking incident",
    time: "4 hours ago",
  },
  {
    type: "warning",
    message: "Supply chain compliance alert in textile manufacturing sector",
    time: "6 hours ago",
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
              className="flex items-center space-x-4 rounded-lg border p-4"
            >
              {alert.type === "warning" ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{alert.message}</p>
                <p className="text-sm text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
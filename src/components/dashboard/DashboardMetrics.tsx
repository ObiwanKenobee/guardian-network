import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, Leaf, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type MetricData = {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ElementType;
  description: string;
};

const metrics: MetricData[] = [
  {
    title: "Wildlife Protection",
    value: "89%",
    trend: 12,
    icon: Shield,
    description: "Protected species tracked",
  },
  {
    title: "Community Engagement",
    value: "2,350",
    trend: 8,
    icon: Users,
    description: "Active guardians",
  },
  {
    title: "Risk Alerts",
    value: "24",
    trend: -5,
    icon: AlertTriangle,
    description: "Active incidents",
  },
  {
    title: "Sustainability Score",
    value: "92.8",
    trend: 15,
    icon: Leaf,
    description: "Overall rating",
  },
];

export const DashboardMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{metric.value}</div>
              <div
                className={cn(
                  "flex items-center text-xs",
                  metric.trend > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {metric.trend > 0 ? (
                  <TrendingUp className="mr-1 h-3 w-3" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3" />
                )}
                {Math.abs(metric.trend)}%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
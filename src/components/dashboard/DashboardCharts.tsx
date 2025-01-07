import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", incidents: 65 },
  { month: "Feb", incidents: 59 },
  { month: "Mar", incidents: 80 },
  { month: "Apr", incidents: 81 },
  { month: "May", incidents: 56 },
  { month: "Jun", incidents: 55 },
];

export const DashboardCharts = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Incident Trends</CardTitle>
        <CardDescription>Monthly tracking of reported incidents</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]" config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip />
              <Line
                type="monotone"
                dataKey="incidents"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
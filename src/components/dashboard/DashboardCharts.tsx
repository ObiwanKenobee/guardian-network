import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const timeRanges = ["1W", "1M", "3M", "1Y"] as const;
type TimeRange = typeof timeRanges[number];

const data = {
  "1W": [
    { month: "Mon", incidents: 65 },
    { month: "Tue", incidents: 59 },
    { month: "Wed", incidents: 80 },
    { month: "Thu", incidents: 81 },
    { month: "Fri", incidents: 56 },
    { month: "Sat", incidents: 55 },
    { month: "Sun", incidents: 40 },
  ],
  "1M": [
    { month: "Week 1", incidents: 245 },
    { month: "Week 2", incidents: 234 },
    { month: "Week 3", incidents: 274 },
    { month: "Week 4", incidents: 231 },
  ],
  "3M": [
    { month: "Jan", incidents: 865 },
    { month: "Feb", incidents: 789 },
    { month: "Mar", incidents: 901 },
  ],
  "1Y": [
    { month: "Jan", incidents: 865 },
    { month: "Feb", incidents: 789 },
    { month: "Mar", incidents: 901 },
    { month: "Apr", incidents: 845 },
    { month: "May", incidents: 756 },
    { month: "Jun", incidents: 855 },
    { month: "Jul", incidents: 923 },
    { month: "Aug", incidents: 865 },
    { month: "Sep", incidents: 789 },
    { month: "Oct", incidents: 901 },
    { month: "Nov", incidents: 845 },
    { month: "Dec", incidents: 756 },
  ],
};

export const DashboardCharts = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("1M");

  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Incident Trends</CardTitle>
            <CardDescription>Monthly tracking of reported incidents</CardDescription>
          </div>
          <div className="flex gap-2">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]" config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data[timeRange]}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="incidents"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
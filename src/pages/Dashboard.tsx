import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DashboardMap } from "@/components/dashboard/DashboardMap";
import { DashboardAlerts } from "@/components/dashboard/DashboardAlerts";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <DashboardMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <DashboardCharts />
          <DashboardMap />
        </div>
        <DashboardAlerts />
      </main>
    </div>
  );
};

export default Dashboard;
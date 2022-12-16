import React from "react";
import Analytics from "./Analytics";
import MetricsDisplay from "./MetricsDisplay";
import Welcome from "./Welcome";

const Dashboard = () => {
  return (
    <div className="mx-10">
      <Welcome />
      <MetricsDisplay />
      <Analytics />
    </div>
  );
};

export default Dashboard;

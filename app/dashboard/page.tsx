"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ width: "100%", height: "100vh", padding: "20px" }}>
      <h1>Project Management Dashboard</h1>
      {loading && <p>Loading Analytics...</p>}
      <iframe
        title="Project Dashboard"
        width="100%"
        height="600px"
        src=""
        style={{ border: 0 }}
        onLoad={() => setLoading(false)}
        allowFullScreen={true}
      />
    </div>
  );
}

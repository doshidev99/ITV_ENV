import React from "react";

import { CmsLayout } from "layout/CmsLayout";

const Dashboard = () => {
  return (
    <CmsLayout>
      <div className="w-100 h-100">
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Welcome to Dashboard
        </div>
      </div>
    </CmsLayout>
  );
};

export default Dashboard;

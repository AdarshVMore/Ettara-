import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Events from "./components/events/Events";
import LeaderBoard from "./components/leaderboard/LeaderBoard";

function MainContainer({ account, contract, provider }) {
  return (
    <div>
      <Routes>
        <Route
          path="profile"
          element={<Profile account={account} contract={contract} />}
        />
        <Route path="events" element={<Events />} />
        <Route
          path="leaderboard"
          element={<LeaderBoard account={account} contract={contract} />}
        />
      </Routes>
    </div>
  );
}

export default MainContainer;

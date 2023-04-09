import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Events from "./components/events/Events";
import Lboard from "./components/Lboard/Lboard";
import Givepoints from "./components/givepoints/Givepoints";
import Nftupload from "./components/nftUpload/Nftupload";

function MainContainer({ account, contract, Owner }) {
  return (
    <div>
      <Routes>
        <Route
          path="profile"
          element={<Profile account={account} contract={contract} />}
        />

        <Route path="events" element={<Events contract={contract} />} />
        <Route path="leaderboard" element={<Lboard contract={contract} />} />
        {Owner ? (
          <>
            <Route
              path="givepoint"
              element={<Givepoints contract={contract} />}
            />
            <Route
              path="nftupload"
              element={<Nftupload contract={contract} />}
            />
          </>
        ) : null}
      </Routes>
    </div>
  );
}

export default MainContainer;

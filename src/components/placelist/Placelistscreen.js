import React from "react";
import { PlaceList } from "../place/PlaceList";

import { Navbar } from "../ui/Navbar";

export const Placelistscreen = () => {
  return (
    <>
      <Navbar />

      <div>
        <PlaceList />
      </div>
    </>
  );
};

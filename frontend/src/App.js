import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-*-
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar";
import Login from "./components/account/Login";
import NoMatch from "./components/noMatch/NoMatch";
import AboutUs from "./components/aboutUs/AboutUs"
import Projects from "./components/Project/Project";
import Adddata from "./components/data/adddata";
import Editdata from "./components/data/editdata";
import Lifestyle from "./components/Project/sidebasrfolder/lifestile";
import Sidebar from "./components/Project/sidebar";
import Familyhistory from "./components/Project/sidebasrfolder/familyhistory";
import MedicalReport from "./components/Project/sidebasrfolder/medicalReport";
import Hearthcondition from "./components/Project/sidebasrfolder/hearthcondition";
import LastHospitalVisit from "./components/Project/sidebasrfolder/lastHospitalVisit";

// =============================


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 6fr' }}>
        {/* <Sidebar /> */}
        <Outlet />
      </div>

    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false)

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

        {/* Setting up a private route */}

        {/* Navbar Routes */}
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/projects" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/projects" element={<Projects />} />
        </Route>

        <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/about" element={<AboutUs />} />
        </Route>

        <Route path="/addData" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/addData" element={<Adddata />} />
        </Route>

        <Route path="/editData" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/editData" element={<Editdata />} />
        </Route>

        <Route path="/lifestyle" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Route>

        <Route path="/familyhistory" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/familyhistory" element={<Familyhistory />} />
        </Route>

        <Route path="/medicalrecord" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/medicalrecord" element={<MedicalReport />} />
        </Route>

        <Route path="/hearthcondition" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/hearthcondition" element={<Hearthcondition />} />
        </Route>

        <Route path="/lasthospitalvisit" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/lasthospitalvisit" element={<LastHospitalVisit />} />
        </Route>


        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
};

export default App;

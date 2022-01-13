import React from "react";
// import React, { useEffect } from 'react'

//header
import Header from "./header";
//subheader
// import SubHeader from "./sub-header";
//sidebar
import Sidebar from "./sidebar";
//footer
import Footer from './footer'

import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  let location = useLocation();

  return (
    <>
      {!location.pathname.includes("login") && <Sidebar />}
      <main className="main-content">
        <div className="position-relative">
          {!location.pathname.includes("login") && <Header />}
          {/* {!location.pathname.includes("login") && (
            <SubHeader pageName={location.pathname} />
          )} */}
        </div>
        <div
          className={
            "position-relative  py-0 " +
            (!location.pathname.includes("login") && "content-inner mt-4")
          }
        >
          {children}
          {/* <DefaultRouter /> */}
        </div>

        {!location.pathname.includes("login") && <Footer />}
      </main>
    </>
  );
};

export default Layout;

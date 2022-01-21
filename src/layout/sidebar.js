// import React from 'react'
import React, { useEffect } from "react";
import VerticalNav from "./vertical-nav";
// import Scrollbar from 'smooth-scrollbar'
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../lib/slices/toggleSidebar";
import { sidebarMini } from "../lib/slices/toggleSidebar";
import { closeHead } from "../lib/slices/toggle-header";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const config = useSelector((state) => state.config);
  const isActiveSideBar = useSelector((state) => state.toggleMenu.value);
  const dispatch = useDispatch();
  const History = useHistory();

  useEffect(() => {
    History.listen(() => {
      dispatch(closeHead());
      dispatch(sidebarMini());
      // Scrollbar.init(document.getElementById('my-scrollbar'));
    });
  }, [History, dispatch]);

  return (
    <>
      <aside
        className={`sidebar sidebar-default navs-rounded-all sidebar-hover  sidebarVariants  ${isActiveSideBar && "sidebar-mini"
          }`}
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/" className="navbar-brand">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              style={{
                enableBackground: "new 0 0 30 30",
                width: "30px",
              }}
              xmlSpace="preserve"
            >
              <style type="text/css">
                {"\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:url(#SVGID_1_);}\n"}
              </style>
              <path
                className="st0"
                d="M26,0H4C1.8,0,0,1.8,0,4v22c0,2.2,1.8,4,4,4h22c2.2,0,4-1.8,4-4V4C30,1.8,28.2,0,26,0z"
              />
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1={34.5273}
                y1={-6.1733}
                x2={-4.7378}
                y2={36.4015}
              >
                <stop
                  offset={0}
                  style={{
                    stopColor: "#0048B2",
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: "#012034",
                  }}
                />
              </linearGradient>
              <path
                className="st1"
                d="M10.9,19.6c0-0.5,0-1,0-1.3c0-0.1,0.1-0.2,0.2-0.2c0.5,0,0.9,0,1.4,0v1.5C12,19.2,11.3,19.2,10.9,19.6z  M17.8,12.9c-0.3,0-0.6,0-0.8,0c-0.3,0-0.4,0.1-0.4,0.3c0,0.6,0,1.2,0,1.7s-0.3,0.7-0.7,0.5c-0.6-0.4-1.3-0.4-1.9,0 c-0.4,0.2-0.7,0-0.7-0.5c0-0.6,0-1.2,0-1.8c0-0.1-0.1-0.2-0.2-0.3c-0.3,0.1-0.6,0.1-1,0.1v4.3h5.7V12.9z M15.8,14.5c0-0.5,0-1,0-1.4 c0-0.1-0.1-0.2-0.2-0.2c-0.4,0-0.8,0-1.2,0c-0.1,0-0.2,0.1-0.2,0.1c0,0.5,0,0.9,0,1.5C14.6,14.1,15.3,14.1,15.8,14.5z M6.8,12.8 c0.1-0.1,0.2-0.1,0.3-0.2L14.5,7c0.4-0.3,0.5-0.3,1,0l7.3,5.6c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.5,0.1,0.6-0.1 c0.2-0.2,0.2-0.5,0-0.6c-0.1-0.1-0.1-0.1-0.2-0.2c-2.7-2.2-5.5-4.4-8.2-6.6c-0.2-0.1-0.4-0.1-0.6,0c-1.2,1-2.5,2-3.7,3 c-1.5,1.2-3,2.4-4.6,3.6c-0.1,0.2-0.3,0.3-0.3,0.4C6.1,12.8,6.5,13,6.8,12.8z M8.9,18.1v4.1h5.6V18c-0.3,0-0.6,0-0.9,0 c-0.2,0-0.3,0.1-0.3,0.3c0,0.6,0,1.1,0,1.7s-0.3,0.8-0.8,0.5s-1.2-0.3-1.7,0S10,20.6,10,20s0-1.3,0-1.9H8.9z M21.9,22.3 c0.2,0,0.3,0,0.5,0c0.3,0,0.3-0.1,0.3-0.3c0-2.7,0-5.4,0-8c0-0.2-0.1-0.3-0.2-0.4c-2.4-1.9-4.8-3.7-7.2-5.5 c-0.2-0.3-0.5-0.3-0.6-0.2c-2.5,1.9-4.9,3.7-7.3,5.5c-0.2,0.1-0.3,0.3-0.3,0.6c0,2.6,0,5.1,0,7.7c0,0.1,0,0.2,0,0.3s0.1,0.2,0.2,0.2 c0.2,0,0.4,0,0.6,0v-0.4c0-1.3,0-2.6,0-3.9C8,17.2,8,17.2,8.7,17.2h2.6v-0.4c0-1.3,0-2.7,0-4c0-0.6,0.1-0.7,0.5-0.7 c2.1,0,4.2,0,6.2,0c0.5,0,0.6,0.1,0.6,0.6c0,1.3,0,2.7,0,4v0.5c0.9,0,1.8,0,2.6,0c0.6,0,0.7,0.1,0.7,0.7c0,1.3,0,2.7,0,4V22.3z  M17.5,19.6c0.4-0.4,1.1-0.4,1.6-0.1c0-0.5,0-0.9,0-1.4c0-0.1-0.1-0.1-0.2-0.2c-0.5,0-0.9,0-1.4,0V19.6z M30,4v22c0,2.2-1.8,4-4,4H4 c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h22C28.2,0,30,1.8,30,4z M24.7,22.8c0-0.3-0.2-0.5-0.5-0.5c-0.2,0-0.4,0-0.6,0v-8.5 c1.3-0.5,1.4-1.9,0.3-2.7c-2.9-2.2-5.7-4.4-8.5-6.7c-0.4-0.3-0.5-0.3-0.9,0L9.2,8.6c-1.1,0.9-2.3,1.8-3.4,2.7 c-0.2,0.2-0.4,0.4-0.5,0.7c-0.3,0.7,0.1,1.5,0.8,1.7c0.2,0.1,0.2,0.2,0.2,0.4c0,2.6,0,5.2,0,7.8v0.4H5.9c-0.6,0-0.7,0.1-0.7,0.7 c0,0.9,0,1.7,0,2.5c0,0.6,0.1,0.7,0.7,0.7H24c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.2,0.5-0.5C24.7,24.7,24.7,23.8,24.7,22.8z M6.1,23.7 h13.8c0.4,0,0.6,0.1,0.7,0.2c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5c0,0,0,0,0,0.1 c0,0.3-0.2,0.5-0.5,0.5c-0.2,0-0.3-0.1-0.4-0.2c0,0.3-0.2,0.4-0.8,0.4H6.1v0.1C6,25.2,6,25.2,6.6,25.2h16.8c0.1,0,0.2,0,0.3,0 c0.1,0,0.2-0.1,0.2-0.1c0-0.7,0-1.3,0-2H6.1V23.7z M21,18h-1.1c0,0.7,0,1.3,0,2c0,0.6-0.3,0.8-0.8,0.5c-0.6-0.4-1.3-0.4-1.8,0 c-0.5,0.3-0.7,0.1-0.7-0.5s0-1.1,0-1.7c0-0.1-0.1-0.3-0.2-0.3c-0.3,0-0.7,0-1,0v4.2H21V18z"
              />
            </svg>
            <span style={{ color: `${config.darkMode ? "#bfc9e3" : "#232d42"}` }} className="ms-2 logo-title" width={100}>
              Abdo chat
            </span>
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={() => dispatch(toggle())}
          >
            <i className="icon">
              <svg
                width="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </div>
        </div>
        <div
          className="sidebar-body data-scrollbar"
          data-scroll="1"
          id="my-scrollbar"
        >
          <div className="navbar-collapse" id="sidebar">
            <VerticalNav />
          </div>
        </div>
        <div className="sidebar-footer" />
      </aside>
    </>
  );
};

export default Sidebar;

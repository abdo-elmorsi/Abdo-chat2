import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "../firebase"

const VerticalNav = () => {
  const { t } = useTranslation();
  let location = useLocation();

  const db = getDatabase();
  
  useEffect(() => {
    console.log(firebase);

    onValue(ref(db, '/users'), (snapshot) => {
      const newReading = snapshot.val();
      console.log(newReading);
      // console.log(Object.keys(newReading));
    })
  }, [db])



  return (
    <>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <Accordion.Item
          as="li"
          className="mb-1"
          eventKey="horizontal-menu"
          bsPrefix="nav-item"
        >
          <input className="form-control px-3" type="search" placeholder="name..." aria-label="Search" />
        </Accordion.Item>
        <Accordion.Item
          as="li"
          className="mb-1"
          eventKey="horizontal-menu"
          bsPrefix="nav-item"
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <div
              className={`${location.pathname === "/" ? "active" : ""
                } nav-link`}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  viewBox="0 0 64 56.01"
                >
                  <path
                    fill="currentColor"
                    d="M63.63,24.65,56,18.42V8.74A.76.76,0,0,0,55.25,8h-2.5a.76.76,0,0,0-.75.75v6.42L34.52.89a4,4,0,0,0-5.05,0L.37,24.65a1,1,0,0,0-.15,1.4L1.49,27.6a1,1,0,0,0,1.4.15L8,23.58V54a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V38l8,0V54a2,2,0,0,0,2,2l16,0a2,2,0,0,0,2-2V23.58l5.11,4.17a1,1,0,0,0,1.4-.14l1.27-1.55a1,1,0,0,0-.15-1.41ZM52,52h0L40,52V36a2,2,0,0,0-2-2L26,34a2,2,0,0,0-2,2h0V52H12V20.31L32,4,52,20.31Z"
                  />
                </svg>
              </i>
              <span className="item-name">{t("Home")}</span>
            </div>
          </Link>
        </Accordion.Item>
      </Accordion>

    </>
  );
};

export default VerticalNav;

import React from "react";
// import React, { useContext } from 'react'
import { Accordion } from "react-bootstrap";
// import { Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap'
// import { Accordion, useAccordionButton, AccordionContext, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// function CustomToggle({ children, eventKey, onClick }) {

//     const { activeEventKey } = useContext(AccordionContext);

//     const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

//     const isCurrentEventKey = activeEventKey === eventKey;

//     return (
//         <Link style={{ textDecoration: 'none' }} to="/" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button"
//             onClick={(e) => {
//                 decoratedOnClick(isCurrentEventKey)
//             }}>
//             {children}
//         </Link>
//     );
// }
const VerticalNav = () => {
  const { t } = useTranslation();
  let location = useLocation();
  return (
    <>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
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
        <Accordion.Item
          as="li"
          className="mb-1"
          eventKey="horizontal-menu"
          bsPrefix="nav-item"
        >
          <Link style={{ textDecoration: "none" }} to="/collocations">
            <div
              className={`${location.pathname === "/collocations" ? "active" : ""
                } nav-link`}
            >
              <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                  viewBox="0 0 48 64">
                  <path fill="currentColor"
                    d="M42,8H30.92A6.53,6.53,0,0,0,31,7,7,7,0,0,0,17,7a5.47,5.47,0,0,0,.08,1H6a6,6,0,0,0-6,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V14A6,6,0,0,0,42,8ZM24,4a3,3,0,1,1-3,3A3,3,0,0,1,24,4ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h6v2.5A1.51,1.51,0,0,0,13.5,16h21A1.5,1.5,0,0,0,36,14.5V12h6a2,2,0,0,1,2,2ZM14,41a3,3,0,1,0,3,3A3,3,0,0,0,14,41Zm21,1H21a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V43A1,1,0,0,0,35,42ZM15.77,33.8l8-7.95a.68.68,0,0,0,0-1l-1.58-1.59a.68.68,0,0,0-.95,0l-5.95,5.9L12.75,26.6a.68.68,0,0,0-.95,0l-1.59,1.57a.69.69,0,0,0,0,1l4.64,4.67A.64.64,0,0,0,15.77,33.8ZM35,30H25.3l-4,4H35a1,1,0,0,0,1-1V31A1,1,0,0,0,35,30Z" />

                </svg>
              </i>
              <span className="item-name">{t("Collocations")}</span>
            </div>
          </Link>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default VerticalNav;

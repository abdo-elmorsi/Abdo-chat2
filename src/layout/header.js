import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../lib/slices/toggleSidebar";
import { toggleHead } from "../lib/slices/toggle-header";
import { darkMode } from "../lib/slices/config";
import Styles from "../styles/WidgetMenu.module.scss";

// Translation
import i18next from "i18next";
import Cookies from "js-cookie";
import { SinOut } from "../lib/slices/auth";

const languages = [
  {
    key: "222",
    code: "en",
    text: "English",
    name: "English",
    country_code: "gb",
  },
  {
    key: "111",
    code: "ar",
    text: "Arabic",
    dir: "rtl",
    country_code: "ar",
    name: "Arabic",
  },
];

const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth)
  const config = useSelector((state) => state.config);
  const { ToggleHeader } = useSelector((state) => state);
  const [showLang, setShowLang] = useState(false);

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const handleSignOut = (e) => {
    e.preventDefault();
    Cookies.remove("User");
    dispatch(SinOut())
  };
  useEffect(
    (_) => {
      config?.darkMode
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
      document.body.dir = currentLanguage?.dir || "ltr";
    },
    [dispatch, config.darkMode, currentLanguage?.dir]
  );
  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        className="nav iq-navbar py-1 py-xl-2"
      >
        <Container fluid className="navbar-inner">
          <div
            className="navbar-brand mx-5"
            style={{ backgroundColor: `${currentLanguage.code === "ar" && "transparent"}`, }}
          >
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              style={{
                enableBackground: "new 0 0 30 30",
                width: "24px",
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
            <span style={{ color: `${config.darkMode ? "#bfc9e3" : "#232d42"}` }} className={'ms-2'}>Abdo chat</span>
          </div>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={() => dispatch(toggle())}
          >
            <i className="icon">
              <svg width="20px" viewBox="0 0 23 27">
                <path
                  fill="currentColor"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </i>
          </div>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            style={{
              boxShadow: "none",
              borderColor: "transparent",
              marginTop: "10px",
            }}
          >
            <div
              onClick={() => dispatch(toggleHead())}
              style={{
                left: currentLanguageCode === "ar" && "1rem",
                right: currentLanguageCode === "ar" && "auto",
                height: "auto",
              }}
              className={`${Styles.hamburger} ${ToggleHeader.value && Styles.active
                } shadow-none
                            ${config?.darkMode ? "bg-transparent" : ""}`}
            >
              <span
                className={`${Styles.hamburger__patty} ${config?.darkMode ? "bg-white" : ""
                  }`}
              />
              <span
                className={`${Styles.hamburger__patty} ${config?.darkMode ? "bg-white" : ""
                  }`}
              />
              <span
                className={`${Styles.hamburger__patty} ${config?.darkMode ? "bg-white" : ""
                  }`}
              />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navbarSupportedContent"
            className={`${ToggleHeader.value && "show"}`}
          >
            <Nav
              as="ul"
              style={{ float: currentLanguageCode === "ar" && "left" }}
              className="ms-auto navbar-list my-2 my-lg-0 d-flex align-items-stretch"
            >
              <Dropdown as="li" className="nav-item d-flex align-items-center">
                <button
                  onClick={() => dispatch(darkMode())}
                  className="bg-transparent border-0 mx-2"
                >
                  {config?.darkMode ? (
                    <div className="moon">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 499.712 499.712"
                        width="22"
                      >
                        <path
                          fill="#FFD93B"
                          d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
	C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
	C39.744,355.368,90.944,375.528,146.88,375.528z"
                        />
                        <path
                          fill="#F4C534"
                          d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256
	c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256
	C499.712,162.12,461.392,89.64,401.92,42.776z"
                        />
                        <g>
                          <polygon
                            fill="#FFD83B"
                            points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296
		128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4 	"
                          />
                          <polygon
                            fill="#FFD83B"
                            points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984
		276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552 	"
                          />
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="sun">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 512 512"
                        width="22"
                      >
                        <g>
                          <circle
                            fill="#FFD347"
                            cx="255.997"
                            cy="255.997"
                            r="144.824"
                          />
                          <path
                            fill="#FFD347"
                            d="M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0
		s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z"
                          />
                          <path
                            fill="#FFD347"
                            d="M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C155.206,84.234,153.876,84.568,152.563,84.568z"
                          />
                          <path
                            fill="#FFD347"
                            d="M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C82.097,158.907,79.497,160.294,76.823,160.294z"
                          />
                          <path
                            fill="#FFD347"
                            d="M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z"
                          />
                          <path
                            fill="#FFD347"
                            d="M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C43.648,387.535,42.317,387.869,41.005,387.869z"
                          />
                          <path
                            fill="#FFD347"
                            d="M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C137.136,477.352,134.536,478.74,131.862,478.74z"
                          />
                          <path
                            fill="#FFD347"
                            d="M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737
		s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z"
                          />
                          <path
                            fill="#FFD347"
                            d="M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C382.781,478.406,381.451,478.74,380.138,478.74z"
                          />
                          <path
                            fill="#FFD347"
                            d="M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C476.269,386.481,473.669,387.869,470.995,387.869z"
                          />
                          <path
                            fill="#FFD347"
                            d="M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z"
                          />
                          <path
                            fill="#FFD347"
                            d="M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C437.82,159.96,436.489,160.294,435.177,160.294z"
                          />
                          <path
                            fill="#FFD347"
                            d="M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C364.711,83.181,362.11,84.568,359.437,84.568z"
                          />
                        </g>
                        <path
                          fill="#FFBE31"
                          d="M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991
	s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82
	S335.983,111.18,256,111.18z"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </Dropdown>
              <Dropdown as="li" className="nav-item d-flex align-items-center">
                {currentLanguageCode === "ar" ? (
                  <button
                    className={`border-0 bg-transparent ${config?.darkMode ? "text-white" : ""
                      }`}
                    name="en"
                    onClick={() => {
                      i18next.changeLanguage("en");
                      setShowLang(!showLang);
                    }}
                  >
                    <Image
                      name="en"
                      src={"https://flagcdn.com/us.svg"}
                      width={27}
                      alt="en"
                    />
                  </button>
                ) : (
                  <button
                    className={`border-0 bg-transparent ${config?.darkMode ? "text-white" : ""
                      }`}
                    name="ar"
                    onClick={() => {
                      i18next.changeLanguage("ar");
                      setShowLang(!showLang);
                    }}
                  >
                    <Image
                      name="ar"
                      src={"https://flagcdn.com/sa.svg"}
                      width={27}
                      alt="ar"
                    />
                  </button>
                )}
              </Dropdown>
              <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                  className={config?.darkMode && "text-white"}
                  variant="nav-link py-1 d-flex align-items-center"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src={`/assets/images/${user?.profile_picture}.png`}
                    width={40}
                    alt="User-Profile"
                    className="img-fluid avatar avatar-rounded avatar-rounded"
                  />
                  <div className="caption ms-3 d-none d-md-block">
                    <h6 className="mb-0 caption-title">
                      {user?.Name?.split("").slice(0, 11)}
                    </h6>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu-end shadow position-absolute"
                  style={{ top: "94%" }}
                  aria-labelledby="navbarDropdown"
                >
                  <Dropdown.Item
                    as={"button"}
                    onClick={handleSignOut}
                    className="px-0"
                  >
                    <div className="d-flex justify-content-around ">
                      <span>Logout</span>
                      <svg
                        width="18px"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="sign-out-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-sign-out-alt fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
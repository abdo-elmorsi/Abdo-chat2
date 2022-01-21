import React, { useEffect, useState } from "react";
import { Accordion, Form, Image } from "react-bootstrap";

import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "../firebase"
import { useSelector } from "react-redux";

const VerticalNav = () => {
  const db = getDatabase();
  const { user } = useSelector(state => state.auth);

  const [userChat, setuserChat] = useState();
  const [Users, setUsers] = useState({
    data: [],
    ids: []
  });

  // Filter
  const [Data, setData] = useState([]);
  const [filter, setfilter] = useState("");

  useEffect(() => {
    onValue(ref(db, '/users'), (snapshot) => {
      const newReading = snapshot.val();
      setUsers({
        data: [...Object.values(newReading || {})],
        ids: [...Object.keys(newReading || {})]
      })
    })
  }, [db])

  // handle filter
  useEffect(() => {
    const newData = Users?.data?.filter((item) => item?.Name?.toString().toLowerCase().includes(filter?.toLowerCase()) || false);
    setData(newData);
  }, [Users?.data, filter]);
  return (
    <>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <Accordion.Item
          as="li"
          className="mb-2"
          eventKey="horizontal-menu"
          bsPrefix="nav-item"
        >
          <Form.Control
            value={filter}
            onChange={(e) => setfilter(e.target.value)}
            className="form-control px-3" type="search"
            placeholder="name..." aria-label="Search"
          />
        </Accordion.Item>


        {Data && (Data?.map((ele, i) => {
          if (Users?.ids[i] === user?.id) {
            return false;
          }
          return (
            <Accordion.Item
              key={Users?.ids[i]}
              onClick={() => setuserChat(Users?.ids[i])}
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
              style={{ cursor: "pointer" }}
            >
              <div className={`text-center ${userChat === Users.ids[i] ? "active" : ""} nav-link`}>
                <i className="icon">
                  <Image
                    src={`/assets/images/${ele?.profile_picture}.png`}
                    width={24}
                    alt="User-Profile"
                    className="rounded"
                  />
                </i>
                <span className="item-name text-start">{ele?.Name}</span>
              </div>
            </Accordion.Item>
          )
        })
        )}

      </Accordion>

    </>
  );
};

export default VerticalNav;


import { Col, Row, Avatar, Button } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  ArrowLeftOutlined,
  SearchOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Datashow from "./Datashow";

const { Search } = Input;

const AppA = () => {
  const [contacts, setContacts] = useState([
    {
      id: 0,
      img: " krishna.jpg",
      name: "john smith",
      desc: "abd@gmail.com",
      isselected: false,
    },
    {
      id: 1,
      img: "/krishna.jpg",
      name: "clara",
      desc: "abd@gmail.com",
      isselected: false,
    },
    {
      id: 2,
      img: "/krishna.jpg",
      name: "andrew",
      desc: "abd@gmail.com",
      isselected: false,
    },
    {
      id: 3,
      img: "./krishna.jpg",
      name: "mosko",
      desc: "abd@gmail.com",
      isselected: false,
    },
    {
      id: 4,
      img: "./krishna.jpg",
      name: "anderson",
      desc: "abd@gmail.com",
      isselected: false,
    },
    {
      id: 5,
      img: "./krishna.jpg",
      name: "john ",
      desc: "abd@gmail.com",
      isselected: false,
    },
  ]);

  const [query, setQuery] = useState("");
  // const [allData, setAllData] = useState(contacts);

  // const Search = (data) => {
  //   return data.filter((user) => {
  //     user.name.includes(contacts);
  //   });
  // };

  const btnClick = (e) => {
    // console.log(e.target.id);
    let newdata = [{}];
    newdata = contacts.map((elem) => {
      if (elem.id.toString() === e.target.id) {
        const isselected = !elem.isselected;
        return { ...elem, isselected };
      } else {
        return elem;
      }
    });

    console.log(newdata);
    setContacts(newdata);
  };

  // const [displaydata, setDisplayData] = useState();

  const displayClick = (e) => {
    const newArray = contacts.map((elem) => {
      if (elem.isselected === true) {
        {
          const displaydata = elem.name;
          return displaydata;
        }
      }
    });
    console.log(newArray);
    alert(newArray);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(setQuery);
  };
  const filteredData = contacts.filter((el) => {
    if (query === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(query);
    }
  });

  return (
    <>
      <div>
        <Row
          style={{
            backgroundColor: "#3f84e1",
            fontSize: "30px",
            color: "white",
          }}
        >
          <Col span={1}>
            <ArrowLeftOutlined
              style={{ float: "left", margin: "auto", padding: "25px" }}
            />
          </Col>
          <Col span={18}>
            <span>Add Partticipants</span>
            <br />
            <span
              style={{
                fontSize: "15px",
                verticalAlign: "text-top",
              }}
            >
              50 Contacts
            </span>
          </Col>
          <Col span={5}>
            <Search
              // DafaultValue=""
              placeholder="search contacts"
              enterButton
              style={{
                float: "right",
                margin: "auto",
                padding: "25px",
              }}
              onChange={(e) => handleSearch(e)}
            />
          </Col>

          {/* <Col span={2}>
            <SearchOutlined
              style={{ float: "right", margin: "auto", padding: "25px" }}
            />
          </Col> */}
        </Row>
      </div>

      <Datashow
        contacts={contacts}
        btnClick={btnClick}
        query={query}
        filteredData={filteredData}
      />

      <br />
      <div className="subbtn">
        <div className="subdiv">
          <Button
            className="submitbtn"
            size="large"
            type="primary"
            style={{ float: "right", margin: "20px" }}
            onClick={displayClick}
          >
            Display Data
          </Button>
        </div>
      </div>
    </>
  );
};

export default AppA;

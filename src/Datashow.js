import React, { useState } from "react";
import { Col, Row } from "antd";
import { Avatar, Button } from "antd";

const Datashow = ({ contacts, btnClick, query, filteredData }) => {
  return (
    <>
      <div>
        {filteredData.map((elem) => {
          return (
            <>
              <Row>
                <Button
                  type="text"
                  id={elem.id}
                  key={elem.id}
                  block
                  style={{
                    margin: "auto",
                    padding: "10px",
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={(event) => {
                    btnClick(event);
                  }}
                  className={elem.isselected ? "bgcolor" : "nonebg"}
                >
                  <div>
                    <Row
                      key={elem.id}
                      style={{ margin: "auto", padding: "10px" }}
                    >
                      <Col span={2}>
                        <Avatar
                          size={64}
                          src={elem.img}
                          style={{ margin: "auto 20px", float: "right" }}
                        />
                      </Col>
                      <Col span={22}>
                        <Row
                          style={{
                            fontSize: "20px",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                          }}
                        >
                          {elem.name} {elem.isselected}
                          {elem.id}
                        </Row>
                        <Row> {elem.desc}</Row>
                      </Col>
                    </Row>
                  </div>
                </Button>
              </Row>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Datashow;

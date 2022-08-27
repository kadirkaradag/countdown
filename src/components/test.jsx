/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import React from "react";
import { useState, useRef, useEffect } from "react";
import moment from "moment";

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  font-size: 22px;
  border: 1px solid whitesmoke;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
`;

const Test = () => {
  const [date, setDate] = useState(() => {
    const localDate = localStorage.getItem("date");
    return localDate
      ? moment(JSON.parse(localDate))
      : moment().add(10, "hours");
  });

  const [hour, setHour] = useState("...");
  const [minute, setMinute] = useState("...");
  const [second, setSecond] = useState("...");

  let interval = useRef();

  useEffect(() => {
    startCount();
    return clearInterval(interval.current);
  }, []);

  const startCount = () => {
    interval = setInterval(() => {
      localStorage.setItem("date", JSON.stringify(date));
      const now = moment();
      const distance = date - now;

      const a = moment.duration(distance).hours();
      const b = moment.duration(distance).minutes();
      const c = moment.duration(distance).seconds();
      console.log("distance", distance);
      if (distance < 0) {
        setDate(moment().add(10, "hours"));
        clearInterval(interval);
      } else {
        setHour(a);
        setMinute(b);
        setSecond(c);
      }
    }, 1000);
  };
  return (
    <Counter>
      <div>
        <p>
          <Title>{hour}</Title>
        </p>
        <p>
          <small>Saat</small>
        </p>
      </div>
      <div>
        <p>
          <Title>{minute}</Title>
        </p>
        <p>
          <small>Dakika</small>
        </p>
      </div>
      <div>
        <p>
          <Title>{second}</Title>
        </p>
        <p>
          <small>Saniye</small>
        </p>
      </div>
    </Counter>
  );
};

export default Test;

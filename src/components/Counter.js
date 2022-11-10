import React from "react";
import {Divider} from "antd";

function Counter() {
  return (
      <div>
        <h3>Sending info</h3>
        <Divider/>
        <div className="total-count">
          <h3>0</h3>
          <p>Total email count</p>
        </div>
        <Divider/>
        <div className="feedback-count">
          <span>Customer count</span>
          <span>0</span>
        </div>
        <Divider/>
        <div className="feedback-count">
          <span>Feedback balance</span>
          <span>9985</span>
        </div>
      </div>
  );
}

export default Counter;
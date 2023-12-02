import React from "react";
import "./MemorySet.css";

const MemorySet = () => {
  return (
    <div className="memory">
      <div className="memory-set left">
        <div className="up">
          <span>5</span>
          <span>4</span>
          <span>3</span>
          <span>2</span>
          <span>1</span>
        </div>
        <div className="down">
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
      <div className="memory-set-cero">
        <span>0</span>
      </div>
      <div className="memory-set right">
        <div className="up">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <div className="down">
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
};

export default MemorySet;

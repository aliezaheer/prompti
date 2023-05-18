"use client";

import { useState } from "react";

const Feed = () => {
  const [num, setNum] = useState(0);

  const changeHandler = () => {
    setNum(num + 2);
  };

  const changeHandlerClear = () => {
    setNum(0);
  };

  return (
    <div>
      <h2>Api ChatGPT</h2>
      <p>{num}</p>

      <button className="bg-orange-500 p-3 rounded-md" onClick={changeHandler}>
        Testing API
      </button>
      <br />
      <br />
      <button
        className="bg-orange-500 p-3 rounded-md"
        onClick={changeHandlerClear}
      >
        Clear State
      </button>
    </div>
  );
};

export default Feed;

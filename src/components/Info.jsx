import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { HiMail } from "react-icons/hi";

export default function Info() {
  return (
    <>
      <div className="flex">
        <div className="info">
          <h1>Paolo Joseph</h1>
          <h4>Full-stack Developer</h4>
          <p>artslime.dev</p>
          <div className="btns">
            <button className="btn">
              <HiMail className="icon" />
              Email
            </button>
            <button className="btn">
              <GrLinkedin className="icon" />
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// const Info = () => {
//   return (

//   );
// };

// export default Info;

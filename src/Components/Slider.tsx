import "./slider.scss";
import { FaBars } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LuMessageSquare } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
const Slider = () => {
  const [sliderClose, setSliderClose] = useState<boolean>(true);
  const arr = new Array(20).fill(1);
  const sliderHander = () => {
    setSliderClose((prev) => !prev);
  };
  return (
    <div className="slider"
    style={{width:sliderClose?"100px":"auto"}}
    >
      <div className="slider_head">
        <FaBars onClick={sliderHander} />
        <button
         style={{width:sliderClose?"50px":"auto"}}
        >
          <FiPlus /> {!sliderClose ? <span className="text_btn" >New Chat</span> : ""}
        </button>
      </div>

      {!sliderClose ? (
        <div className="slider_tasks">
          <p>Recent</p>
          <div className="tasks">
            {arr.map((v, i) => (
              <Link to={"/"} key={i}>
                <LuMessageSquare />
                <span>React data .</span>
                <BsThreeDotsVertical className="hide" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {!sliderClose ? (
        <div className="slider_bottom">
          <ul>
            <li>
              <IoMdHelpCircleOutline />
              <p>Help</p>{" "}
            </li>
            <li>
              <IoMdTime />
              <p>Activity</p>{" "}
            </li>
            <li>
              <IoSettingsOutline />
              <p>Setting</p>{" "}
            </li>
          </ul>
          <button>
            <FaStar />
            <p> Upgrade to Gemini Advance</p>{" "}
          </button>
          <p className="para">New Delhi, Delhi, India </p>
          <span className="active">From your IP address • Update location</span>
        </div>
      ) : (
        <div className="sliderActive">
          <ul>
            <li>
              {" "}
              <IoMdHelpCircleOutline />
            </li>
            <li>
              {" "}
              <IoMdTime />
            </li>
            <li>
              {" "}
              <IoSettingsOutline />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Slider;

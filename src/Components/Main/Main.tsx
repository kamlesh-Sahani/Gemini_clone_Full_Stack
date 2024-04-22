import "./main.scss";
import { CgProfile } from "react-icons/cg";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeminiResult, getResult } from "../../Redux/Slice/Reducer";
import { AppDispatch, RootType } from "../../Redux/Strore";
import Loader from "../Loader/Loader";

const Main = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [heading,setHeading] = useState<string>("");
  const { loading, result, showResult } = useSelector(
    (state: RootType) => state.geminiSlice
  );
  const dispatch = useDispatch<AppDispatch>();
  const promptHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(fetchGeminiResult({ prompt }));
    dispatch(getResult());
    setHeading(prompt);
    setPrompt("");
  };

  return (
    <div className="main">
      <div className="main_head">
        <p>Gemini</p>
        <CgProfile className="profile" />
      </div>

      {
        (!showResult && !loading && (
          <div className="main_mid">
            <div className="title">
              <p className="title_para">
                <span>Hello, Developer</span>
              </p>
              <p className="title_para">How can I help you today?</p>
            </div>
            <div className="box">
              <div>
                <p>improve the readability of the following code</p>
                <IoCodeSlashSharp />
              </div>
              <div>
                <p>Give me tips to help care for a tricky plant</p>
                <FaRegCompass />
              </div>
              <div>
                <p>
                  Help me craft a text response to my friend who is stressed at
                  work
                </p>
                <FaPencilAlt />
              </div>
              <div>
                <p>
                  Show me flights to Tokyo and give me ideas of things to do.
                  How about Seoul too?
                </p>
                <MdFlight />
              </div>
            </div>
          </div>
        ))}

      {loading ? (
       <Loader />
      ) : (
        showResult &&
        <div className="result">
          <div className="result_title">
            <img src="p.jpg" className="profile" />
            <p>{heading}</p>
          </div>

          <div className="result_para">
            <img src="geminiIcon.jpg" alt="" />
            <div dangerouslySetInnerHTML={{ __html:result!} }/>
          </div>
        </div>
      )}

      <div className="main_bottom">
        <form onSubmit={promptHandler}>
          <input
            name="promp"
            placeholder="Enter a prompt here"
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
          />
          <button type="submit">
          <FiSend className="submit"/>
          </button>
        
        </form>
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Main;

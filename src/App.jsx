import { useState } from "react";

import IconStar from "./assets/icon-star.svg";
import IllustrationThankYou from "./assets/illustration-thank-you.svg";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full h-screen bg-[#141519] flex justify-center items-center">
      <div
        className={`bg-[#1E252F] w-[325px] h-[360px] rounded-2xl flex flex-col font-[Overpass] ${
          !submitted ? "justify-between" : "items-center justify-around"
        } py-7 px-[23px]`}
      >
        {!submitted ? (
          <>
            {/*Star image*/}
            <div className="bg-[#262f38] w-fit p-[13px] rounded-full ml-[1px] -mt-1">
              <img src={IconStar} alt="Star" className="w-[14px] h-[14px]" />
            </div>

            {/*Title*/}
            <h1 className="text-white text-[24px] -mt-[7px] font-bold">
              How did we do?
            </h1>

            {/*Paragraph*/}
            <p className="text-[14px] text-[#7C8798] relative bottom-3">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            {/*Buttons*/}
            <div className="flex justify-around gap-[19px] mb-[5px]">
              <div className="rounded-full text-[#7C8798] bg-[#262f38]">
                <button
                  className="px-[17px] py-2 text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white"
                  onClick={() => setRating(1)}
                >
                  1
                </button>
              </div>
              <div className="rounded-full text-[#7C8798] bg-[#262f38]">
                <button
                  className="px-[17px] py-2 text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white"
                  onClick={() => setRating(2)}
                >
                  2
                </button>
              </div>
              <div className="rounded-full text-[#7C8798] bg-[#262f38]">
                <button
                  className="px-[17px] py-2 text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white"
                  onClick={() => setRating(3)}
                >
                  3
                </button>
              </div>
              <div className="rounded-full text-[#7C8798] bg-[#262f38]">
                <button
                  className="px-[17px] py-2 text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white"
                  onClick={() => setRating(4)}
                >
                  4
                </button>
              </div>
              <div className="rounded-full text-[#7C8798] bg-[#262f38]">
                <button
                  className="px-[17px] py-2 text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white"
                  onClick={() => setRating(5)}
                >
                  5
                </button>
              </div>
            </div>

            {/*Submit*/}
            <button
              onClick={() => setSubmitted(true)}
              className="bg-[#FB7413] text-[14px] tracking-[0.15em] font-bold text-white py-3 rounded-3xl relative bottom-1 hover:bg-white hover:text-[#FB7413]"
            >
              SUBMIT
            </button>
          </>
        ) : (
          <>
            {/*Illustration image*/}
            <div className="relative bottom-2">
              <img
                src={IllustrationThankYou}
                alt="Thank you"
                className="scale-90"
              />
            </div>

            {/*Rating*/}
            <div className="text-[#FB7413] text-[15px] rounded-3xl bg-[#232C39] px-[14px] py-[7px] font-[400]">
              <span className="relative top-[2px] block">
                You selected {rating} out of 5
              </span>
            </div>

            {/*Thank you*/}
            <h1 className="text-white font-bold text-[23.5px] mt-3 ">
              Thank you!
            </h1>

            <p className="text-[#7C8798] text-center text-[14px] relative bottom-1">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";

import IconStar from "./assets/icon-star.svg";
import IllustrationThankYou from "./assets/illustration-thank-you.svg";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full h-screen bg-[#141519] flex justify-center items-center">
      <div
        className={`bg-[#1E252F] w-[325px] h-[360px] md:w-[410px] md:h-[415px] md:rounded-[30px] rounded-2xl flex flex-col font-[Overpass] ${
          !submitted ? "justify-between" : "items-center justify-around"
        } pt-7 pb-9 px-[23px] md:px-[30px]`}
      >
        {!submitted ? (
          <>
            {/*Star image*/}
            <div className="bg-[#262f38] w-fit p-[13px] rounded-full ml-[1px] -mt-1 md:mt-3">
              <img
                src={IconStar}
                alt="Star"
                className="w-[14px] h-[14px] md:w-[17px] md:h-[17px]"
              />
            </div>

            {/*Title*/}
            <h1 className="text-white text-[24px] md:text-[29px] font-bold md:font-[400]">
              How did we do?
            </h1>

            {/*Paragraph*/}
            <p className="text-[14px] text-[#7C8798] relative bottom-3 md:text-[15px] md:bottom-[11px]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            {/*Buttons*/}
            <div className="flex justify-around gap-[22px] md:gap-[10px]">
              <button
                className="text-[#7C8798] w-[38px] h-[38px] bg-[#262f38] text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white md:text-[15px] md:w-[48px] md:h-[48px] md:font-bold"
                onClick={() => setRating(1)}
              >
                1
              </button>
              <button
                className="text-[#7C8798] w-[38px] h-[38px] bg-[#262f38] text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white md:text-[15px] md:w-[48px] md:h-[48px] md:font-bold"
                onClick={() => setRating(2)}
              >
                2
              </button>
              <button
                className="text-[#7C8798] w-[38px] h-[38px] bg-[#262f38] text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white md:text-[15px] md:w-[48px] md:h-[48px] md:font-bold"
                onClick={() => setRating(3)}
              >
                3
              </button>
              <button
                className="text-[#7C8798] w-[38px] h-[38px] bg-[#262f38] text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white md:text-[15px] md:w-[48px] md:h-[48px] md:font-bold"
                onClick={() => setRating(4)}
              >
                4
              </button>
              <button
                className="text-[#7C8798] w-[38px] h-[38px] bg-[#262f38] text-[14px] focus:bg-[#FB7413] focus:text-white rounded-full hover:bg-[#7C8798] hover:text-white md:text-[15px] md:w-[48px] md:h-[48px] md:font-bold"
                onClick={() => setRating(5)}
              >
                5
              </button>
            </div>

            {/*Submit*/}
            <button
              onClick={() => setSubmitted(true)}
              className="bg-[#FB7413] text-[14px] tracking-[0.15em] font-bold text-white py-[10px] rounded-3xl relative top-2 hover:bg-white hover:text-[#FB7413] md:text-[16px] md:top-1"
            >
              SUBMIT
            </button>
          </>
        ) : (
          <>
            {/*Illustration image*/}
            <div className="relative bottom-4 md:top-2">
              <img
                src={IllustrationThankYou}
                alt="Thank you"
                className="scale-90 md:scale-[0.98]"
              />
            </div>

            {/*Rating*/}
            <div className="text-[#FB7413] text-[15px] rounded-3xl bg-[#232C39] px-[14px] py-[7px] font-[400] md:relative md:top-5 md:px-[22px]">
              <span className="relative top-[2px] block">
                You selected {rating} out of 5
              </span>
            </div>

            {/*Thank you*/}
            <h1 className="text-white font-bold text-[23.5px] mt-3 md:text-[27px] md:relative md:top-3">
              Thank you!
            </h1>

            <p className="text-[#7C8798] text-center text-[14px] relative bottom-1 md:text-[15.5px] md:top-[2px]">
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

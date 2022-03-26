import IconStar from "./assets/icon-star.svg";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#141519] flex justify-center items-center">
      <div className="bg-[#1E252F] w-[325px] h-[360px] rounded-2xl flex flex-col font-[Overpass] justify-between py-7 px-[23px]">
        {/*Star*/}
        <div className="bg-[#262f38] w-fit p-[13px] rounded-full ml-[1px] -mt-1">
          <img src={IconStar} alt="Star" className="w-[14px] h-[14px]" />
        </div>

        {/*Title*/}
        <h1 className="text-white text-[24px] -mt-[7px] font-bold">
          How did we do?
        </h1>

        {/*Paragraph*/}
        <p className="text-[14px] text-[#7C8798] relative bottom-3">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        {/*Buttons*/}
        <div className="flex justify-around gap-[19px] mb-[5px]">
          <div className="rounded-full text-[#7C8798] bg-[#262f38]">
            <button className="px-[17px] py-2 text-[14px]">1</button>
          </div>
          <div className="rounded-full text-[#7C8798] bg-[#262f38]">
            <button className="px-[17px] py-2 text-[14px]">2</button>
          </div>
          <div className="rounded-full text-[#7C8798] bg-[#262f38]">
            <button className="px-[17px] py-2 text-[14px]">3</button>
          </div>
          <div className="rounded-full text-[#7C8798] bg-[#262f38]">
            <button className="px-[17px] py-2 text-[14px]">4</button>
          </div>
          <div className="rounded-full text-[#7C8798] bg-[#262f38]">
            <button className="px-[17px] py-2 text-[14px]">5</button>
          </div>
        </div>

        {/*Sumbit*/}
        <button className="bg-[#fb7413] text-[14px] tracking-[0.15em] font-bold text-white py-3 rounded-3xl relative bottom-1 ">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default App;

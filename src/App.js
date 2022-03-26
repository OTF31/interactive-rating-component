import IconStar from "./assets/icon-star.svg";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#121417] flex justify-center items-center">
      <div className="bg-[#252D37] w-[325px] h-[360px] rounded-2xl flex flex-col font-[Overpass]">
        {/*Star*/}
        <div>
          <img src={IconStar} alt="Star" />
        </div>

        {/*Title*/}
        <h1>How did we do?</h1>

        {/*Paragraph*/}
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        {/*Buttons*/}

        {/*Sumbit*/}
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default App;

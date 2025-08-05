import CarouselOne from "../SecondHome/SecondBlockCar/CarouselOne";
import SecondBlock from "../SecondHome/SecondBlockCar/SecondBlock";
import ThirdBlock from "../SecondHome/ThirdBlock/ThirdBlock";
import FirstBlock from "./../SecondHome/FirstBlock/FirstBlock";

const Header = () => {
  return (
    <div>
      <div>
        <FirstBlock />
      </div>
      <div>
        <SecondBlock />
      </div>
      <div>
        <ThirdBlock />
      </div>
    </div>
  );
};

export default Header;

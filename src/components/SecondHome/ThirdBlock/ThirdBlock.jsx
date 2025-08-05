import "../styles/animation.css";
import AppDetail from "./AppDetail";
import ClientAbout from "./ClientAbout";
import MenuCard from "./MenuCard";

function ThirdBlock() {
  return (
    <div>
      <div className="bg-[#f9f4f4]">
        <div className="bg-[#f9f4f4]">
          <MenuCard />
        </div>
        <div className="bg-[#f9f4f4]">
          <ClientAbout />
        </div>
      </div>
      <div className="bg-[#E9004B]">
          <AppDetail />
        </div>
    </div>
  );
}

export default ThirdBlock;

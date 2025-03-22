import Logo from "../assets/Logo.png";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      مذكرة المهام
      <img src={Logo} alt="" />
    </header>
  );
};

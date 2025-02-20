import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to={"/"}>FAST PIZZA CO.</Link>
      <SearchOrder />
      <h1>Haseeb</h1>
    </header>
  );
}

export default Header;

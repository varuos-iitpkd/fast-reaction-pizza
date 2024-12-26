import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-serif flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-semibold tracking-widest">
        Fast React Pizza Co.
      </Link>
      <div className="flex items-center justify-between gap-8">
        <SearchOrder></SearchOrder>
        <Username></Username>
      </div>
    </header>
  );
}

export default Header;

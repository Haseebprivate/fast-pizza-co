import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-400 bg-yellow-500 p-4 px-4 py-3 uppercase sm:py-6">
      <Link to={'/'} className="tracking-widest">
        FAST PIZZA CO.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

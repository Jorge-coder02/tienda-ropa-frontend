import { Link } from "react-router-dom";
const ItemEnlace = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative block px-8 before:content-[attr(data-text)] before:font-semibold before:block 
      before:h-0 before:overflow-hidden before:invisible text-gray-600 hover:text-black"
      data-text={children}
    >
      {children}
    </Link>
  );
};

export default ItemEnlace;

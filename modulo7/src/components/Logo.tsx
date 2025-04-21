import { Link } from "react-router-dom";
function Logo() {
  return <>
    <Link to="/">
      <img src="/logazo.webp" alt="logo"
        className="size-24
    md:size-35 "
      />
    </Link>
  </>
}

export default Logo;
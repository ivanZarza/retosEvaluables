import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";


function GreekComponent() {

  const { user } = useContext(UserContext); 
console.log('user', user);
    return (
        <div className=" flex flex-col justify-center items-center">
          <img src={user?.photo} alt="" className="rounded-full w-13 h-13" />
          <span className="text-2xl text-[#3640fd]">{user?.name}</span>
        </div>
    );
}

export default GreekComponent;
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";


function GreekComponent() {

  const { user } = useContext(UserContext); 
console.log('user', user);
    return (
        <div className=" flex flex-col justify-center items-center  bg-transparent backdrop-blur-lg">
          <img src={user?.photo} alt="" className="rounded-full w-15 h-15
                                                    md:w-7 md:h-7" />
          <span className="text-2xl md:text-lg text-[#3640fd]">{user?.name}</span>
        </div>
    );
}

export default GreekComponent;
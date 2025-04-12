import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";


function GreekComponent() {

  const { user } = useContext(UserContext); 
console.log('user', user);
    return (
        <div className="w-20 flex flex-col items-end">
          <img src={user?.photo} alt="" className="rounded-bl-full" />
          <span className="text-2xl">{user?.name}</span>
        </div>
    );
}

export default GreekComponent;
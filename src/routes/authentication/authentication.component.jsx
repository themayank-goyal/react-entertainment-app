import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Authentication = () => {
  const {handleGoogleClick, currentUser} = useContext(AppContext);
  return <div className="authentication-container">
    <div className="sign flex justify-center items-center">
      {
        !currentUser ? 
        <button className="text-3xl text-white bg-red-700 p-4 rounded-md" type="button" onClick={handleGoogleClick}>Google Sign In</button>
        : <div className="flex flex-col gap-8 w-1/3">
          <p className="text-white rounded-md bg-blue-600 p-4 text-3xl text-center">{currentUser.displayName}</p>
          <p className="text-white rounded-md bg-blue-600 p-4 text-3xl text-center">{currentUser.email}</p>
          <p className="text-white rounded-md bg-blue-600 p-4 text-3xl text-center">{currentUser.displayName}</p>
          <button className="p-4 rounded-md text-3xl bg-red-600 text-white">Sign Out</button>
        </div>
      }      
    </div>
  </div>;
};

export default Authentication;

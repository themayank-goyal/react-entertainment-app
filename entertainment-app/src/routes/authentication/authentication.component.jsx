import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Authentication = () => {
  const {handleGoogleClick} = useContext(AppContext);

  return <div className="authentication-container">
    <div className="sign">
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button type="Submit">Sign In</button>
        <button type="button" onClick={handleGoogleClick}>Google Sign In</button>
      </form>
    </div>
  </div>;
};

export default Authentication;

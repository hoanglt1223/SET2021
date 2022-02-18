import React, { useState, useEffect } from "react";
import Button from "./user/button";
import {Link} from "react-router-dom"
function Header(props) {
    
  const [isLogin, setLogin] = useState(true)
  const [isRemembered, setRemember] = useState(true)

    

    function handleReturn() {
      window.location.href = "/admin/";
    }

    function handleLogout() {
      setLogin(false);
      setRemember(false);
    }


    return (
      <React.Fragment>
        {/* //===== return to admin */}
        <div className="userManager__header-left">
          <Link>
              <Button
                titleValue="Return"
                id="return__button"
                handleOnClick={handleReturn}
              />
        </Link>
        </div>

            {/* =======title*/}
        <div className = "userManager__header-middle">
          <span className ="userManager__header-title">User management</span>
        </div>

              {/* //=======logout button */}
        <div className="userManager__header-right">
          <Link to = "/">
            <Button
                    titleValue="Log out"
                    id="logout__button"
                    handleOnClick={handleLogout}
            />
          </Link>
        </div>  
      </React.Fragment>
    )
    
}

export default Header
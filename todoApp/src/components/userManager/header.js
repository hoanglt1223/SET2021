import React, { useState, useEffect } from "react";
import Button from "../user/button/button";

function Header(props) {
    
  const [isLogin, setLogin] = useState(true)
  const [isRemembered, setRemember] = useState(true)

    

    function handleReturn() {
      window.location.href = "/admin/";
    }

    function handleLogout() {
      setLogin(false);
      setRemember(false);
      // window.localStorage.removeItem('currentAccount');
      window.location.href = "/index.html";
    }


    return (
      <React.Fragment>
        {/* //===== return to admin */}
        <div id="header__left">
              <Button
                titleValue="Return"
                id="return__button"
                handleOnClick={handleReturn}
        />
        </div>

            {/* =======title*/}
        <div id = "header__middle">
          <span id ="header__title">User management</span>
        </div>

              {/* //=======logout button */}
        <div id="header__right">
          <Button
                  titleValue="Log out"
                  id="logout__button"
                  handleOnClick={handleLogout}
          />
        </div>  
      </React.Fragment>
    )
    
}

export default Header
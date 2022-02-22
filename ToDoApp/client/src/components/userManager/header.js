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
        <div className="userManager__header">
        {/* //===== return to admin */}

              {/* =======title*/}
          <div className = "userManager__header-middle">
            <span className ="userManager__header-title">User management</span>
          </div>

        
          </div>
      </React.Fragment>
    )
    
}

export default Header
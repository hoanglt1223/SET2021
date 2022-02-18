import React, { useState, useEffect } from "react";
import Button from "./user/button";
import {Link} from "react-router-dom"
function Toolbar(props) {
    
    function handleCreateNewAccount() {
      
    }

    return (
      <React.Fragment>
          <div className="userManager__toolbar">
            <div className="userManager__toolbar-left">
              <Link to = "/">
                <Button
                      titleValue="Create"
                      id="create__button"
                      handleOnClick={handleCreateNewAccount}
                />
              </Link>
            </div>

                {/* =======title*/}
            <div className="userManager__toolbar-middle">
              <span className ="userManager__toolbar-title">Quang cao dat o day</span>
            </div>
          </div>
      </React.Fragment>
    )
    
}

export default Toolbar
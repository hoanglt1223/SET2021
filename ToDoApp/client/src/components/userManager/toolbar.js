import React, { useState, useEffect } from "react";
import Button from "./user/button";
import {Link} from "react-router-dom"
function Toolbar(props) {
    
    function handleCreateNewAccount() {
      window.location.href = "/signup/signup.html";
    }

    function handleDeleteAccount() {
      postMethod('delete-user', id)
      .then(
          response => {
              
          }
      )
    }

    function handleEditAccount() {
        
    }


    return (
      <React.Fragment>
        {/* //===== create, delete account */}
          <div className="userManager__toolbar">
            <div className="userManager__toolbar-left">
              <Link to = "/">
                <Button
                      titleValue="Create"
                      id="create__button"
                      handleOnClick={handleCreateNewAccount}
                />
              </Link>

              <Button
                    titleValue="Delete"
                    id="delete__button"
                    handleOnClick={handleDeleteAccount}
              />
            </div>

                {/* =======title*/}
            <div className="userManager__toolbar-middle">
              <span className ="userManager__toolbar-title"></span>
            </div>

                  {/* //=======edit account */}
            <div className="userManager__toolbar-right">
              <Button
                      titleValue="Edit"
                      id="edit__button"
                      handleOnClick={handleEditAccount}
              />
            </div>
          </div>
      </React.Fragment>
    )
    
}

export default Toolbar
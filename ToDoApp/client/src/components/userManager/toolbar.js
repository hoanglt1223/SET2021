import React, { useState, useEffect } from "react";
import Button from "./user/button";
import SignUpContent from "../signup/signup";
function Toolbar(props) {
    const {
        setUserListContext
    } = props
    const [isCreating, setCreating] = useState("none")


    function handleCreateNewAccount() {
        setCreating('')
    }
    function handleFilter() {

    }


    return (
        <React.Fragment>
            <div className="userManager__toolbar">
                <div className="userManager__toolbar-left">
                    <Button
                        titleValue="Create"
                        id="create__button"
                        handleOnClick={handleCreateNewAccount}
                    />
                </div>

                {/* =======title*/}
                <div className="userManager__toolbar-middle">
                    <span className="userManager__toolbar-title">SET 2021</span>
                </div>
                <div className="userManager__toolbar-right">
                    <Button
                        titleValue="Filter"
                        id="filter__button"
                        handleOnClick={handleFilter}
                    />
                </div>
            </div>
            {(isCreating == '') && <SignUpContent prevPage = '/users'></SignUpContent>}
        </React.Fragment>
    )

}

export default Toolbar
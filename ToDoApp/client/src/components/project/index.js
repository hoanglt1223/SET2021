import React, { useState, useEffect } from "react";
import Button from "./button/button";
import './project.css'
import DetailBoard from "./detailBoard/board";

function Project(props) {
    const {
        nameProject = "#",
        taskList_props = [],
        memberList = [],
        isDeleted = false
    } = props
    
    const [isExpanded, setExpanded] = useState('none');
    const [valueExpandButton, setValueExpandButton] = useState ('Expand');
    const [isRemoved, setRemove] = useState(isDeleted)
    const [taskList, setTaskList] = useState(taskList_props);

    function handleExpand(){
        if (isExpanded == 'none'){
            setExpanded('inline-block')
            setValueExpandButton('Shrink')
        }
        else {
            setExpanded('none')
            setValueExpandButton('Expand')
        }
    }

    function handleRemove(){
        setRemove(true);
    }


    return (
        <div className="project"
            style = {{display : isRemoved ? 'none' : 'flex'}}
        >
            <Button
                element="input"
                type="text"
                titleValue={nameProject}
            />

            <div>
                <Button
                    demo="input"
                    type="button"
                    titleValue= {valueExpandButton}
                    handleOnClick = {handleExpand}
                />

                <Button
                    element="input"
                    type="button"
                    titleValue="Remove"
                    handleOnClick = {handleRemove}
                    textColor="#AE6F54"

                />
            </div>

            <DetailBoard
                projectName={nameProject}
                fetchedTaskList = {taskList_props}
                isExpanded = {isExpanded}
            />


        </div>
    )
}


export default Project

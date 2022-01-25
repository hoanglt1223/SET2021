import React, {useState, useEffect} from "react"
import DetailTaskList from "./taskList"


function DetailBoard(props) {
    const {
        projectName,
        isExpanded= 'none'
    } = props


    return (
        <div className="detailProject" style={{display : isExpanded }}>
            <DetailTaskList 
            projectName = {projectName}/>
        </div>
    )
}

export default DetailBoard
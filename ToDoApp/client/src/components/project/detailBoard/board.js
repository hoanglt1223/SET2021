import React, {useState, useEffect} from "react"
import DetailTaskList from "./taskList"


function DetailBoard(props) {
    const {
        projectName,
        fetchedTaskList,
        isExpanded= 'none'
    } = props


    return (
        <div className="detailProject" style={{display : isExpanded }}>
            <DetailTaskList 
            projectName = {projectName}
            fetchedTaskList = {fetchedTaskList}
            />
        </div>
    )
}

export default DetailBoard
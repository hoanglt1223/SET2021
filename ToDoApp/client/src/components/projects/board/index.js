import React from "react"
import DetailTaskList from "./DetailTaskList"


function DetailBoard(props) {
    const {
        projectID,
        fetchedTaskList,
        isExpanded = 'none'
    } = props


    return (
        <div className="detailProject" style={{ display: isExpanded }}>
        // Chỗ này chưa cần tách component
            <DetailTaskList
                projectID={projectID}
                fetchedTaskList={fetchedTaskList}
            />
        </div>
    )
}

export default DetailBoard
import React, { useState, useEffect } from "react";
import Button from "./Button";
import './project.css'
import DetailBoard from "./DetailBoard";
import { deleteMethod } from '../../api'
import { ProjectContextConsumer } from '../../context/projectContext'


function Project(props) {

    const {
        nameProject = "#",
        taskList_props = [],
        memberList = [],
        isDeleted = false,
        id,
    } = props

    const [isExpanded, setExpanded] = useState('none');
    const [valueExpandButton, setValueExpandButton] = useState('Expand');
    const [isRemoved, setRemove] = useState(isDeleted)
    const [taskList, setTaskList] = useState(taskList_props);

    function handleExpand() {
        if (isExpanded == 'none') {
            setExpanded('inline-block')
            setValueExpandButton('Collapse')
        }
        else {
            setExpanded('none')
            setValueExpandButton('Expand')
        }
    }

    function handleRemove() {
        deleteMethod('delete-project', { _id: id }).then(response => {
            setRemove(true);
        })
    }

    return (
        <div className="project"
            style={{ display: isRemoved ? 'none' : 'flex' }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <Button
                    handleOnClick={handleExpand}
                    className="gg-chevron-double-down-o"
                >
                </Button>
                <p className="projectName">{nameProject}</p>


                <Button
                    handleOnClick={handleRemove}
                    className='gg-remove'
                />
            </div>

            <DetailBoard
                projectID={id}
                fetchedTaskList={taskList}
                isExpanded={isExpanded}
            />


        </div>
    )
}


export default Project

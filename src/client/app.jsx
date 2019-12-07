import React from 'react';

import {Label} from 'semantic-ui-react'
import './app.scss';

import {TaskList} from "ui/TaskList/TaskList";
import TaskListWithHook from "ui/TaskList/TaskListWithHook";

export default () => {
    return (
        <div>
            <div align="left" className='header'>
                <Label size="big">Task Management System</Label>
            </div>
            <TaskListWithHook/>
        </div>
    );
}

import React from 'react';

import {Label} from 'semantic-ui-react'
import './app.scss';

import {TaskList} from "ui/TaskList/TaskList";

export default () => {
    return (
        <div>
            <div align="left" className='header'>
                <Label size="big">Task Management System</Label>
            </div>
            <TaskList/>
        </div>
    );
}
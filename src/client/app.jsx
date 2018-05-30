import React from 'react';

import TaskList from 'ui/TaskList/TaskList';
import {Label} from 'semantic-ui-react'

import './app.scss';

export default () => {
    return (
        <div>
            <div align="center" className='header'>
              {/*  <Label size="big">Departament</Label>*/}
            </div>
            <TaskList />
        </div>
    );
}
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import TaskList from 'ui/TaskList/TaskList';
import {Label, Menu} from 'semantic-ui-react'
import {Departament, Subject, Room, Teacher, Group, Lecture} from "./ui/TaskList/TaskList";
import './app.scss';

export default () => {
    return (
        <Router>
            <div>
                <Menu>
                    <Menu.Item as={Link} to='/departament'>
                        Departament
                    </Menu.Item>
                    <Menu.Item as={Link} to='/group'>
                        Group
                    </Menu.Item>
                    <Menu.Item as={Link} to='/teacher'>
                        Teacher
                    </Menu.Item>
                    <Menu.Item as={Link} to='/room'>
                        Room
                    </Menu.Item>
                    <Menu.Item as={Link} to='/subject'>
                        Subject
                    </Menu.Item>
                    <Menu.Item as={Link} to='/lecture'>
                    Lecture
                </Menu.Item>
                </Menu>
                {/*<li><Link to="/departament">Departament</Link></li>*/}
                {/*<li><Link to="/group">Group</Link></li>*/}
                {/*<li><Link to="/teacher">Teacher</Link></li>*/}
                {/*<li><Link to="/room">Room</Link></li>*/}
                {/*<li><Link to="/subject">Subject</Link></li>*/}
                {/*<li><Link to="/lecture">Lecture</Link></li>*/}

                {/*<hr/>*/}

                <Route exact path="/departament" component={Departament}/>
                <Route exact path="/group" component={Group}/>
                <Route exact path="/teacher" component={Teacher}/>
                <Route exact path="/room" component={Room}/>
                <Route exact path="/subject" component={Subject}/>
                <Route exact path="/lecture" component={Lecture}/>
            </div>
        </Router>
        // <div>
        //     <div align="center" className='header'>
        //       {/*  <Label size="big">Departament</Label>*/}
        //     </div>
        //     <TaskList />
        // </div>
    );
}
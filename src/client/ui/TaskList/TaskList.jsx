import React from 'react';
import './TaskList.scss';
import {PureComponent} from "react";

import {
    change,
    getAll,
    insert,
    remove
} from "../../api/tasks";

import {Button, Grid, Input, Table} from "semantic-ui-react";

export class TaskList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newItemTask: {title: ''},
        }
    }

    async componentDidMount() {
        await this.loadTask()
    };

    async loadTask() {
        let tasks = await getAll();
        tasks.sort((x, y) => -y.id + x.id);
        this.setState({tasks});

    }
  async addTask(title) {
        await insert({title})
        await this.loadTask()
    }

    async changeTask(id, status) {
        await change({
            id: id,
            status: status
        });
        await this.loadTask()
    }

    async removeTask(Id) {
        await remove(Id);
        await this.loadTask()
    }

    render() {
        return (
            <div className='task-list-container'>
                 <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Input icon placeholder='Name' fluid={true}
                                   value={this.state.newItemTask.title}
                                   type='text'
                                   onChange={i =>
                                       this.setState({
                                               newItemTask: {
                                                   ...this.state.newItemTask,
                                                   title: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button positive onClick={() => {
                                this.addTask(this.state.newItemTask.title);
                                this.setState({newItemTask: {title: ''}});
                            }
                            }
                            >ADD</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Done</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.tasks.map((task, index) => (
                            <Table.Row key={index}>
                                <Table.Cell textAlign='left'>{task.id}</Table.Cell>
                                <Table.Cell textAlign='center'>{task.title}</Table.Cell>
                                <Table.Cell
                                    textAlign='center'>
                                <span
                                    onClick={() => {
                                        this.changeTask(task.id, !task.done)
                                    }}
                                    className={`status-indicator-${task.done ? 'green' : 'red'}`}>
                                {task.done ? '✔' : '❌'}
                                </span>
                                </Table.Cell>
                                <Table.Cell textAlign='center'>
                            <span className="delete-shadow" onClick={() => {
                                this.removeTask(task.id)
                            }}> {'🗑'}</span></Table.Cell>
                            </Table.Row>
                        ))
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

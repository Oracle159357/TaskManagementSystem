import React, { useState, useEffect } from 'react';
import './TaskList.scss';

import {
  change,
  getAll,
  insert,
  remove
} from "../../api/tasks";
import { Button, Grid, Input, Table } from "semantic-ui-react";

export const TaskListWithHook = () => {

  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const loadTasks = async () => {
    const tasks = await getAll();
    tasks.sort((x, y) => -y.id + x.id);
    setTask(tasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const insertTask = async () => {
    await insert({ title: newTask });
    setNewTask("");
    await loadTasks();
  };

  const changeTask = async (id, status) => {
    await change({ id: id, status: status });
    await loadTasks();
  };

  const removeTask = async (id) => {
    await remove(id);
    await loadTasks();
  };

  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
            <Input icon placeholder='Name' fluid={true}
               value={newTask}
               type='text'
               onChange={value => setNewTask(value.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button positive
              onClick={() => insertTask()}
            >
              ADD
            </Button>
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
          {tasks.map((task) => (
            <Table.Row key={task.id}>
              <Table.Cell textAlign='left'>{task.id}</Table.Cell>
              <Table.Cell textAlign='center'>{task.title}</Table.Cell>
              <Table.Cell
                textAlign='center'
              >
                <span
                  onClick={() => changeTask(task.id, !task.done)}
                  className={`status-indicator-${task.done ? 'green' : 'red'}`}
                >
                  {task.done ? '✔' : '❌'}
                </span>
              </Table.Cell>
              <Table.Cell textAlign='center'>
                <span
                  className="delete-shadow"
                  onClick={() => removeTask(task.id)}
                >
                  {'🗑'}
                </span>
              </Table.Cell>
            </Table.Row>
          ))
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default TaskListWithHook;

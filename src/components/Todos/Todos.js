import { Typography, Box, ListItem, Button } from '@mui/material'
import { MyPaper, MyPaper2, MyTextField, MyIconButton, MyList } from './styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

import React, { useEffect, useState } from 'react'


// getting todos from Local storage
const LSTodo = JSON.parse(localStorage.getItem("TODOS")) || [];

const Todos = () => {

    // for storing todos array
    const [todos, setTodos] = useState(LSTodo);

    // for storing a todo
    const [todo, setTodo] = useState("");

    // finding number of tasks completed
    let completedTask = todos?.filter(todo => todo.done === true).length;

    // on submiting a todo
    const handleSubmitTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now().toString(),
            text: todo,
            done: false
        }
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }


    // on deleting a todo
    const handleDelete = (id) => {
        const updatedTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    // on toggling- completed or not
    const handleToggle = (id) => {
        const updatedTodo = [...todos].map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done
            }
            return todo
        })

        setTodos(updatedTodo);
    }

    // setting in local storage
    useEffect(() => {
        localStorage.setItem("TODOS", JSON.stringify(todos))
    }, [todos]);

    return (
        <MyPaper elevation={3}>
            
                <Typography variant="h3" gutterBottom textAlign="center">
                    MY TODO List
                </Typography>
                {/* input field for todo */}
                <MyPaper2 elevation={1}>
                    <MyTextField
                        variant="outlined"
                        id="todo"
                        name="todo"
                        label="Enter your Todo"
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    {/* submit button */}
                    <MyIconButton type="submit" aria-label="search" onClick={handleSubmitTodo}>
                        <AddIcon style={{ fill: "blue" }} />
                    </MyIconButton>
                </MyPaper2>

                {/* task status */}
                <Box sx={{
                    paddingTop: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Total task : {todos?.length}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Completed Task: {completedTask}
                    </Typography>
                </Box>

                {/* todo list */}
                <MyList>
                    {
                        todos?.map((todo, index) => (
                            <ListItem key={index} style={{ justifyContent: "space-between" }}>
                                <input type='checkbox' onChange={() => handleToggle(todo.id)} checked={todo.done} />
                                <p className="todo">{todo.text}</p>
                                <p className={todo.done ? "visible" : "invisible"}>
                                    <CheckCircleIcon />
                                    completed
                                </p>
                                <Button variant="contained" color="primary" onClick={() => handleDelete(todo.id)}>Delete</Button>
                            </ListItem>
                        ))
                    }

                </MyList>
        
        </MyPaper>
    )
}

export default Todos

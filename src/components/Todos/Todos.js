import { Typography, Box, ListItem, Button } from '@mui/material'
import { MyPaper, MyPaper2, MyTextField, MyIconButton, MyList } from './styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

import React, { useEffect, useState } from 'react'



const LSTodo = JSON.parse(localStorage.getItem("TODOS")) || [];

const Todos = () => {
    const [todos, setTodos] = useState(LSTodo);
    const [todo, setTodo] = useState("");
    let completedTask = todos?.filter(todo => todo.done === true).length;


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



    const handleDelete = (id) => {
        const updatedTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleToggle = (id) => {
        const updatedTodo = [...todos].map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done
            }
            return todo
        })

        setTodos(updatedTodo);
    }

    useEffect(() => {
        localStorage.setItem("TODOS", JSON.stringify(todos))
    }, [todos]);

    return (
        <MyPaper elevation={3}>
            <Box p={1} sx={{
                width: 380,
                // height: 500,
                textAlign: "center"
            }}>
                <Typography variant="h3" gutterBottom textAlign="center">
                    MY TODO List
                </Typography>
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
                    <MyIconButton type="submit" aria-label="search" onClick={handleSubmitTodo}>
                        <AddIcon style={{ fill: "blue" }} />
                    </MyIconButton>
                </MyPaper2>
                <Box sx={{
                    paddingTop: "5px",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Total task : {todos?.length}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Completed Task: {completedTask}
                    </Typography>
                </Box>

                <MyList>
                    {
                        todos?.map((todo, index) => (
                            <ListItem key={index} style={{justifyContent:"space-around"}}>
                                <input type='checkbox' onChange={() => handleToggle(todo.id)} checked={todo.done} className='completed' />
                                <p className={todo.done?"todo":"pdRight"}>{todo.text}</p>
                                <p className={todo.done ? "visible" : "invisible"}>
                                    <CheckCircleIcon />
                                    completed
                                </p>
                                <Button variant="contained" color="primary"  onClick={() => handleDelete(todo.id)}>Delete</Button>
                            </ListItem>
                        ))
                    }


                </MyList>
            </Box>
        </MyPaper>
    )
}

export default Todos

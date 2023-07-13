import { Typography, ListItem, IconButton, ListItemText, FormControlLabel, Checkbox ,Box} from '@mui/material'
import {  MyPaper, MyPaper2, MyTextField, MyIconButton, MyList, MyListItemText } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import React, { useEffect, useState } from 'react'

const LSTodo = JSON.parse(localStorage.getItem("TODOS")) || [];

const Todos = () => {
    const [input, setInput] = useState({ id: "", text: "", done: false })
    const [todos, setTodos] = useState(LSTodo);
    const [checked, setChecked] = React.useState(false);

    const handleCheck = (e, id) => {
        // console.log(e.target.checked,id)

        todos?.forEach(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }

        })
        setTodos(todos);
        localStorage.setItem("TODOS", JSON.stringify(todos))
        setChecked(e.target.checked)
    };

    const handleSubmitTodo = (e) => {
        setTodos([...todos, input]);
        setInput({ id: "", text: "", done: false });
    }

    useEffect(() => {
        localStorage.setItem("TODOS", JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (id) => {
        const mytodos = todos.filter(todo => todo.id !== id);
        setTodos(mytodos);
    }
    return (
        <MyPaper elevation={3}>
            <Box p={3} sx={{
                width: 300,
                height: 300,
                textAlign:"center"
            }}>
                <Typography variant="h3" gutterBottom textAlign="center">
                    MY TODOS
                </Typography>
                <MyPaper2 elevation={1}>
                    <MyTextField
                        variant="outlined"
                        id="todo"
                        name="todo"
                        label="Enter your Todo"
                        type="text"
                        value={input.text}
                        onChange={(e) => setInput({ id: Date.now().toString(), text: e.target.value, done: false })}
                    />
                    <MyIconButton type="submit" aria-label="search" onClick={handleSubmitTodo}>
                        <AddIcon style={{ fill: "blue" }} />
                    </MyIconButton>

                </MyPaper2>


                <MyList>
                    {
                        todos?.map((todo, index) => (

                            <ListItem key={index}>

                                {
                                    todo.done ? (

                                        <>
                                            <FormControlLabel
                                                control={<Checkbox checked={checked} onChange={(e) => handleCheck(e, todo.id)} />}
                                            />
                                            <MyListItemText>{todo.text}</MyListItemText>
                                        </>) : (
                                        <>
                                            <FormControlLabel
                                                control={<Checkbox onChange={(e) => handleCheck(e, todo.id)} />}
                                            />
                                            <ListItemText ListItemText > {todo.text}</ListItemText>
                                        </>)
                                }

                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))
                    }


                </MyList>
            </Box>
        </MyPaper>
    )
}

export default Todos

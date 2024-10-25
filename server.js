const express = require('express');
const path = require('path');
const { Pool } = require('pg');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// MDLW
// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_list',
    password: 'admin',
    port: 5432,
});

//OBTENER
app.get('/api/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');//QUERY
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las tareas');
    }
});

//AGREGAR
app.post('/api/tasks', async (req, res) => {
    const { title } = req.body;
    try {
        const result = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [title]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar la tarea');
    }
});

// UPTADE TRUE
app.put('/api/tasks/:id', async (req, res) => {
    const taskId = parseInt(req.params.id);
    const { completed } = req.body;

    try {
        const result = await pool.query('UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *', [completed, taskId]);
        if (result.rows.length === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la tarea');
    }
});

// SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

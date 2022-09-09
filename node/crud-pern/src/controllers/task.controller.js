const pool = require('../db');
//
const getAlltask = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM public.task');
        res.json(result.rows);
    }catch (error) {
        next(error);
    }
};
//
const getTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM public.task WHERE id = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({
            message: 'Tarea no encontrada.'
        });
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}
//expressValidator, joy => bibliotecas para validar
const createTask = async (req, res, next) => {
    try{
        const {tittle, description} = req.body;
        const result = await pool.query('INSERT INTO public.task(title, description) VALUES ($1, $2) RETURNING *', [tittle, description]);
        res.json(result.rows[0]);
    }catch(error){
        next(error);
    }
};
//
const deleteTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await pool.query('DELETE FROM public.task WHERE id = $1', [id]);
        if (result.rowCount === 0) return res.status(404).json({
            message: 'Tarea no encontrada.'
        });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}
//
const updateTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {tittle, description} = req.body;
        const result = await pool.query('UPDATE public.task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [tittle, description, id]);
        if (result.rows.length === 0) return res.status(404).json({
            message: 'Tarea no encontrada'
        });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}
module.exports = { getAlltask, getTask, createTask, deleteTask, updateTask }
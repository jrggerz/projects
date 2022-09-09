const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/task.routes');
const cors = require('cors');
const app = express();
//
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(taskRoutes);
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});
//
app.listen(3000);
console.log('App listen in port 3000');
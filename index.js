const express = require('express');
const app = express();
require('dotenv').config();
const cors=require('cors');
const bodyParser =require("body-parser")
const PORT = process.env.PORT || 8000; 
app.use(cors());
app.use(bodyParser.json());

require('./connections.js')
const TestRoutes=require("./Routes/testRoutes.js")
const PatientRoutes=require('./Routes/patientRoutes.js');
app.use('/test',TestRoutes);
app.use('/patient',PatientRoutes);
app.get('/', (req, res) => {
    res.send('Server is running!');
});
app.listen(PORT, () => {
    console.log(`Local host is running on PORT ${PORT}`);
})

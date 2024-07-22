const express = require('express');
const app = express();
<<<<<<< HEAD
require('dotenv').config();
=======
require("dotenv").config()
>>>>>>> fa1f085ca7b0cd957c08bfd4da8c64f76d17eae9
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
app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`Local host is running on PORT ${PORT}`);
})
=======
    console.log("Local host is running on PORT 8000");
})
>>>>>>> fa1f085ca7b0cd957c08bfd4da8c64f76d17eae9

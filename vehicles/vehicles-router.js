const express = require('express')
const db = require('../data/db-config');
const router = express.Router();

router.get('/', async (req,res)=>{

    try{
        const vehicles = await db('vehicle');
        res.json(vehicles);
    }
    catch({message}){
        res.status(500).json({success:false, message});
    }
});

router.get('/:id', async (req,res)=>{
    const {id} = req.params;

    try{
        const vehicle = await db('vehicle').where({id});
        res.status(200).json(vehicle);
    }
    catch({message}){
    
        res.status(500).json({success:false, message});
    }
});

// post / insert vehicle 

router.post('/', verifyBodyData ,async (req,res)=>{
    const postData = req.body;

    try{
        const id = await db('vehicle').insert(postData);
        res.status(201).json({success: true, message:`New vehicle of id: ${id} was recorded to the database.`});
    }
    catch({message}){
        res.status(500).json({success: false, message});
    }
});


//stretch: put / update

router.put('/:id',verifyVehicleID , verifyBodyData , async (req,res)=>{
    const {id} = req.params;
    const updatedData = req.body;

    try{
        const vehicleID = await db('vehicle').where({id}).update(updatedData);
        res.status(200).json(vehicleID);
    }
    catch({message}){
        res.status(500).json({success:false, message});
    }
});


//stretch: delete / del


router.delete('/:id', verifyVehicleID, async (req,res)=>{
        const {id} = req.params;

    try{
        const vehicleID = await db('vehicle').where({id}).del();
        res.status(200).json({success: true, message:`The vehicle with the id of ${id} was removed.`});
    }
    catch({message}){
        res.status(500).json({success:false, message});
    }
});


//middlware

async function verifyBodyData(req,res,next){
    const bodyData = req.body;

    try{
        if(bodyData.vin === '' || bodyData.make === '' || bodyData.model === '' || bodyData.mileage === null){
            res.status(404).json({success:false, message: 'All required fields must be filled in.'});
        }else{
            next();
        }
    }
    catch({message}){
        res.status(500).json({success: false, message});
    }

}

async function verifyVehicleID(req,res,next){
    const {id} = req.params;

try{
    const vehicleID = await db('vehicle').where({id});
    if(vehicleID){
        next();
    }else{
        res.status(404).json({success:false, message:`The id of ${id} is not in the database`});
    }
}
catch({message}){
    res.status(500).json({success:false, message});
}

}

// vin:'1547r64th645s',make: 'Dodge', model:"1500 EcoDesiel",mileage:12450,
module.exports = router;
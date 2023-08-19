const express = require('express');
const controllerPostInfo=require("../../controllers/Information/controllPostInfo")

const postInfo = async (req, res) => {
    try {
        const newInfo = await controllerPostInfo(req);
        console.log(newInfo);
        res.status(201).json(newInfo); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = postInfo;



 
import roomModel from "../models/room.js";

const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomModel.getAllRooms();
        res.status(200).json({
            message: 'Success get all rooms',
            data: rooms
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get all rooms'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const getRoom = async (req, res) => {
    try {
        const room = await roomModel.getRoom(req.params.id);
        res.status(200).json({
            message: 'Success get room',
            data: room
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get room'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const createRoom = async (req, res) => {
    try {
        await roomModel.createRoom(req.body.host_id);
        res.status(200).json({
            message: 'Success create room'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create room'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const deleteRoom = async (req, res) => {
    try {
        await roomModel.deleteRoom(req.params.id);
        res.status(200).json({
            message: 'Success delete room'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete room'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

export default {
    getAllRooms,
    getRoom,
    createRoom,
    deleteRoom
}
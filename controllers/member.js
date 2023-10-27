import memberModel from '../models/member.js';

const getAllMembers = async (req, res) => {
    try {
        const members = await memberModel.getAllMembers();
        res.status(200).json({
            message: 'Success get all members',
            data: members
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get all members'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const getRoomMembers = async (req, res) => {
    try {
        const members = await memberModel.getRoomMembers(req.params.room_id);
        res.status(200).json({
            message: 'Success get members from one room',
            data: members
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get members from one room'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const createMember = async (req, res) => {
    try {
        await memberModel.createMember(req.body.room_id, req.body.user_id);
        res.status(200).json({
            message: 'Success create member'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create member'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const deleteMember = async (req, res) => {
    try {
        await memberModel.deleteMember(req.body.room_id, req.body.user_id);
        res.status(200).json({
            message: 'Success delete member'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete member'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

export default {
    getAllMembers,
    getRoomMembers,
    createMember,
    deleteMember
};
import userModel from '../models/user.js';

const getAllUsers = async(req, res) => {
    try {
        const data = await userModel.getAllUsers();
        res.status(200).json({
            message: 'Success get all users',
            data: data
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get all users'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const getUser = async(req, res) => {
    try {
        const data = await userModel.getUser(req.params.id);
        res.status(200).json({
            message: 'Success get user',
            data: data
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get user'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const createUser = async(req, res) => {
    try {
        await userModel.createUser(req.body.name);
        res.status(200).json({
            message: 'Success create user'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create user'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const updateUser = async(req, res) => {
    try {
        await userModel.updateUser(req.params.id, req.body.name);
        res.status(200).json({
            message: 'Success update user'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update user'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const deleteUser = async(req, res) => {
    try {
        await userModel.deleteUser(req.params.id);
        res.status(200).json({
            message: 'Success delete user'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete user'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
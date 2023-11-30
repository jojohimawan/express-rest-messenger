import messageModel from '../models/message.js';

const getAllMessages = async (req, res) => {
    try {
        const messages = await messageModel.getAllMessages();
        res.status(200).json({
            message: 'Success get all messages',
            data: messages
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get all messages'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const getMessagesFromUser = async (req, res) => {
    try {
        const messages = await messageModel.getMessagesFromUser(req.params.sender_id);
        res.status(200).json({
            message: 'Success get messages from one user',
            data: messages
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get messages from one user'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const createMessage = async (req, res) => {
    try {
        await messageModel.createMessage(req.body.room_id, req.body.sender_id, req.body.pesan, req.body.is_deleted);
        res.status(200).json({
            message: 'Success create message'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create message'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const updateMessage = async (req, res) => {
    try {
        await messageModel.updateMessage(req.body.pesan, req.params.id);
        res.status(200).json({
            message: 'Success update message'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update message'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const deleteMessage = async (req, res) => {
    try {
        await messageModel.deleteMessage(req.params.id);
        res.status(200).json({
            message: 'Success delete message'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete message'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const getMessagebByRoomId = async (req, res) => {
    try {
        const messages = await messageModel.getMessagebByRoomId(req.params.room_id);
        res.status(200).json({
            message: 'Success get messages from one room',
            data: messages
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get messages from one room'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

export default {
    getAllMessages,
    getMessagesFromUser,
    createMessage,
    updateMessage,
    deleteMessage,
    getMessagebByRoomId
}
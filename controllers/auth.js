import authModel from '../models/auth.js';

const login = async (req, res) => {
    try {
        const login = await authModel.login(req.body.name, req.body.password);
        if(login) {
            res.cookie('name', login.nama, {path: '/'});
            res.cookie('id', login.id, {path: '/'});
            res.cookie('isLogin', true, {path: '/'});
            return res.status(200).json({
                message: 'Success login',
                data: {...login, isLogin: true}
            });
        }

        return res.status(401).json({
            message: 'Invalid credentials'
        })
    } catch (err) {
        res.status(500).json({
            message: 'Failed to login'
        });
        console.log('Controller Error: ' + err.message || err);
    }
};

const register = async(req, res) => {
    try {
        const register = await authModel.register(req.body.name, req.body.password);
        if(register) {
            return res.status(400).json({
                message: 'Username already registered'
            });
        }
        return res.status(201).json({
            message: 'Success register'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to login'
        });
        console.log('Controller Error: ' + err.message || err);
    }
}

export default {
    login,
    register
}
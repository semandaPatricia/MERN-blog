import User from './models/userModel.js';
//import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({
      message: 'API is working!',
    });
  };
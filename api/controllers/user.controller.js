import User from '../../api/models/userModel.js';  // Correct file extension



//import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({
      message: 'API is working!',
    });
  };
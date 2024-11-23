import express from 'express';

import { createSubject, getAllSubjects } from '../controllers/subjectController.js';
import { createPractical, getAllPracticals, enrollInPractical } from '../controllers/practicalController.js';
import {isTeacher} from '../middlewares/isTeacher.js';
import authMiddleware from '../middlewares/auth.js';
import { 
    createUser, 
    getAllUsers, 
    getAllAdmins, 
    getAllTeachers, 
    getAllStudents 
  } from '../controllers/userController.js';
  
  import { isAdmin, isAdminOrTeacher } from '../middlewares/roleValidation.js';

const router = express.Router();

// ========== User Routes ==========

// Create new user
router.post('/users/create', createUser);

// Get all users (Admin only)
router.get('/users/get', getAllUsers);

// ========== Subject Routes ==========

// Create new subject
router.post('/subjects/create',authMiddleware, isTeacher,createSubject);

// Get all subjects
router.get('/subjects/get', getAllSubjects);

// ========== Practical Routes ==========

// Create new practical
router.post('/practicals/create',authMiddleware,isTeacher, createPractical);

// Get all practicals
router.get('/practicals/get', getAllPracticals);

// Enroll in practical
router.post('/practicals/enroll', enrollInPractical);

// Get all Admins (Admin-only)
router.get('/admins/get', authMiddleware, isAdmin, getAllAdmins);

// Get all Teachers (Admin-only)
router.get('/teachers/get', authMiddleware, isAdmin, getAllTeachers);

// Get all Students (Admin and Teacher)
router.get('/students/get', authMiddleware, isAdminOrTeacher, getAllStudents);

export default router;


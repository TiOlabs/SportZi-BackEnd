const express = require('express');
const router = express.Router();

const bookingCancelCoachController = require('../controllers/bookingCancelCoach.controller');

router.get('/api/getbookingcancelcoaches', bookingCancelCoachController.getBookingCancelCoaches);
router.get('/api/getbookingcancelcoach/:id', bookingCancelCoachController.getBookingCancelCoachById);
router.post('/api/addbookingcancelcoach', bookingCancelCoachController.addBookingCancelCoach);
router.put('/api/updatebookingcancelcoach/:id', bookingCancelCoachController.updateBookingCancelCoach);
router.delete('/api/deletebookingcancelcoach/:id', bookingCancelCoachController.deleteBookingCancelCoach);

module.exports = router;
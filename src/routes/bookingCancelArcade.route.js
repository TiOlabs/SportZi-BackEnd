const express = require('express');
const router = express.Router();

const bookingCancelArcadeController = require('../controllers/bookingCancelArcade.controller');

router.get('/api/getbookingcancelarcades', bookingCancelArcadeController.getBookingCancelArcades);
router.get('/api/getbookingcancelarcade/:id', bookingCancelArcadeController.getBookingCancelArcadeById);
router.post('/api/addbookingcancelarcade', bookingCancelArcadeController.addBookingCancelArcade);
router.put('/api/updatebookingcancelarcade/:id', bookingCancelArcadeController.updateBookingCancelArcade);
router.delete('/api/deletebookingcancelarcade/:id', bookingCancelArcadeController.deleteBookingCancelArcade);

module.exports = router;
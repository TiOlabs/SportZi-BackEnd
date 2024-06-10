const express = require('express');
const router = express.Router();
const reportArcadeController = require('../controllers/reportArcade.controller');

router.get('/api/getreportarcades', reportArcadeController.getReportArcades);
router.get('/api/getreportarcade/:id', reportArcadeController.getReportArcadeById);
router.post('/api/addreportarcade', reportArcadeController.addReportArcade);
router.put('/api/updatereportarcade/:id', reportArcadeController.updateReportArcade);
router.delete('/api/deletereportarcade/:id', reportArcadeController.deleteReportArcade);

module.exports = router;
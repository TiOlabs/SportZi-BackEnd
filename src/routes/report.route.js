const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');

router.get('/api/getreports', reportController.getReports);
router.get('/api/getreport/:id', reportController.getReportById);
router.post('/api/addreport', reportController.addReport);
router.put('/api/updatereport/:id', reportController.updateReport);
router.delete('/api/deletereport/:id', reportController.deleteReport);

module.exports = router;
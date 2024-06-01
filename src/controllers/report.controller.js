const reportService = require("../services/report.service");

const getReports = async (req, res) => {
  try {
    const reports = await reportService.getReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await reportService.getReportById(id);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addReport = async (req, res) => {
  try {
    const report = req.body;
    const newReport = await reportService.addReport(report);
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = req.body;
    const updatedReport = await reportService.updateReport(id, report);
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await reportService.deleteReport(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReports,
  getReportById,
  addReport,
  updateReport,
  deleteReport,
};

const reportArcadeService = require("../services/reportArcade.service");

const getReportArcades = async (req, res) => {
  try {
    const reportArcades = await reportArcadeService.getReportArcades();
    res.status(200).json(reportArcades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getReportArcadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const reportArcade = await reportArcadeService.getReportArcadeById(id);
    if (reportArcade) {
      res.status(200).json(reportArcade);
    } else {
      res.status(404).json({ message: "Report Arcade not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addReportArcade = async (req, res) => {
  try {
    const reportArcade = req.body;
    const newReportArcade = await reportArcadeService.addReportArcade(
      reportArcade
    );
    res.status(201).json(newReportArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateReportArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const reportArcade = req.body;
    const updatedReportArcade = await reportArcadeService.updateReportArcade(
      id,
      reportArcade
    );
    res.status(200).json(updatedReportArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteReportArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const reportArcade = await reportArcadeService.deleteReportArcade(id);
    res.status(200).json(reportArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReportArcades,
  getReportArcadeById,
  addReportArcade,
  updateReportArcade,
  deleteReportArcade,
};

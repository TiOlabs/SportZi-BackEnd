//coachFeedbacks.controller.js
const coachFeedbacksService = require("../services/coachFeedbacks.service");

const getCoachFeedbacks = async (req, res) => {
  try {
    const {coachId} = req.params
    const coachFeedbacks = await coachFeedbacksService.getCoachFeedbacks(req,res,coachId);
    if(coachFeedbacks){
      res.status(200).json(coachFeedbacks);
    }
    else{
      res.status(404).json({ message: "No found feedbacks" });
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addCoachFeedbacks = async (req, res) => {
  try {
    const feedback = req.body;
    const {coachId} = req.params;
    console.log(coachId);
    // console.log(feedback);
    const userId = req.user.userId;
    const newFeedback = await coachFeedbacksService.addCoachFeedbacks(req,res,feedback,coachId,userId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// const updateCoachFeedbacks = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const number = parseInt(id);
//     const rating = req.body;
//     const updatedRating = await coachFeedbacksService.updateCoachFeedbacks(
//       number,
//       rating
//     );
//     res.status(200).json(updatedRating);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// const deleteCoachFeedbacks = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const number = parseInt(id);
//     await coachFeedbacksService.deleteCoachFeedbacks(number);
//     res.status(200).json({ message: "Arcade Rating deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const getCoachAvgRating = async (req,res) => {
  try{
    const { coachId } = req.params;
    // console.log(coachId);
    const avgRating = await coachFeedbacksService.getCoachAvgRating(req,res,coachId);

  }catch(e){
    res.status(500).json({ message : e.message });
  }

}

module.exports = {
  getCoachFeedbacks,
  addCoachFeedbacks,
  // updateCoachFeedbacks,
  // deleteCoachFeedbacks,

  getCoachAvgRating,
};

const arcadeFeedbacksService = require("../services/arcadeFeedbacks.service");

// const getArcadeFeedbacks = async (req, res) => {
//     try {
//         const arcadeFeedbacks = await arcadeRatingsService.getArcadeFeedbacks();
//         arcadeFeedbacks.sort((a, b) => b.rating - a.rating);
//         const top10Items = arcadeFeedbacks.slice(0, 10);
//         res.status(200).json(top10Items);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//     }




const getArcadeFeedbacks = async (req, res) => {
    try {
      const {arcadeId} = req.params
      const arcadeFeedbacks = await arcadeFeedbacksService.getArcadeFeedbacks(req,res,arcadeId);
      if(arcadeFeedbacks){
        res.status(200).json(arcadeFeedbacks);
      }
      else{
        res.status(404).json({ message: "No found feedbacks" });
      }
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

const addArcadeFeedbacks = async (req, res) => {
    try {
        const feedback = req.body;
        const {arcadeId} = req.params;
        // console.log(arcadeId);
        // console.log(feedback);
        const userId = req.user.userId;
        const newFeedback = await arcadeFeedbacksService.addArcadeFeedbacks(req,res,feedback,arcadeId,userId);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }


// const updateArcadeFeedbacks = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const number = parseInt(id);
//         const feedback = req.body;
//         const updatedFeedback = await arcadeFeedbacksService.updateArcadeFeedbacks(
//             number,feedback
//         );
//         res.status(200).json(updatedFeedback);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//     }
// const deleteArcadeFeedbacks = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const number = parseInt(id);
//         await arcadeFeedbacksService.deleteArcadeFeedbacks(number);
//         res.status(200).json({ message: "Arcade Rating deleted" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//     }



const getArcadeAvgRating = async (req,res) => {
    try{
      const { arcadeId } = req.params;
      // console.log(coachId);
      const avgRating = await arcadeFeedbacksService.getArcadeAvgRating(req,res,arcadeId);
  
    }catch(e){
      res.status(500).json({ message : e.message });
    }
  
  }
  

module.exports = {
    getArcadeFeedbacks,
    addArcadeFeedbacks,
    // updateArcadeFeedbacks,
    // deleteArcadeFeedbacks,
    getArcadeAvgRating,
};
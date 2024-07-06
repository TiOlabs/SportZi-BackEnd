//coachFeedbacks.service.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachFeedbacks = async (req,res,coachId) => {
  try{
    const coachFeedbacks = await prisma.coachFeedbacks.findMany({
      where :{
        coach_id:coachId,
      },
      include: {
        feedback:{
          include:{
            user:true,
            feedbackComments:true,
          }
        }
      },
      orderBy: {
        feedback: {
          created_at: 'desc',
        },
      },
    });

    return coachFeedbacks;
  }catch(e){
    return res.status(400).json(e.message);
  }

  
};


const addCoachFeedbacks = async (req, res, feedback,coachId,userId) => {
  try {
    // console.log("Incoming feedback:", feedback);

    // Check if feedback and necessary properties are defined
    if (!feedback.comment) {
      throw new Error("Invalid feedback data");
    }

    const newFeedback = await prisma.feedbacks.create({
      data: {
        user: {
          connect: {
            user_id: userId,
          },
        },
      },
    });

    console.log(newFeedback.feedbacks_id);

    const coachFeedback = await prisma.coachFeedbacks.create({
      data: {
        rate: feedback.rating,
        coach: {
          connect: {
            coach_id: coachId,
          },
        },
        feedback: {
          connect: {
            feedbacks_id: newFeedback.feedbacks_id,
          },
        },
      },
    });

    const feedbackcomment = await prisma.feedbackComments.create({
      data: {
        comment: feedback.comment,
        feedback: {
          connect: {
            feedbacks_id: newFeedback.feedbacks_id,
          },
        },
      },
    });
    
    const feedbacks = await prisma.coachFeedbacks.findMany({
      where: { 
        coach_id: coachId,
        rate:{not:0}
      }, // change coach id according actual coacg ID
      select: { rate: true },
    });
    console.log(feedbacks.length)

    if(feedbacks.length>0){
      const numberOfRatings = feedbacks.length;
      const averageRating = feedbacks.reduce((sum, feedback) => sum + feedback.rate, 0) / numberOfRatings;

      const avgRate = await prisma.coach.update({
        where: {
          coach_id: coachId,
        },
        data: {
          averageRate:averageRating,
        },
      })
    }
    

    

    return res.status(201).json(coachFeedback);
  }
   catch (e) {
    return res.status(400).json(e.message);
  } 
};

// const updateCoachFeedbacks = async (id, coachFeedbacks) => {
//   return await prisma.coachFeedbacks.update({
//     where: { id: id },
//     data: {
//       ...coachFeedbacks,
//     },
//   });
// };
// const deleteCoachFeedbacks = async (id) => {
//   return await prisma.coachFeedbacks.delete({
//     where: { id: id },
//   });
// };



const getCoachAvgRating = async (req, res,coachId) => {
  try {
    const feedbacks = await prisma.coachFeedbacks.findMany({
      where: { coach_id: coachId }, // change coach id according actual coacg ID
      select: { rate: true },
    });

    const totalFeedbacks = feedbacks.length;
    // const averageRating = feedbacks.reduce((sum, feedback) => sum + feedback.rate, 0) / totalFeedbacks;

    const averageRating = await prisma.coach.findUnique({
      where:{
        coach_id:coachId,
      },
      select:{
        averageRate:true,
      }
    })
    return res.json({ averageRating, totalFeedbacks });
  } catch (error) {
    return res.json(error.message);
  }
}



module.exports = {
  getCoachFeedbacks,
  addCoachFeedbacks,
  // updateCoachFeedbacks,
  // deleteCoachFeedbacks,

  getCoachAvgRating,
};

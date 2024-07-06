const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const getArcadeFeedbacks = async () => {
//   return await prisma.arcadeFeedbacks.findMany({
//     include: {
//       arcade: true,
//     },
//   });
// };

const getArcadeFeedbacks = async (req, res, arcadeId) => {
  try {
    const arcadeFeedbacks = await prisma.arcadeFeedbacks.findMany({
      where: {
        arcade_id: arcadeId,
      },
      include: {
        feedback: {
          include: {
            user: true,
            feedbackComments: true,
          },
        },
      },
      orderBy: {
        feedback: {
          created_at: "desc",
        },
      },
    });

    return arcadeFeedbacks;
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

const addArcadeFeedbacks = async (req, res, feedback, arcadeId, userId) => {
  try {
    // console.log("Incoming feedback:", feedback);

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

    const arcadeFeedback = await prisma.arcadeFeedbacks.create({
      data: {
        rate: feedback.rating,
        arcade: {
          connect: {
            arcade_id: arcadeId,
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

    const feedbacks = await prisma.arcadeFeedbacks.findMany({
      where: {
         arcade_id: arcadeId,
          rate:{not:0}
        }, // change coach id according actual coacg ID
      select: { rate: true },
    });

    if(feedbacks.length>0){
      const totalFeedbacks = feedbacks.length;
      const averageRating = feedbacks.reduce((sum, feedback) => sum + feedback.rate, 0) / totalFeedbacks;

      const avgRate = await prisma.arcade.update({
      where: {
        arcade_id: arcadeId,
      },
      data: {
        averageRate:averageRating,
      },
    })
    }

    return res.status(201).json(arcadeFeedback);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
// const updateArcadeFeedbacks = async (id, arcadeFeedbacks) => {
//   return await prisma.arcadeFeedbackss.update({
//     where: { id: id },
//     data: {
//       ...arcadeFeedbacks,
//     },
//   });
// };
// const deleteArcadeFeedbacks = async (id) => {
//   return await prisma.arcadeFeedbacks.delete({
//     where: { id: id },
//   });
// };

const getArcadeAvgRating = async (req, res, arcadeId) => {
  try {
    const feedbacks = await prisma.arcadeFeedbacks.findMany({
      where: { arcade_id: arcadeId }, // change coach id according actual coacg ID
      select: { rate: true },
    });

    const totalFeedbacks = feedbacks.length;

    // const averageRating = feedbacks.reduce((sum, feedback) => sum + feedback.rate, 0) / totalFeedbacks;
    const averageRating = await prisma.arcade.findUnique({
      where:{
        arcade_id:arcadeId,
      },
      select:{
        averageRate:true,
      }
    })
    return res.json({ averageRating, totalFeedbacks });
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = {
  getArcadeFeedbacks,
  addArcadeFeedbacks,
  // updateArcadeFeedbacks,
  // deleteArcadeFeedbacks,
  getArcadeAvgRating,
};

export class AnswersController {
  constructor(answersService) {
    this.answersService = answersService;
  }

  // 답변글 리스트 API
  getAllAnswers = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const { questionId } = req.params;
      const answers = await this.answersService.getAnswers(userId, questionId);
      return res.status(200).send(answers);
    } catch (err) {
      next(err);
    }
  };

  // 답변글 작성 API
  postAnswer = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const author = userId.nickname;
      const { questionId } = req.params;
      const { content, isQuestion } = req.body;
      const answer = await this.answersService.createAnswer(
        userId,
        questionId,
        content,
        author,
        isQuestion
      );
      return res
        .status(200)
        .send({ message: "답변이 작성되었습니다.", data: { answer } });
    } catch (err) {
      next(err);
    }
  };
}

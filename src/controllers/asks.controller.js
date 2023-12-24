export class AsksController {
  constructor(asksService) {
    this.asksService = asksService;
  }

  // 답변글 리스트 API
  getAllAsks = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const asks = await this.asksService.getAsks(userId);
      return res.status(200).send(asks);
    } catch (err) {
      next(err);
    }
  };

  // 답변글 작성 API
  postAsk = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const { content } = req.body;
      const ask = await this.questionsService.createQuestion(userId, content);
      return res
        .status(200)
        .send({ message: "질문이 작성되었습니다.", data: { ask } });
    } catch (err) {
      next(err);
    }
  };
}

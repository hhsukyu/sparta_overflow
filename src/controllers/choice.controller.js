export class ChoiceController {
  constructor(choiceService) {
    this.choiceService = choiceService;
  }

  // 답변 채택 API
  postChoice = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const { questionId, answerId } = req.params;
      await this.choiceService.vaildateChoice(questionId, answerId);
      const choice = await this.choiceService.updateChoice(userId, answerId);
      return res
        .status(200)
        .send({ message: "답변이 채택되었습니다.", data: { choice } });
    } catch (err) {
      next(err);
    }
  };
}

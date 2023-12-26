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
      const selectChoice = await this.choiceService.updateSelectChoice(
        userId,
        questionId,
        answerId
      );
      return res
        .status(200)
        .send({ message: "답변이 채택되었습니다.", data: { selectChoice } });
    } catch (err) {
      next(err);
    }
  };

  // 답변 채택 취소 API
  patchChoice = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const { questionId, answerId } = req.params;
      await this.choiceService.vaildateChoice(questionId, answerId);
      const cancelChoice = await this.choiceService.updateCancelChoice(
        userId,
        answerId
      );
      return res
        .status(200)
        .send({ message: "답변채택 취소되었습니다.", data: { cancelChoice } });
    } catch (err) {
      next(err);
    }
  };
}

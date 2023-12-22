export class QuestionsController {
  constructor(questionsService) {
    this.questionsService = questionsService;
  }

  // 질문글 리스트 API (검색기능 X) 페이징 20개
  getAllQuestions = async (req, res, next) => {
    try {
      const Questions = await this.questionsService.getQuestions();
      res.status(200).send(Questions);
    } catch (err) {
      next(err);
    }
  };
}

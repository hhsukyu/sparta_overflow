export class QuestionsController {
  constructor(questionsService) {
    this.questionsService = questionsService;
  }

  // 질문글 리스트 API (검색기능 X) 페이징 20개
  getAllQuestions = async (req, res, next) => {
    try {
      const questions = await this.questionsService.getQuestions();
      return res.status(200).send(questions);
    } catch (err) {
      next(err);
    }
  };

  // 질문글 리스트 API 검색 기능 포함 완성 페이징 20개
  getQuestionsByKeyword = async (req, res, next) => {
    try {
      const { keyword } = req.query;
      // const toupperKeyword = keyword.toUpperCase();
      const encodedKeyword = encodeURI(keyword);
      const questions = await this.questionsService.findAllQuestions(
        encodedKeyword
      );
      return res.status(200).send(questions);
    } catch (err) {
      next(err);
    }
  };

  // 질문글 작성하기
  postQuestion = async (req, res, next) => {
    try {
      const userId = res.locals.user.id;
      const { title, content } = req.body;
      const questions = await this.questionsService.createQuestion(
        userId,
        title,
        content
      );
      return res
        .status(200)
        .send({ message: "질문이 작성되었습니다.", data: { questions } });
    } catch (err) {
      next(err);
    }
  };
}

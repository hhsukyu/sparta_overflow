export class QuestionsController {
  constructor(questionsService) {
    this.questionsService = questionsService;
  }

  // 질문글 리스트 API (검색기능 X) 페이징 20개
  getAllQuestions = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const questions = await this.questionsService.getQuestions(userId);
      return res.status(200).send(questions);
    } catch (err) {
      next(err);
    }
  };
  // 질문글 리스트 API 검색 기능 포함 완성 페이징 20개
  getQuestionsByKeyword = async (req, res, next) => {
    try {
      const { keyword } = req.query;
      console.log(keyword);
      const userId = res.locals.user;
      // const toupperKeyword = keyword.toUpperCase();
      const encodedKeyword = encodeURI(keyword);
      const questions = await this.questionsService.findAllQuestions(
        userId,
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
      const userId = res.locals.user;
      const author = userId.nickname;
      const { title, content } = req.body;
      await this.questionsService.validatePostQuestion(title, content);
      const questions = await this.questionsService.createQuestion(
        userId,
        title,
        content,
        author
      );
      return res
        .status(200)
        .send({ message: "질문이 작성되었습니다.", data: { questions } });
    } catch (err) {
      next(err);
    }
  };

  // 질문글 수정하기
  putQuestion = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const { questionId } = req.params;
      const { title, content } = req.body;
      await this.questionsService.validateQuestionInfo(
        userId,
        questionId,
        title,
        content
      );
      const question = await this.questionsService.updateQuestion(
        userId,
        questionId,
        title,
        content
      );
      return res
        .status(200)
        .send({ message: "질문이 수정되었습니다.", data: { question } });
    } catch (err) {
      next(err);
    }
  };

  // 질문글 삭제하기
  deleteQuestion = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const { questionId } = req.params;
      await this.questionsService.validateQuestionByUserId(userId, questionId);
      await this.questionsService.deleteMyQuestion(userId, questionId);
      return res.status(200).send({ message: "질문이 삭제되었습니다." });
    } catch (err) {
      next(err);
    }
  };
}

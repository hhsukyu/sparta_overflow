export class QuestionsService {
  constructor(questionsRepository) {
    this.questionsRepository = questionsRepository;
  }

  // 질문글 가져오기 (검색기능 X) 페이징 20개
  getQuestions = async (userId) => {
    const questions = await this.questionsRepository.getManyQuestions();
    if (userId.status === "MANAGER") {
      return questions;
    }
    return questions.map((question) => {
      return {
        id: question.id,
        userId: question.userId,
        title: question.title,
        content: question.content,
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
      };
    });
  };

  // 질문글 가져오기 (검색기능 o) 페이징 20개
  findAllQuestions = async (userId, encodedKeyword) => {
    const questionsByKeyword =
      await this.questionsRepository.findAllQuestionsByKeyword(encodedKeyword);
    if (userId.status === "MANAGER") {
      return questionsByKeyword;
    }
    return questionsByKeyword.map((question) => {
      return {
        id: question.id,
        userId: question.userId,
        title: question.title,
        content: question.content,
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
      };
    });
  };

  // 질문글 작성하기
  createQuestion = async (userId, title, content, author) => {
    const createQuestion = await this.questionsRepository.createdQuestion(
      userId,
      title,
      content,
      author
    );
    return createQuestion;
  };
}

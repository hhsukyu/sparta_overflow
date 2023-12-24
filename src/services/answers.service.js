export class AnswersService {
  constructor(answersRepository) {
    this.answersRepository = answersRepository;
  }

  // 답변글 리스트 API
  getAnswers = async (userId, questionId) => {
    const answers = await this.answersRepository.getManyAnswers(questionId);
    if (userId.status === "MANAGER") {
      return asks;
    }
    return answers.map((answer) => {
      return {
        id: answer.id,
        userId: answer.userId,
        title: answer.title,
        content: answer.content,
        createdAt: answer.createdAt,
        updatedAt: answer.updatedAt,
      };
    });
  };

  // 답변글 작성
  createAnswer = async (userId, questionId, content, author, isQuestion) => {
    return await this.answersRepository.createdAnswer(
      userId,
      questionId,
      content,
      author,
      isQuestion
    );
  };
}

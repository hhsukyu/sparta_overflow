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

  // 답변글 수정 유효성
  validateAnswer = async (userId, answerId, content) => {
    const answer = await this.answersRepository.findAnswerById(answerId);
    console.log(answer);
    console.log(userId);
    if (answer.userId !== userId.id) {
      throw new Error("작성자가 일치 하지 않습니다.");
    }
    if (!answer) {
      throw new Error("접근할 수 없습니다.");
    }
    if (!content) {
      throw new Error("수정할 내용을 입력해주세요");
    }
  };

  // 답변글 수정
  updateAnswer = async (userId, answerId, content) => {
    const updatedAnswer = await this.answersRepository.updatedAnswer(
      userId,
      answerId,
      content
    );
    return { ...updatedAnswer, content };
  };

  // 답변글 삭제 유효성
  validateAnswerByAnswerId = async (answerId) => {
    const answer = await this.answersRepository.findAnswerById(answerId);
    console.log(answer);
    if (!answer) {
      throw new Error("답변글이 존재하지 않습니다.");
    }
    if (answer.isQuestion === true) {
      throw new Error("채택된 답변글은 삭제 할 수 없습니다.");
    }
  };

  // 답변글 삭제
  deleteMyAnswer = async (userId, answerId) => {
    const answer = await this.answersRepository.findAnswerById(answerId);
    if (userId.status === "MANAGER" || answer.userId === userId.id) {
      return await this.answersRepository.deletedAnswer(answerId);
    }
    throw new Error("접근할 수 없습니다.");
  };
}

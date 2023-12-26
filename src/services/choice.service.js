export class ChoiceService {
  constructor(choiceRepository) {
    this.choiceRepository = choiceRepository;
  }
  // 답변 채택 유효성 API
  vaildateChoice = async (userId, questionId, answerId) => {
    const answer = await this.choiceRepository.findAnswer(answerId);
    const question = await this.choiceRepository.findQuestion(questionId);
    if (question.userId !== userId.id) {
      throw new Error("작성자가 아니므로 채택할 수 없습니다.");
    }
    if (!answer || !question) {
      throw new Error("접근할 수 없습니다.");
    }
  };
  // 답변 채택 API
  updateSelectChoice = async (userId, questionId, answerId) => {
    return await this.choiceRepository.updatedSelectChoice(
      userId,
      questionId,
      answerId
    );
  };

  // 답변 채택 취소 API
  updateCancelChoice = async (userId, answerId) => {
    return await this.choiceRepository.updatedCancelChoice(userId, answerId);
  };
}

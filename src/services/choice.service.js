export class ChoiceService {
  constructor(choiceRepository) {
    this.choiceRepository = choiceRepository;
  }
  // 답변 채택 유효성 API
  vaildateChoice = async (questionId, answerId) => {
    const answer = await this.choiceRepository.findAnswer(answerId);
    const question = await this.choiceRepository.findQuestion(questionId);
    if (!answer || !question) {
      throw new Error("접근할 수 없습니다.");
    }
  };
  // 답변 채택 API
  updateChoice = async (userId, answerId) => {
    return await this.choiceRepository.updatedChoice(userId, answerId);
  };
}

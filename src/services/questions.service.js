export class QuestionsService {
  constructor(questionsSRepository) {
    this.questionsSRepository = questionsSRepository;
  }

  // 질문글 가져오기 (검색기능 X) 페이징 20개
  getQuestions = async () => {
    return await this.questionsSRepository.getManyQuestions();
  };

  // 질문글 가져오기 (검색기능 o) 페이징 20개
  findAllQuestions = async ({ keyword: encodedKeyword }) => {
    return await this.questionsSRepository.findAllQuestionsByKeyword(
      encodedKeyword
    );
  };
}

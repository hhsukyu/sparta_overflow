export class QuestionsService {
  constructor(questionsRepository) {
    this.questionsRepository = questionsRepository;
  }

  // 질문글 가져오기 (검색기능 X) 페이징 20개
  getQuestions = async () => {
    return await this.questionsRepository.getManyQuestions();
  };

  // 질문글 가져오기 (검색기능 o) 페이징 20개
  findAllQuestions = async ({ keyword: encodedKeyword }) => {
    return await this.questionsRepository.findAllQuestionsByKeyword(
      encodedKeyword
    );
  };

  // 질문글 작성하기
  createQuestion = async (userId, title, content) => {
    const createQuestion = await this.questionsRepository.createdQuestion(
      userId,
      title,
      content
    );
    return createQuestion;
  };
}

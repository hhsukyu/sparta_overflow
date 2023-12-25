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

  // 질문글 수정 유효성
  validateQuestionInfo = async (userId, questionId, title, content) => {
    const user = await this.questionsRepository.findUserByQuestionId(
      questionId
    );
    if (user.userId !== userId.id) {
      throw new Error("작성자가 일치 하지 않습니다.");
    }
    if (!title) {
      throw new Error("수정할 제목을 입력해주세요");
    }
    if (!content) {
      throw new Error("수정할 내용을 입력해주세요");
    }
  };
  // 질문글 수정하기
  updateQuestion = async (userId, questionId, title, content) => {
    const updateQuestion = await this.questionsRepository.updatedQuestion(
      userId,
      questionId,
      title,
      content
    );
    return { ...updateQuestion, title, content };
  };

  // 질문글 삭제 유효성
  validateQuestionByUserId = async (userId, questionId) => {
    const user = await this.questionsRepository.findUserByQuestionId(
      questionId
    );
    if (!user) {
      throw new Error("질문글이 존재하지 않습니다.");
    }
  };
  // 질문글 삭제
  deleteMyQuestion = async (userId, questionId) => {
    const user = await this.questionsRepository.findUserByQuestionId(
      questionId
    );
    if (userId.status === "MANAGER" || user.userId === userId.id) {
      return await this.questionsRepository.deletedQuestion(questionId);
    }
    throw new Error("접근할 수 없습니다.");
  };
}

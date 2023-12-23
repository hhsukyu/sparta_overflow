export class QuestionsRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // 질문글 가져오기 (검색기능 X) 페이징 20개
  getManyQuestions = async () => {
    return await this.prisma.questions.findMany({
      take: 20,
      orderBy: {
        createdAt: "desc",
      },
    });
  };

  // 질문글 가져오기 (검색기능 o) 페이징 20개
  findAllQuestionsByKeyword = async (encodedKeyword) => {
    return await this.prisma.questions.findMany({
      take: 20,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        OR: [
          { title: { contains: decodeURI(encodedKeyword) } },
          { content: { contains: decodeURI(encodedKeyword) } },
        ],
      },
    });
  };

  // 질문글 작성하기
  createdQuestion = async (userId, title, content, author) => {
    return await this.prisma.questions.create({
      data: { userId: userId.id, title, content, author },
    });
  };

  // 유저찾기
  findUserByQuestionId = async (questionId) => {
    return await this.prisma.questions.findUnique({
      where: { id: +questionId },
    });
  };

  // 수정하기
  updatedQuestion = async (userId, questionId, title, content) => {
    return await this.prisma.questions.update({
      where: { id: +questionId, userId: userId.id },
      data: { title, content },
    });
  };

  // 삭제하기
  deletedQuestion = async (questionId) => {
    return await this.prisma.questions.delete({
      where: { id: +questionId },
    });
  };
}

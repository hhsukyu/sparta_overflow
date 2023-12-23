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
}

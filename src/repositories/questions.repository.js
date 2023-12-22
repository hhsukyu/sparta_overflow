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
}

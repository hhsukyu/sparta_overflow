export class AnswersRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // 답변글 리스트 API
  getManyAnswers = async (questionId) => {
    return await this.prisma.answers.findMany({
      where: { questionId: +questionId },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

  // 답변글 작성하기 API
  createdAnswer = async (userId, questionId, content, author, isQuestion) => {
    return await this.prisma.answers.create({
      data: {
        userId: userId.id,
        questionId: +questionId,
        content,
        author,
        isQuestion,
      },
    });
  };
}

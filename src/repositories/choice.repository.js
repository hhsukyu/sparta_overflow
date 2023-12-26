export class ChoiceRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // 답변글 찾기
  findAnswer = async (answerId) => {
    return await this.prisma.answers.findUnique({ where: { id: +answerId } });
  };
  // 질문글 찾기
  findQuestion = async (questionId) => {
    return await this.prisma.questions.findUnique({
      where: { id: +questionId },
    });
  };
  // 답변글 채택 API
  updatedChoice = async (userId, answerId) => {
    return await this.prisma.answers.update({
      where: { id: +answerId, userId: +userId.id },
      data: {
        isQuestion: true,
      },
    });
  };
}

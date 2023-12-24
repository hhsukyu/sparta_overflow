export class asksRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // 답변글 리스트 API
  getManyAsks = async () => {
    return await this.prisma.asks.findMany({
      take: 20,
      orderBy: {
        createdAt: "desc",
      },
    });
  };
}

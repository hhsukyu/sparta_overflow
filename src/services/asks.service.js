export class AsksService {
  constructor(asksRepository) {
    this.asksRepository = asksRepository;
  }

  // 답변글 리스트 API
  getAsks = async (userId) => {
    const asks = await this.asksRepository.getManyAsks();
    if (userId.status === "MANAGER") {
      return asks;
    }
    return asks.map((ask) => {
      return {
        id: ask.id,
        userId: ask.userId,
        title: ask.title,
        content: ask.content,
        createdAt: ask.createdAt,
        updatedAt: ask.updatedAt,
      };
    });
  };
}

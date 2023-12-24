export class AsksController {
  constructor(asksService) {
    this.asksService = asksService;
  }

  // 답변글 리스트 API
  getAllAsks = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      const asks = await this.asksService.getAsks(userId);
      return res.status(200).send(asks);
    } catch (err) {
      next(err);
    }
  };
}

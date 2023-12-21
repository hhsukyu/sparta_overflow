export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  putuser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const putUser = await this.userService.updateUser(id, status);
      res.send({ message: "수정을 성공했습니다.", data: putUser });
    } catch (err) {
      next();
    }
  };
}

export class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  putuser = async (req, res, next) => {
    try {
      const userId = res.locals.user;
      console.log(userId);
      const { id } = req.params;
      const { status } = req.body;
      const putUser = await this.usersService.updateUser(id, status);
      res.send({ message: "수정을 성공했습니다.", data: putUser });
    } catch (err) {
      next();
    }
  };
}
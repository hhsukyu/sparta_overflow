export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  // 회원가입
  signUp = async (req, res, next) => {
    try {
      const { email, password, passwordConfirm } = req.body;
      vaildateUserInfo(email, password, passwordConfirm);
      const createUser = await this.authService.createUser(
        email,
        password,
        passwordConfirm
      );
      return res
        .status(200)
        .send({ message: "회원가입을 성공했습니다.", data: createUser });
    } catch (err) {
      next(err);
    }
  };
}

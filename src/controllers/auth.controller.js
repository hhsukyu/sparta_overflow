export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  // 회원가입
  signUp = async (req, res, next) => {
    try {
      const { email, password, passwordConfirm } = req.body;
      const vaildateUser = await this.authService.vaildateUserInfo(
        email,
        password,
        passwordConfirm
      );
      const user = await this.authService.existedUser(email);
      const hassPassword = await this.authService.hassedPassword(password);
      const postUser = await this.authService.createUser(email, hassPassword);
      return res
        .status(200)
        .send({ message: "회원가입을 성공했습니다.", data: postUser });
    } catch (err) {
      next(err);
    }
  };

  // 로그인
}

export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  // 회원가입
  signUp = async (req, res, next) => {
    try {
      const { email, password, passwordConfirm, nickname, status } = req.body;
      const vaildateUser = await this.authService.vaildateUserInfo(
        email,
        password,
        passwordConfirm,
        nickname
      );
      const user = await this.authService.existedUser(email);
      const hassPassword = await this.authService.hassedPassword(password);
      const postUser = await this.authService.createUser(
        email,
        hassPassword,
        status,
        nickname
      );
      return res
        .status(200)
        .send({ message: "회원가입을 성공했습니다.", data: postUser });
    } catch (err) {
      next(err);
    }
  };

  // 로그인
  signIn = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await this.authService.findByUser(email, password);

      const createAccessToken = await this.authService.createAccessToken(user);
      const authorization = createAccessToken;

      res.header("authorization", `Bearer ${authorization}`);

      return res.status(200).send({
        message: "로그인 성공했습니다.",
        authorization: authorization,
      });
    } catch (err) {
      next(err);
    }
  };
}

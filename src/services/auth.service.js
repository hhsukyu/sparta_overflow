import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PASSWORD_HASH_SALT_ROUNDS } from "../constants/security.constatnt.js";

export class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  // 유효성 검사
  vaildateUserInfo = async (email, password, passwordConfirm) => {
    if (!email || !password) {
      throw new Error("빈칸 없이 모두 작성 해주세요");
    }
    if (password.length < 6) {
      throw new Error("비밀번호는 6자리 이상이어야합니다.");
    }

    if (password !== passwordConfirm) {
      throw new Error("비밀번호가 비밀번호 확인란과 다릅니다.");
    }
  };

  // email 존재
  existedUser = async (email) => {
    const existedUser = await this.authRepository.findUser(email);
    if (existedUser) {
      throw new Error("이미 가입 된 이메일 입니다.");
    }
  };

  // hassPassword
  hassedPassword = async (password) => {
    return bcrypt.hashSync(password, 10);
  };

  // user 생성
  createUser = async (email, hassPassword) => {
    const user = await this.authRepository.createdUser(email, hassPassword);
    return user;
  };

  // 유저 찾기 이메일 비밀번호
  findByUser = async (email, password) => {
    const user = await this.authRepository.findUser(email);
    const passwordConfirm = await bcrypt.compare(password, user.password);
    if (!user || !passwordConfirm)
      throw new Error(
        "존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다."
      );
    return user;
  };
  // 토큰 만들기
  createAccessToken = async (user) => {
    const accessToken = jwt.sign(
      // JWT 데이터
      { userId: user.userId },
      // 비밀키
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: "12h" }
    );
    return accessToken;
  };
}

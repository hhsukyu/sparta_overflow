import bcrypt from "bcrypt";
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
}

export class AuthRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // 이메일로 유저 찾기
  findUser = async (email) => {
    const foundUser = await this.prisma.users.findUnique({ where: { email } });
    return foundUser;
  };

  // 유저 생성
  createdUser = async (email, hassPassword, status, nickname) => {
    return await this.prisma.users.create({
      data: { email, password: hassPassword, status, nickname },
    });
  };
}

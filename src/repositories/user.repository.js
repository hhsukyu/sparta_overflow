export class UserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // 유저 수정
  updatedUser = async (id, status) => {
    return await this.prisma.users.update({
      where: { id: +id },
      data: { status },
    });
  };
}

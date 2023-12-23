export class UsersRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }
  // // 유저 찾기 상태
  // findStatus = async (id) => {
  //   return await this.prisma.users.findUnique({
  //     where: { id: +id },
  //   });
  // };
  // 유저 수정
  updatedUser = async (id, status) => {
    return await this.prisma.users.update({
      where: { id: +id },
      data: { status },
    });
  };
}

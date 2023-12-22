export class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  // // 유저 상태 확인
  // findUserByStatus = async (id, status) => {
  //   const userStauts = await this.usersRepository.findStatus(id);
  //   console.log("12", userStauts.status);
  //   console.log("123", status);
  //   if (userStauts.status === status) {
  //     throw new Error("이미 매니저입니다.");
  //   }
  // };

  // 유저 업데이트
  updateUser = async (id, status) => {
    const updateUser = await this.usersRepository.updatedUser(id, status);
    return { ...updateUser, status };
  };
}

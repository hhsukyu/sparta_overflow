export class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  // 유저 업데이트
  updateUser = async (id, status) => {
    const updateUser = await this.usersRepository.updatedUser(id, status);
    return { ...updateUser, status };
  };
}

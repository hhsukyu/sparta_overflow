export class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  updateUser = async (id, status) => {
    console.log(id);
    console.log(status);
    const updateUser = await this.usersRepository.updatedUser(id, status);
    return { ...updateUser, status };
  };
}

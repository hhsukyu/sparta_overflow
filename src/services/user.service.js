export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  updateUser = async (id, status) => {
    const updateUser = await this.userRepository.updatedUser(id, status);
    return updateUser;
  };
}

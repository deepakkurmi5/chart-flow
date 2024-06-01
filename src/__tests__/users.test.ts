import { UsersController } from '../controller/users.controller';
import { mockRequest, mockResponse } from '../__mocks__';

describe('getUsers', () => {
  it('Should return array of all users', () => {
    const users = new UsersController();

    users.getUsers(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});

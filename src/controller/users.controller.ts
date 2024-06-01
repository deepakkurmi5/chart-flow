import { Request, Response } from 'express-serve-static-core';
import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../interfaces/user.interface';
import { CREATED_STATUS } from '../utils/reponse-status';

/**
 * user controller to handle http request
 * @Controller
 */

export class UsersController {
  constructor() {}

  getUsers(request: Request, response: Response) {
    response.send([]);
  }

  getUserById(request: Request, response: Response) {
    response.send({});
  }

  createUser(
    request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
    response: Response<User>,
  ) {
    return response.status(CREATED_STATUS).send({
      id: 'dh33',
      email: 'deepakkurmi@gmail.com',
      password: 'deepak@123',
    });
  }
}

import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "@src/dtos/create-user.dto";
import { CreateUserQueryParams } from "@src/types/query-params";
import { User } from "@src/interfaces/user.interface";
import HttpStatusCodes from "@src/constants/http-status-codes";

export class UsersController {
  constructor() {}

  getUsers(_: Request, response: Response) {
    return response.send([]);
  }

  getUserById(_: Request, response: Response) {
    return response.send({});
  }

  createUser(
    _: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
    response: Response<User>,
  ) {
    return response.status(HttpStatusCodes.CREATED).send({
      id: "dh33",
      email: "deepakkurmi@gmail.com",
      password: "deepak@123",
    });
  }
}

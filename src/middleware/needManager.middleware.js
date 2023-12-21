import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma/index.js";
const SECRET_KEY = process.env.JWT_ACCESS_TOKEN_SECRET;

export default async function (req, res, next) {
  const { authorization } = req.headers;
  const [authType, authValue] = authorization.split(" ");

  if (authType !== "Bearer") {
    res.status(400).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {
    const { userId } = jwt.verify(authValue, SECRET_KEY);
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (user.status === "STUDENT") {
      return res.status(401).send({
        errorMessage: "매니저만 수정할 수 있습니다.",
      });
    } else if (user.status === "MANAGER") {
      return res.status(400).send({
        errorMessage: "이미 매니저 입니다.",
      });
    }
    res.locals.user = user;
    next();
  } catch (error) {
    res.status(400).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
  }
}

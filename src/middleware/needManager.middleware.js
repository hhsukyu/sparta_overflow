import { prisma } from "../utils/prisma/index.js";

export default async function (req, res, next) {
  const { id } = req.params;
  const findUserManager = await prisma.users.findUnique({
    where: { status: manager },
  });
  if (!findUserManager) {
    return res.status(400).send({
      errorMessage: "매니저만 사용할 수 있습니다.",
    });
  }
  next();
}

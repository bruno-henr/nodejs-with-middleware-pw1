import { UserRepository } from "../implementation/UserRepository.js";

export const checkExistsUserAccount = (req, res, next) => {
  const { username } = req.headers;

  // Busca o usuário pelo nome de usuário
  const user = UserRepository.getInstance().list(username);
  if (!user) {
    return res.status(404).json({ error: "User not exists" });
  }

  // Adiciona o usuário à requisição para que outras rotas possam acessá-lo
  req.user = user;
  next();
};

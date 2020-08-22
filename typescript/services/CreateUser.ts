/*
* Criar usuário: nome, e-mail e senha
*/

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // Nome opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>; // Reconhece conteúdos alfanuméricos
      // techs: string[]
      // Reconhece um array de strings
}

export default function createUser({ name, email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}
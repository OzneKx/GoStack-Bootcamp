import { Request, Response } from 'express';
import createUser from '../services/CreateUser';

// string, number, boolean. object, array
// Interfaces: Definir tipagem de conjuntos de dados -> Objetos e vetores

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'kenzoalbuqk@gmail.com',
    password: '12345',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  console.log(user.email);

  return response.json({ message: 'Hello, World!' });
}

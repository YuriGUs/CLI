import { GenFile } from 'controllers/generate.controller';
import inquirer from 'inquirer';
import { IAnswers } from 'interfaces/answers.interfaces';
import { questions } from 'interfaces/questions';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();

import shellJs from 'shelljs';
import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import { EGitName } from 'enum/git-name.enum';
import { IAnswers } from 'interfaces/answers.interfaces';
import path from 'path';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName);
          break;

        case EChoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _execPath(gitName: string, folderName: string) {
    try {
      shellJs.cd(path.resolve());
      shellJs.exec(`git clone git@github.com:troquatte/${gitName}.git`);

      console.log('Arquivo criado com sucesso!');
      return shellJs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();

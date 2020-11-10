export class RegExpService {
  isValidName(name) {
    const regexp = new RegExp(/^([a-z ,.'-]){3,50}/i);

    return regexp.test(name);
  }
}

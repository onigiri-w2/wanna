export class FunctionException extends Error {}

export class UrlStatusIsNot200 extends FunctionException {
  constructor() {
    super('タイトルを正常に取得できませんでした。');
  }
}
export class NotFoundTitleTag extends FunctionException {
  constructor() {
    super('タイトルを正常に取得できませんでした');
  }
}
export class TitleLengthIsTooLong extends FunctionException {
  constructor() {
    super('タイトルは100文字以下にしてください。');
  }
}
export class UrlIsEmpty extends FunctionException {
  constructor() {
    super('urlが空です。');
  }
}

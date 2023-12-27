// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  printWidth: 80, // 줄 바꿈할 줄 길이, 가독성을 위해 80자를 초과하는 문자 사용 x
  tabWidth: 2, // 탭 너비
  useTabs: false, // 탭
  semi: true, // 세미콜론
  singleQuote: true, // 인용부호, 큰따옴표 대신 작은따옴표 사용
  quoteProps: "as-needed", // 객체 속성이 인용되는 경우 as-neede => 필요한 경우 개체 속성 주위에만 따옴표 추가
  trailingComma: "all", // 여러 줄의 쉼표로 구분된 구조에서 후행 쉼표
  bracketSpacing: true, // 객체 리터럴의 대괄호 사이의 공백
  bracketSameLine: false, ///마지막 줄 끝에 띄우기
  arrowParens: always, //화살표함수 괄호
  rangeStart: 0, // 범위 / 포맷 시작 부분
  rangeEnd: Infinity, // 범위 / 포맷 끝 부분
  parser: "", // 파서 설정 자동
  filepath: "", //파일 경로 설정 자동
  requirePragma: false, // 파일 상단에 프라그마(특수 주석) 필요
  insertPragma: false, // prettier로 형식화되었음을 지정하는 특수 @format표시 삽입
  proseWrap: "preserve", // 마크다운 텍스트의 줄 바꿈 preserve => 아무것도 하지말고 그대로
  htmlWhitespaceSensitivity: "css", // HTML, Vue, Angular 및 Handlebars 공백 민감도 css => css 속성의 기본값을 존중
  endOfLine: "auto", // 줄 끝 방식 auto =>기존 줄 끝 유지(한 파일 내의 혼합 값은 첫 번째 줄 다음에 사용된 내용을 확인하여 정규화됨)
  embeddedLanguageFormatting: "auto", // 파일에 포함된 인용 코드의 형식 지정 auto => Prettier가 자동으로 식별할 수 있는 경우 포함된 코드의 형식을 지정
  singleAttributePerLine: false, //  HTML, Vue 및 JSX에서 한 줄에 단일 속성 적용
};
export default config;

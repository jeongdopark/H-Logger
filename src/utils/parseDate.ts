export function parseDate(yyMMdd: string) {
  let year = parseInt(`20${yyMMdd.substring(0, 2)}`);
  let month = parseInt(yyMMdd.substring(2, 4));
  let day = parseInt(yyMMdd.substring(4, 6));

  // JavaScript의 월은 0부터 시작하므로, 1을 빼줍니다.
  return new Date(year, month - 1, day);
}

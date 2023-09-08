import { Context } from "./contextType";

export function findTooltipsByKeyword(
  keywordToFind: string,
  keywordTooltips: Context[]
): Context[] {
  const normalizedKeyword = keywordToFind.toLowerCase();
  return keywordTooltips.filter(
    (item) =>
      item.keyword.toLowerCase() === normalizedKeyword ||
      "." + item.keyword.toLowerCase() === normalizedKeyword
  );
}

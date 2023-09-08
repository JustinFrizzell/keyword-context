import * as vscode from "vscode";
import { findTooltipsByKeyword } from "./tooltipFinder";

export function provideHover(
  document: vscode.TextDocument,
  position: vscode.Position,
  keywordTooltips: any[],
  sourceToggle: boolean
) {
  const wordRange = document.getWordRangeAtPosition(position);
  const word = document.getText(wordRange);

  if (!word) return;

  const matchedTooltips = findTooltipsByKeyword(word, keywordTooltips);

  if (!matchedTooltips.length) return;

  const hoverText = new vscode.MarkdownString("", true);

  for (const tooltip of matchedTooltips) {
    hoverText.appendMarkdown(`- ${tooltip.tooltip}\n`);
  }

  if (sourceToggle) {
    hoverText.appendMarkdown("\n*(Keyword Context)*");
  }

  return new vscode.Hover(hoverText, wordRange);
}

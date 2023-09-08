import * as vscode from "vscode";
import { Context } from "./contextType";
import { fetchKeywordTooltips, fetchSourceToggle } from "./configManager";
import { provideHover } from "./hoverProvider";

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "keyword-context" is now active');

  let keywordTooltips: Context[] = fetchKeywordTooltips();
  let sourceToggle: boolean = fetchSourceToggle();

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("keyword-context.map")) {
      keywordTooltips = fetchKeywordTooltips();
    }
    if (event.affectsConfiguration("keyword-context.source-toggle")) {
      sourceToggle = fetchSourceToggle();
    }
  });

  const hoverProvider = vscode.languages.registerHoverProvider("*", {
    provideHover(document, position) {
      return provideHover(document, position, keywordTooltips, sourceToggle);
    },
  });
  context.subscriptions.push(hoverProvider);
}

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "keyword-context" is now active.');

  let disposable = vscode.commands.registerCommand(
    "keyword-context.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from keyword-context!");
    }
  );

  context.subscriptions.push(disposable);
}

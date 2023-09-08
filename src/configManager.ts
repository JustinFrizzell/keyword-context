import * as vscode from "vscode";
import { Context } from "./contextType";

export function fetchKeywordTooltips(): Context[] {
  return vscode.workspace.getConfiguration("keyword-context").get("map") || [];
}

export function fetchSourceToggle(): boolean {
  return !!vscode.workspace
    .getConfiguration("keyword-context")
    .get("source-toggle");
}

import * as assert from "assert";
import * as vscode from "vscode";
import { findTooltipsByKeyword } from "../../tooltipFinder";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Fetch Configuration", async () => {
    const config = vscode.workspace.getConfiguration("keyword-context");

    const mapConfig = config.get("map");
    // Always expect map to be an Array
    assert(Array.isArray(mapConfig));

    const sourceToggleConfig = config.get("source-toggle");
    // Always expect toogle to be boolean
    assert(typeof sourceToggleConfig === "boolean");
  });

  test("Find Tooltips By Keyword", () => {
    const mockTooltips = [
      { keyword: "test", tooltip: "This is a test tooltip" },
      { keyword: "example", tooltip: "This is an example tooltip" },
    ];

    const matchedTooltips = findTooltipsByKeyword("test", mockTooltips);
    assert(matchedTooltips.length === 1);
    assert(matchedTooltips[0].tooltip === "This is a test tooltip");
  });
});

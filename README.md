# Keyword Context

[![Build Status](https://dev.azure.com/justinfrizzell/Keyword%20Context/_apis/build/status%2FJustinFrizzell.keyword-context?branchName=main)](https://dev.azure.com/justinfrizzell/Keyword%20Context/_build/latest?definitionId=1&branchName=main)

A Visual Studio Code extension that provides user-supplied hover context for keywords detected in the editor. Once defined in settings.json, a tooltip will appear over keywords displaying the supplied message.

## Use cases

- You've inherited a code base full of poorly named functions and variables and are unable to change them. Using Keyword Context you can add your own notes or definitions which will appear on hover
- You use long IDs with special meanings and want to add context to avoid manually looking them up
- You're learning to code in a new language and want to add notes to keywords

![Screenshot showing tooltip](https://raw.githubusercontent.com/JustinFrizzell/keyword-context/main/usage.png)

## Usage

Once installed in Visual Studio Code, add your keywords and the associated tooltip messages to settings.json:

```json
[
    {
        "keyword": "some_badly_named_variable",
        "tooltip": "This variable is used for..."
    },
    {
        "keyword": "some_badly_named_function",
        "tooltip": "This function does..."
    },
    {
        "keyword": "ID_234873",
        "tooltip": "This ID refers to..."
    },
    ...
]
```

## Settings

| Settings                      | Default     | Description                                                                                                                                                                              |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword-context.map           | `[...,...]` | Array of Context objects, each Context must contain the keys "keyword" and "tooltip". The value given to "tooltip" will appear when the value of "keyword" is hovered over in the editor |
| keyword-context.source-toggle | `False`     | Setting to control if the extension source "Keyword Context" is shown after the tooltip.                                                                                                 |

## License

[MIT License](https://github.com/JustinFrizzell/keyword-context/blob/main/LICENSE)

Icon created by Smashicons

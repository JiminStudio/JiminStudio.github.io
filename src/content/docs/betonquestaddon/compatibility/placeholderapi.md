---
title: PlaceholderAPI
description: Compatibility with PlaceholderAPI
slug: betonquestaddon/compatibility/placeholderapi
---

Compatibility with PlaceholderAPI

## **Conditions**
- `PAPI`

Automatically detects and compares numbers and strings with optional case sensitivity.

| Parameter    | Syntax  | Default | Explanation                                           |
|--------------|---------|---------|-------------------------------------------------------|
| `ignoreCase` | Boolean | false   | Supports optional case-insensitive string comparison. |

```yaml
# PAPI <first> <operator> <second> [options]

conditions:
  papiName: PAPI player_name == MyName ignoreCase:true # player_name is MyName / ignoreCase is true = true
  papiLevel: PAPI player_level >= 123
```
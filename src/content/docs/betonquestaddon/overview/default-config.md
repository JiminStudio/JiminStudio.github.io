---
title: Default config
description: Preferences configuration file.
slug: betonquestaddon/overview/default-config
---

Preferences configuration file.
```yaml
objectives:
  chatObjective:
    # The argument name that is required to control chat message cancellation.
    # This must be set and cannot be left blank; leaving it empty may cause errors.
    # Default value: "cancel"
    argumentName: "cancel"
```

## chat Objective
The name of the argument used to control whether the chat message should be cancelled. This is a required field, and leaving it blank may cause errors. The default value is **`cancel`**.
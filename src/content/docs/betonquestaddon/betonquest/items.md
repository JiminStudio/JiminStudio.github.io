---
title: Items
description: List of Powerful Items for BetonQuest
slug: betonquestaddon/betonquest/items
---

List of Powerful Items for BetonQuest

# BetonQuestAddon Items
Define [BetonQuestAddon items](https://jiminstudio.github.io/betonquestaddon/configuration/items/) using the `bqa` prefix followed by the item ID.
```yaml
# bqa <itemId>

items:
  bqaItem: bqa example_item

conditions:
  hasBqaItem: item bqaItem

events:
  giveBqaItem: give bqaItem
```
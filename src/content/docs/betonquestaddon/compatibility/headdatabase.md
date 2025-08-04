---
title: HeadDatabase
description: Compatibility with HeadDatabase
slug: betonquestaddon/compatibility/headdatabase
---

Compatibility with HeadDatabase

## **Conditions**
- `hdbBlock`

Checks if a specific HeadDatabase block exists at the given location.

```yaml
# hdbBlock <blockId> <x;y;z;world>

conditions:
  hasHdbBlock: hdbBlock 7129 40;72;3;world
```

## **Item**
Define HeadDatabase items using the `hdb` prefix followed by the item ID.

```yaml
# hdb id

items:
  hdbItem: hdb 7129

conditions:
  hasHdbItem: item hdbItem

events:
  giveHdbItem: give hdbItem
```
---
title: ItemsAdder
description: Compatibility with ItemsAdder
slug: betonquestaddon/compatibility/itemsadder
---

Compatibility with ItemsAdder

## **Conditions**
**ItemsAdder Block Condition: `iaBlock`**\
Checks if a specific ItemsAdder block exists at the given location.

```yaml
# iaBlock <blockId> <x;y;z;world>

conditions:
  hasRubyOre: iaBlock namespace:ruby_ore 40;72;3;world
```

## **Events**
**ItemsAdder Block Event: `iaBlockAt`**\
Changes the block at the specified location to an ItemsAdder block.

**ItemsAdder Animation Event: `iaPlayAnimation`**\
Plays a custom ItemsAdder animation.

| Parameter   | Syntax             | Default  | Description                                 |
|-------------|--------------------|----------|---------------------------------------------|
| `blockId`   | namespace:ruby_ore | Required | The ItemsAdder block ID                     |
| `location`  | x;y;z;world        | Required | Coordinates and world where block is placed |
| `animation` | ruby_shine         | Optional | Animation ID (used in `iaPlayAnimation`)    |

```yaml
# iaBlockAt <blockId> <x;y;z;world>
# iaPlayAnimation <animationID>

events:
  placeRubyOre: iaBlockAt namespace:ruby_ore 40;72;3;world
  playShine: iaPlayAnimation ruby_shine
```

## **Objectives**
**ItemsAdder Block Objectives: `iaBlockBreak`, `iaBlockPlace`**\
Requires players to break or place a specific number of ItemsAdder blocks.

| Parameter | Syntax             | Default  | Description                                |
|-----------|--------------------|----------|--------------------------------------------|
| `blockId` | namespace:ruby_ore | Required | The ItemsAdder block ID                    |
| `amount`  | amount:x           | 1        | Number of blocks to break or place         |
| `notify`  | notify:number      | Disabled | Notify player with a message (1 to enable) |

```yaml
# iaBlockPlace <blockId> [amount:x] [notify:number]
# iaBlockBreak <blockId> [amount:x] [notify:number]

objectives:
  placeRubyOre: iaBlockPlace namespace:ruby_ore amount:3
  breakRubyOre: iaBlockBreak namespace:ruby_ore amount:5 notify:1
```

## **Items**
Define ItemsAdder items in BetonQuest using the `ia` prefix followed by the full item ID.

```yaml
# ia namespace:id

items:
  iaItem: ia namespace:ruby

conditions:
  hasIaItem: item iaItem

events:
  giveIaItem: give iaItem
```
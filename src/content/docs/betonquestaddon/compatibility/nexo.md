---
title: Nexo
description: Compatibility with Nexo
slug: betonquestaddon/compatibility/nexo
---

Compatibility with Nexo

## Conditions

**Nexo Block Condition: `nxBlock`**\
Checks if a specific Nexo block exists at the given location.

```yaml
# nxBlock <blockId> <x;y;z;world>
conditions:
  hasRubyOre: nxBlock ruby_ore 40;72;3;world
```

## Event
- For blocks: `nxBlockAt`
- For furniture: `nxFurnitureAt`

Changes the block or furniture at the specified location to a Nexo block or furniture.

| Parameter   | Syntax                                                                          | Default  | Explanation                                     |
|-------------|---------------------------------------------------------------------------------|----------|-------------------------------------------------|
| `id`        | ruby_ore                                                                        | Required | The Nexo block or furniture ID                  |
| `location`  | x;y;z;world                                                                     | Required | The target coordinates and world name           |
| `rotation`  | [Rotation](https://jd.papermc.io/paper/1.21.8/org/bukkit/Rotation.html)         | Required | The rotation of the Furniture `only Furniture`  |
| `blockFace` | [BlockFace](https://jd.papermc.io/paper/1.21.8/org/bukkit/block/BlockFace.html) | Required | The blockFace of the Furniture `only Furniture` |

```yaml
# nxBlockAt <blockId> <x;y;z;world>
# nxFurnitureAt <furnitureId> <x;y;z;world> <rotation> <blockFace>

events:
  placeRubyOre: nxBlockAt ruby_ore 40;72;3;world
  placeFurniture: nxFurnitureAt arm_chair 40;72;3;world none self
```

## **Objectives**

**Nexo Block Objectives: `nxBlockBreak`, `nxBlockPlace`**\
Players must break or place a number of specified Nexo blocks.

| Parameter | Syntax        | Default  | Explanation                     |
|-----------|---------------|----------|---------------------------------|
| `blockId` | ruby_ore      | Required | The Nexo block ID               |
| `amount`  | amount:x      | 1        | Number of blocks to break/place |
| `notify`  | notify:number | Disabled | Notify player with a message    |
```yaml
# nxBlockPlace <blockId> [amount:x] [notify:number]
# nxBlockBreak <blockId> [amount:x] [notify:number]

objectives:
  placeRubyOre: nxBlockPlace ruby_ore amount:3
  breakRubyOre: nxBlockBreak ruby_ore amount:5 notify:1
```

## Item

Define Nexo items using the `nexo` prefix followed by the item ID.

```yaml
# nexo ruby
items:
  nexoRuby: nexo ruby

conditions:
  hasNexoRuby: item nexoRuby

events:
  giveNexoRuby: give nexoRuby
```
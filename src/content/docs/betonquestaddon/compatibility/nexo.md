---
title: Nexo
description: Compatibility with Nexo
slug: betonquestaddon/compatibility/nexo
---

Compatibility with Nexo

## Conditions
- nxBlock

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
- For Blocks: `nxBlockBreak`, `nxBlockPlace`, `nxBlockInteract`
- For Furniture: `nxFurnitureBreak`, `nxFurniturePlace`, `nxFurnitureInteract`

Players must break, place, or interact with a number of specified Nexo blocks or furniture.

| Parameter | Syntax        | Default  | Explanation                    |
|-----------|---------------|----------|--------------------------------|
| `id`      | ruby_ore      | Required | The Nexo block or furniture ID |
| `amount`  | amount:x      | 1        | Number to break/place/interact |
| `notify`  | notify:number | Disabled | Notify player with a message   |
```yaml
# Block objectives
# nxBlockPlace <blockId> [amount:x] [notify:number]
# nxBlockBreak <blockId> [amount:x] [notify:number]
# nxBlockInteract <blockId> [amount:x] [notify:number]

objectives:
  placeBlock: nxBlockPlace ruby_ore amount:3
  breakBlock: nxBlockBreak ruby_ore amount:5 notify:1
  interactBlock: nxBlockInteract ruby_ore

  # Furniture objectives
  # nxFurniturePlace <furnitureId> [amount:x] [notify:number]
  # nxFurnitureBreak <furnitureId> [amount:x] [notify:number]
  # nxFurnitureInteract <furnitureId> [amount:x] [notify:number]
  
  placeFurniture: nxFurniturePlace arm_chair amount:3
  breakFurniture: nxFurnitureBreak arm_chair amount:5 notify:1
  interactFurniture: nxFurnitureInteract arm_chair
```
:::tip
If you use **`interact`** with a **block** or **furniture**, you can provide additional arguments.\
These are optional, and are listed below.

| Parameter | Syntax  | Default | Explanation         |
|-----------|---------|---------|---------------------|
| `cancel`  | Boolean | false   | Event cancellation. |
```yaml
# nxBlockInteract / nxFurnitureInteract <Id> [cancel]

objectives:
  interactBlock: nxBlockInteract ruby_ore
  interactFurniture: nxFurnitureInteract arm_chair cancel
``` 
:::

## **Item**
Define Nexo items using the `nexo` prefix followed by the item ID.

```yaml
# nexo <itemId>

items:
  nxItem: nexo ruby

conditions:
  hasNxItem: item nxItem

events:
  giveNxItem: give nxItem
```
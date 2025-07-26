---
title: CraftEngine
description: Compatibility with CraftEngine
slug: betonquestaddon/compatibility/craftengine
---

Compatibility with CraftEngine

## Conditions
- For Blocks: `ceBlock`
- ~~For Furniture: `ceFurniture`~~

Checks whether a specific CraftEngine block or furniture exists at the given location.

```yaml
# ceBlock <blockId> <x;y;z;world>
# ceFurniture <furnitureId> <x;y;z;world>

conditions:
  hasChineseLantern: ceBlock default:chinese_lantern 40;72;3;world
  hasWoodenChair: ceFurniture default:wooden_chair 40;72;3;world
```

## Event
- For blocks: `ceBlockAt`
- For furniture: `ceFurnitureAt`

Changes the block or furniture at the specified location to a CraftEngine block or furniture.

| Parameter   | Syntax            | Default  | Explanation                                       |
|-------------|-------------------|----------|---------------------------------------------------|
| `id`        | namespace:item_id | Required | The CraftEngine block or furniture ID             |
| `location`  | x;y;z;world       | Required | The target coordinates and world name             |
| `playSound` | playSound:boolean | false    | Whether to play a sound when the object is placed |

```yaml
# ceBlockAt <blockId> <x;y;z;world> [playSound:boolean]
# ceFurnitureAt <furnitureId> <x;y;z;world> [playSound:boolean]

events:
  placeRubyOre: ceBlockAt namespace:ruby_ore 40;72;3;world
  placePalm: ceBlockAt default:palm_sapling 40;72;3;world playSound:true
  placeChair: ceFurnitureAt default:wooden_chair 42;72;5;world
```

## **Objectives**

- For Blocks: `ceBlockBreak`, `ceBlockPlace`, `ceBlockInteract`
- For Furniture: `ceFurnitureBreak`, `ceFurniturePlace`, `ceFurnitureInteract`

Players must break, place, or interact with a number of specified CraftEngine blocks or furniture.

| Parameter | Syntax               | Default  | Explanation                           |
|-----------|----------------------|----------|---------------------------------------|
| `id`      | default:wooden_chair | Required | The CraftEngine block or furniture ID |
| `amount`  | amount:x             | 1        | Number to break/place/interact        |
| `notify`  | notify:number        | Disabled | Notify player with a message          |
```yaml
# Block objectives
# ceBlockPlace <blockId> [amount:x] [notify:number]
# ceBlockBreak <blockId> [amount:x] [notify:number]
# ceBlockInteract <blockId> [amount:x] [notify:number]

objectives:
  placeBlock: ceBlockPlace default:netherite_anvil amount:3
  breakBlock: ceBlockBreak default:netherite_anvil amount:5 notify:1
  interactBlock: ceBlockInteract default:netherite_anvil

  # Furniture objectives
  # ceFurniturePlace <furnitureId> [amount:x] [notify:number]
  # ceFurnitureBreak <furnitureId> [amount:x] [notify:number]
  # ceFurnitureInteract <furnitureId> [amount:x] [notify:number]
  
  placeFurniture: ceFurniturePlace default:wooden_chair amount:3
  breakFurniture: ceFurnitureBreak default:wooden_chair amount:5 notify:1
  interactFurniture: ceFurnitureInteract default:wooden_chair
```
:::tip
If you use **`interact`** with a **block** or **furniture**, you can provide additional arguments.\
These are optional, and are listed below.

| Parameter | Syntax  | Default | Explanation         |
|-----------|---------|---------|---------------------|
| `cancel`  | Boolean | false   | Event cancellation. |
```yaml
# ceBlockInteract / ceFurnitureInteract <Id> [cancel]

objectives:
  interactBlock: ceBlockInteract default:netherite_anvil
  interactFurniture: ceFurnitureInteract default:wooden_chair cancel
``` 
:::

## Item

Define CraftEngine items using the `ce` prefix followed by the item ID.

```yaml
# ce <itemId>

items:
  ceItem: ce default:palm_sapling

conditions:
  hasCeItem: item ceItem

events:
  giveCeItem: give ceItem
```
---
title: AdvancedEnchantments
description: Compatibility with AdvancedEnchantments
slug: betonquestaddon/compatibility/advancedenchantments
---

Compatibility with AdvancedEnchantments

## **Event**
-  `aeEnchant`

Powerful event with AdvancedEnchantments feature.

| Parameter   | Syntax            | Default  | Explanation                                       |
|-------------|-------------------|----------|---------------------------------------------------|
| `name`      | String`Your File` | Required | The AE Enchantment name                           |
| `level`     | Integer           | Required | The AE Enchantment Level                          |

```yaml
# aeEnchant <name> <level>

events:
  aeApplyEnchant: aeEnchant diploid 3
```
:::tip
**Level**\
Otherwise, check the enchantments list at `./plugins/AdvancedEnchantments/enchantments.yml`.
```yaml
diploid: # This part
  display: '%group-color%Diploid'
  ##############
  levels:
    '5': # x part
      chance: 30
      ##############
```
If you want to use the highest level.\
You can set it to **`-1`** or higher than **`x`**.\
x is the number in the `x part` like the file above.
```yaml
events:
  aeApplyEnchantMax1: aeEnchant diploid -1 # is max
  aeApplyEnchantMax2: aeEnchant diploid 99 # is max
```
:::

## **Objectives**
- `aeBookOpen`

Players must with a number of specified AdvancedEnchantments event.

| Parameter | Syntax               | Default  | Explanation                                             |
|-----------|----------------------|----------|---------------------------------------------------------|
| `group`   | ANY, List`Your File` | Required | The AdvancedEnchantments Group ID<br/>only `aeBookOpen` |
| `amount`  | amount:x             | 1        | Number to event                                         |
| `notify`  | notify:number        | Disabled | Notify player with a message                            |
```yaml
# aeBookOpen <group> [amount:x] [notify]
# aeTinkererTrade [amount:x] [notify]
# aeAlchemistTrade [amount:x] [notify]

objectives:
  
  # aeBookOpen
  aeBookOpenUNIQUE: aeBookOpen UNIQUE amount:2
  aeBookOpenANY: aeBookOpen ANY amount:2 notify

  # aeTinkererTrade
  aeTinkererTrade: aeTinkererTrade

  # aeAlchemistTrade
  aeAlchemistTrade: aeAlchemistTrade
```
:::note[How to get groups?]
If you know how AE groups work, it's easy to set up.\
Otherwise, check the group list at `./plugins/AdvancedEnchantments/groups.yml`.
```yaml
groups:
  SIMPLE: # This part
    global-color: "&7"
    group-name: "Simple"
    item:
      type: FIREWORK_CHARGE
      id: 0
      custom-model-data: 0
      rgb-color: 200;200;200
    slot-increaser:
      slots: 1
      custom-model-data: 0
    magic-dust:
      success: 1-15
      chance: 22
```
:::
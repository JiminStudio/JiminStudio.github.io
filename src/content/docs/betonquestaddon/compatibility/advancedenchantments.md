---
title: AdvancedEnchantments
description: Compatibility with AdvancedEnchantments
slug: betonquestaddon/compatibility/advancedenchantments
---

Compatibility with AdvancedEnchantments

## **Objectives**
- `aeBookOpen`

Players must with a number of specified AdvancedEnchantments event.

| Parameter | Syntax               | Default  | Explanation                       |
|-----------|----------------------|----------|-----------------------------------|
| `group`   | ANY, List`your File` | Required | The AdvancedEnchantments Group ID |
| `amount`  | amount:x             | 1        | Number to event                   |
| `notify`  | notify:number        | Disabled | Notify player with a message      |
```yaml
# aeBookOpen <group> [amount:x] [notify]

objectives:
  # aeBookOpen
  aeBookOpenUNIQUE: aeBookOpen UNIQUE amount:2
  aeBookOpenANY: aeBookOpen ANY amount:2 notify
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
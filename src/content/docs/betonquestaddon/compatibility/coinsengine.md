---
title: CoinsEngine
description: Compatibility with CoinsEngine
slug: betonquestaddon/compatibility/coinsengine
---

Compatibility with CoinsEngine

## Conditions

**CoinsEngine Coin Condition: `coins`**\
Checks if the player has the specified amount of coins.

```yaml
# coins currencyId amount

conditions:
  hasCoins: coins coins 100
```

:::tip
Invert this condition if you want to check if the player has less coins than specified. Example:

```yaml
conditions:
  isRich: coins coins 100000
events:
  giveSubsidy: coins coins +500 conditions:!isRich
```
:::

## Event

**CoinsEngine Coin Event: `coins`**\
Adds, removes, multiplies, or sets the number of coins in the player's account.

| Parameter | Syntax            | Default  | Explanation                                                    |
|-----------|-------------------|----------|----------------------------------------------------------------|
| `amount`  | Number            |          | The amount of money to add or remove.<br> Use `*` to multiply. |
| `notify`  | Keyword: `notify` | Disabled | Display a message to the player when their balance is changed. |

```yaml
# coins -currencyId amount notify

events:
  add_coins: coins coins +1000
  take_coins: coins coins -1000
  multiply_coins: coins coins *2 notify
  set_coins: coins coins 10000 notify
```

:::note[Notify]
If you use `notify`, the player will receive a message about the coin balance change.\
Add the following lines to your `plugins/BetonQuest/lang/.yml` file

```yaml
bqa_coins_given: '@[legacy]&aYou received {amount}'
bqa_coins_taken: '@[legacy]&cYou lost {amount}'
bqa_coins_reset: '@[legacy]&eYour balance has been set to {amount}.'
``` 
#### When each message is triggered
* `bqa_coins_given` — When the amount is **greater than 0**
* `bqa_coins_taken` — When the amount is **less than 0**
* `bqa_coins_reset` — When the amount is **exactly 0**

**Available Placeholders**

* `{amount}` — displays the amount along with the currency symbol (e.g. `1,000₩`). <br>
This format (amount + symbol) is defined in your **CoinsEngine** plugin configuration.
* `{currencyName}` — the name of the currency (e.g. "Coins")
* `{currencySymbol}` — the symbol of the currency (e.g. "$", "₩", "⛃")
:::
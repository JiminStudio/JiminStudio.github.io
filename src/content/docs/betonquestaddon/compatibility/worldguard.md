---
title: WorldGuard
description: Compatibility with WorldGuard
slug: betonquestaddon/compatibility/worldguard
---

Compatibility with WorldGuard
## **Conditions**
- `wgIsOwner`
- `wgIsMember`
- `wgFlags`

Checks the owners, members, and flags of a WorldGuard region.

```yaml
# wgIsOwner [region]
# wgIsMember [region]
# wgFlags <region> <hasParser> <flags>

conditions:
  wgIsOwnerFromHere: wgIsOwner # player's region
  wgIsOwnerFromTest: wgIsOwner test
  
  wgIsMemberFromHere: wgIsMember
  wgIsMemberFromTest1: wgIsMember test1
  
  wgHasFlagsCheckFromTest2: wgFlags test2 has build
  wgAnyFlagsCheckFromTest2: wgFlags test2 any build,pvp
```
LootJS.modifiers(e => {
    e.addEntityLootModifier("friendsandfoes:wildfire")
        .addWeightedLoot(
            [2, 4],
            [
                LootEntry.of('minecraft:ancient_debris', 2),
                LootEntry.of('minecraft:gold_block', 1),
                LootEntry.of('minecraft:gold_ingot', 4)
            ]
        );
});
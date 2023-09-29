LootJS.modifiers(e => {
    e.addEntityLootModifier('minecraft:enderman')
        .anyDimension("minecraft:the_end")
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:chorus_fruit', 1).when(c => c.randomChance(0.3)))
            p.applyLootingBonus([1, 3])
        });

    e.addEntityLootModifier('minecraft:endermite')
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:chorus_fruit', 1).when(c => c.randomChance(0.3)))
            p.applyLootingBonus([1, 3])
        });

    e.addEntityLootModifier('minecraft:phantom')
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:string', 1).when(c => c.randomChance(0.3)))
            p.applyLootingBonus([1, 3])
        });
});
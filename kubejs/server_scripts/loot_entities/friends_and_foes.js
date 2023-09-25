LootJS.modifiers(e => {
    e.addEntityLootModifier("minecraft:friendsandfoes:wildfire")
        .addWeightedLoot(
            [2, 4],
            [
                LootEntry.of('minecraft:ancient_debris', 2),
                LootEntry.of('minecraft:gold_block', 1),
                LootEntry.of('minecraft:gold_ingot', 4)
            ]
        );

    e.addEntityLootModifier('minecraft:enderman')
        .anyDimension("minecraft:the_end")
        .pool( p=> {
            p.addLoot(LootEntry.of('minecraft:chorus_fruit', 1).when(c => c.randomChance(0.6)))
            p.applyLootingBonus([1,3])
        })
        

})
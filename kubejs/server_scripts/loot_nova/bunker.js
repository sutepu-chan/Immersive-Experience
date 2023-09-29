LootJS.modifiers(e => {
    e.addLootTableModifier('nova_structures:chests/conduit_ruin')
        .addLoot('minecraft:nautilus_shell')
        .addWeightedLoot(
            [2, 4],
            [
                LootEntry.of('minecraft:prismarine_shard', 3).when(c => c.randomChance(0.56)),
                LootEntry.of('minecraft:prismarine_crystals', 4).when(c => c.randomChance(0.56)),   
            ]
        )
})
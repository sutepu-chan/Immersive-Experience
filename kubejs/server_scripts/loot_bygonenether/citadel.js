LootJS.modifiers(e => {
    e.addLootTableModifier('bygonenether:chests/citadel')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 0.6
                },
            })
            .when(c => c.randomChance(0.2)))
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.5)))
        .addLoot(LootEntry.of('bygonenether:warped_ender_pearl', 2))
        .addAlternativesLoot(
            LootEntry.of('irons_spellbooks:silver_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:cooldown_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:heavy_chain_necklace').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:emerald_stoneplate_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:fireward_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:frostward_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:cast_time_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:conjurers_talisman').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:poisonward_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:concentration_amulet').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:affinity_ring').customFunction({ function: "irons_spellbooks:randomize_ring_enhancement" }).when(c => c.randomChance(0.1)),
        )
        .addWeightedLoot(
            [8, 12],
            [
                LootEntry.of('minecraft:iron_block', 4).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:gold_block', 3).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:diamond_block', 2).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:netherite_ingot', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:ancient_debris', 1).when(c => c.randomChance(0.6))
            ]
        )
});
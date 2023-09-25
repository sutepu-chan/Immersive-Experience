LootJS.modifiers(e => {
    e.addLootTableModifier('betteroceanmonuments:chests/upper_side_chamber')
        .removeLoot(Ingredient.all)
        .addLoot('endrem:exotic_eye')
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.3)))
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
            [4, 8],
            [
                Item.of('minecraft:iron_ingot', 2).withChance(0.1),
                Item.of('minecraft:gold_ingot', 2).withChance(0.1),
                Item.of('minecraft:copper_ingot', 3).withChance(0.15),
                Item.of('minecraft:diamond', 1).withChance(0.02),

                Item.of('epicsamurai:silver_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:amethyst_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:quartz_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:ruby', 3).withChance(0.1),
                Item.of('epicsamurai:jade', 3).withChance(0.1),
                Item.of('epicsamurai:aquamarine', 3).withChance(0.1),
                Item.of('epicsamurai:onyx', 3).withChance(0.1),

                Item.of('epicpaladins:arclight_gem', 3).withChance(0.1),
                Item.of('epicpaladins:moonlight_gem', 3).withChance(0.1),
                Item.of('epicpaladins:bloodstone_gem', 3).withChance(0.1),
                Item.of('epicpaladins:cryorium_gem', 3).withChance(0.1),
            ]
        )
})
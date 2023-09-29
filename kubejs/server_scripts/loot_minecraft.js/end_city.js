LootJS.modifiers(e => {

    e.addLootTableModifier('minecraft:chests/end_city_treasure')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('majruszsdifficulty:enderium_upgrade_smithing_template').when(c => c.randomChance(0.2)))
        .addWeightedLoot(
            [6, 10],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.4)),

                LootEntry.of('minecraft:netherite_ingot', 1).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:netherite_scrap', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:ancient_debris', 2).when(c => c.randomChance(0.2))
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.2)))


    e.addLootTableModifier('minecraft:chests/end_idle')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [8, 10],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('minecraft:quartz', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('epicpaladins:moonlight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.2)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.6)),
        )
        .addWeightedLoot(
            [4, 8],
            [
                LootEntry.of('minecraft:purpur_block', 4).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:purpur_pillar', 4).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:chorus_flower', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:popped_chorus_fruit', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:shulker_shell', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:purple_stained_glass_pane', 4).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:end_rod', 2).when(c => c.randomChance(0.4))
            ]
        )

})
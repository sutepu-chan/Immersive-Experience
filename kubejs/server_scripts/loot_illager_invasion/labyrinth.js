LootJS.modifiers(e => {
    e.addLootTableModifier('illagerinvasion:chests/labyrinth')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.1))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [3, 4],
            [
                LootEntry.of('minecraft:beetroot', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:red_mushroom', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:brown_mushroom', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:potato', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:glow_berries', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:sweet_berries', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:melon_slice', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:wheat', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:cookie', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:pumpkin_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:rice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:rice_panicle', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:onion', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:tomato', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:cabbage', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:cake_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:sweet_berry_cheesecake_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('untamedwilds:food_aardvark_cucumber', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:brown_mushroom_colony', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:red_mushroom_colony', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('minecraft:cake', 1).when(c => c.randomChance(0.01)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:golden_apple', 2).when(c => c.randomChance(0.6)),
            LootEntry.of('minecraft:golden_carrot', 4).when(c => c.randomChance(0.8)),
        )
        .addWeightedLoot(
            [10, 14],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),
            ]
        )
        .addWeightedLoot(
            [4, 5],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:emerald', 6).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.2)),

            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 0.6
                },
            })
            .when(c => c.randomChance(0.1)))


    e.addLootTableModifier('illagerinvasion:chests/sorcerer_hut')
        .addWeightedLoot(
            [2, 3],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:emerald', 6).when(c => c.randomChance(0.8)),
            ]
        )
        .addWeightedLoot(
            [5, 8],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),
            ]
        )
})
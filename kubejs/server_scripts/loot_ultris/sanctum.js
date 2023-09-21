LootJS.modifiers(e => {
    e.addLootTableModifier('1_splatus:chests/sanctum_common')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.2)),
            LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.3)),
        )
        .addWeightedLoot(
            [2, 5],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
            ]
        )
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.6)),
            ]
        )


    e.addLootTableModifier('1_splatus:chests/sanctum_lab')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [4, 5],
            [
                LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.5)),
            ]
        )
        .addWeightedLoot(
            [3, 5],
            [
                LootEntry.of('minecraft:glistering_melon_slice', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:potion', { Potion: "minecraft:water" }).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:redstone', 4).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:glass_bottle', 2).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:experience_bottle', 1).when(c => c.randomChance(0.4))
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.4,
                    "max": 0.8
                },
            })
            .when(c => c.randomChance(0.7)))



    e.addLootTableModifier('1_splatus:chests/sanctum_top')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.2)))
        .addWeightedLoot(
            [2, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.8)),
            ]
        )
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('epicpaladins:moonlight_gem', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.2)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('simplyswords:runic_longsword').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_twinblade').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_rapier').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_katana').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_sai').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_spear').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_glaive').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_cutlass').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_claymore').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_chakram').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_greataxe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_greathammer').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_warglaive').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_scythe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:runic_halberd').when(c => c.randomChance(0.1))
        )
});
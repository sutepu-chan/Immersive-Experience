LootJS.modifiers(e => {
    e.addLootTableModifier('betterfortresses:chests/beacon')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [3, 7],
            [
                LootEntry.of('minecraft:arrow', 4).when(c => c.randomChance(0.3)),
                LootEntry.of('nyfsarcheryplus:iron_tipped_arrow', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('nyfsarcheryplus:golden_tipped_arrow', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:fire_charge', 4).when(c => c.randomChance(0.5)),

            ]
        )
        .addAlternativesLoot(
            LootEntry.of('nyfsarcheryplus:iron_bow').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:bow').when(c => c.randomChance(0.6)),
        )
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('nyfsarcheryplus:iron_bow').when(c => c.randomChance(0.02)),
                LootEntry.of('minecraft:bow').when(c => c.randomChance(0.3)),
            )
            p.enchantWithLevels([20, 30]);
        })

    e.addLootTableModifier('betterfortresses:chests/extra')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [2, 5],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
            ]
        )
        .addWeightedLoot(
            [3, 4],
            [
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:glowstone_dust', 3).when(c => c.randomChance(0.5)),
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.2,
                    "max": 0.8
                },
            })
            .when(c => c.randomChance(0.2)))

    e.addLootTableModifier('betterfortresses:chests/hall')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [2, 5],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
            ]
        )
        .addWeightedLoot(
            [3, 4],
            [
                LootEntry.of('minecraft:leather', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gilded_blackstone', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:blackstone', 14).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:ghast_tear', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:nether_brick', 12).when(c => c.randomChance(0.25)),
                LootEntry.of('minecraft:glowstone_dust', 4).when(c => c.randomChance(0.2)),
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.2,
                    "max": 0.8
                },
            })
            .when(c => c.randomChance(0.2)))


    e.addLootTableModifier('betterfortresses:chests/keep')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:flint', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:coal', 5).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.3)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.005)),
            LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.005)),
            LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.005)),
            LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.05)),
        )
        .addWeightedLoot(
            [0, 1],
            [
                LootEntry.of('simplyswords:iron_glaive').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_spear').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_sai').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_katana').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_rapier').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_twinblade').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_longsword').when(c => c.randomChance(0.08)),
                LootEntry.of('minecraft:iron_sword').when(c => c.randomChance(0.08)),
                LootEntry.of('minecraft:iron_axe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_halberd').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_scythe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_chakram').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_greataxe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_greathammer').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_claymore').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_cutlass').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_warglaive').when(c => c.randomChance(0.08)),
            ]
        )


    e.addLootTableModifier('betterfortresses:chests/obsidian')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [10, 12],
            [
                LootEntry.of('minecraft:obsidian', 4).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:crying_obsidian', 1).when(c => c.randomChance(0.6)),
                LootEntry.of('regions_unexplored:cobalt_obsidian', 2).when(c => c.randomChance(0.6)),
                LootEntry.of('nourished_nether:glowing_obsidian', 2).when(c => c.randomChance(0.6))
            ]
        )
        .addWeightedLoot(
            [4, 4],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.15)),
            ]
        )

    e.addLootTableModifier('betterfortresses:chests/puzzle')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.5)))
        .addWeightedLoot(
            [4, 4],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.18)),
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.6,
                    "max": 1.0
                },
            }))
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('simplyswords:runic_longsword').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_twinblade').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_rapier').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_katana').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_sai').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_spear').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_glaive').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_cutlass').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_claymore').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_chakram').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_greataxe').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_greathammer').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_warglaive').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_scythe').when(c => c.randomChance(0.05)),
                LootEntry.of('simplyswords:runic_halberd').when(c => c.randomChance(0.05))
            )
            p.enchantWithLevels(30);
        })

    e.addLootTableModifier('betterfortresses:chests/quarters')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [3, 5],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:quartz', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('epicpaladins:moonlight_gem', 2).when(c => c.randomChance(0.3)),
            ]
        )
        .addWeightedLoot(
            [4, 4],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.18)),
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

    e.addLootTableModifier('betterfortresses:chests/storage')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [1, 3],
            [
                LootEntry.of('regions_unexplored:hanging_earlight_fruit', 5).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:brown_mushroom', 5).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:red_mushroom', 5).when(c => c.randomChance(0.2)),
                LootEntry.of('farmersdelight:brown_mushroom_colony', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:red_mushroom_colony', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:basalt', 10).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:soul_sand', 10).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:magma_block', 10).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:glowstone', 10).when(c => c.randomChance(0.4))
            ]
        )
        .addWeightedLoot(
            [8, 8],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.18)),
            ]
        )

    e.addLootTableModifier('betterfortresses:chests/worship')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.5)))
        .addWeightedLoot(
            [3, 6],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.4)),

            ]
        )
        .addWeightedLoot(
            [4, 4],
            [
                LootEntry.of('minecraft:netherite_ingot').when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:netherite_scrap', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:ancient_debris', 2).when(c => c.randomChance(0.2))
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('simplyswords:runic_longsword').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_twinblade').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_rapier').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_katana').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_sai').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_spear').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_glaive').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_cutlass').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_claymore').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_chakram').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_greataxe').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_greathammer').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_warglaive').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_scythe').when(c => c.randomChance(0.05)),
            LootEntry.of('simplyswords:runic_halberd').when(c => c.randomChance(0.05))
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.3)))
})
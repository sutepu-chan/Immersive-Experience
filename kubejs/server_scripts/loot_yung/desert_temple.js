LootJS.modifiers(e => {
    e.addLootTableModifier('betterdeserttemples:chests/food_storage')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [6, 6],
            [
                LootEntry.of('minecraft:beetroot', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:red_mushroom', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:brown_mushroom', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:potato', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:glow_berries', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:sweet_berries', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:melon_slice', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:wheat', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:cookie', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:pumpkin_slice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:rice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:rice_panicle', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:onion', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:tomato', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:cabbage', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:cake_slice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:sweet_berry_cheesecake_slice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('untamedwilds:food_aardvark_cucumber', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:brown_mushroom_colony', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:red_mushroom_colony', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:cake', 1).when(c => c.randomChance(0.05)),
            ]
        )
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.4)),
            ]
        )

    e.addLootTableModifier('betterdeserttemples:chests/lab')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [8, 12],
            [
                LootEntry.of('minecraft:glistering_melon_slice', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:potion', { Potion: "minecraft:water" }).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:redstone', 4).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:glass_bottle', 2).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:experience_bottle', 1).when(c => c.randomChance(0.4))
            ]
        )


    e.addLootTableModifier('betterdeserttemples:chests/library')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.1)))
        .addWeightedLoot(
            [4, 6],
            [
                Item.of('minecraft:paper', 3).withChance(0.6),
                Item.of('minecraft:book', 2).withChance(0.6),
                Item.of('minecraft:compass', 1).withChance(0.14),
                Item.of('minecraft:map', 1).withChance(0.08),
                Item.of('minecraft:name_tag', 1).withChance(0.08),
                Item.of('minecraft:iron_ingot', 2).withChance(0.3),
                Item.of('minecraft:gold_ingot', 2).withChance(0.3),
                Item.of('minecraft:gold_nugget', 5).withChance(0.5),
                Item.of('minecraft:iron_nugget', 5).withChance(0.5),
                Item.of('minecraft:diamond', 1).withChance(0.02),
                Item.of('minecraft:lapis_lazuli', 4).withChance(0.3)
            ]
        )
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.6)));
            p.enchantWithLevels([15, 20]);
        })

    e.addLootTableModifier('betterdeserttemples:chests/pharaoh_hidden')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [5, 8],
            [
                LootEntry.of('minecraft:sand', 4).withChance(0.6),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('simplyswords:gold_longsword').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_twinblade').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_rapier').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_katana').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_sai').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_spear').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_glaive').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_warglaive').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:golden_axe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_scythe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_halberd').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_claymore').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_chakram').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_greataxe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_greathammer').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:gold_cutlass').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:golden_sword').when(c => c.randomChance(0.1))
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:dune_armor_trim_smithing_template').when(c => c.randomChance(0.4)),
            LootEntry.of('minecraft:eye_armor_trim_smithing_template').when(c => c.randomChance(0.4))
        )
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

    e.addLootTableModifier('betterdeserttemples:chests/pot')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [2, 3],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:coal', 7).when(c => c.randomChance(0.7)),
            ]
        )
        .addWeightedLoot(
            [4, 5],
            [
                LootEntry.of('minecraft:potato', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:wheat', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:terracotta', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:sand', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:red_sand', 4).when(c => c.randomChance(0.4))
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:dune_armor_trim_smithing_template').when(c => c.randomChance(0.4)),
            LootEntry.of('minecraft:eye_armor_trim_smithing_template').when(c => c.randomChance(0.4))
        )

    e.addLootTableModifier('betterdeserttemples:chests/statue')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 7],
            [
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.6)),

            ]
        )

    e.addLootTableModifier('betterdeserttemples:chests/storage')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [8, 12],
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
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.2)),
            ]
        )
        .addWeightedLoot(
            [5, 8],
            [
                LootEntry.of('minecraft:cobweb', 1).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:stick', 2).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.7)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.05)),
            LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.2)),
        )


    e.addLootTableModifier('betterdeserttemples:chests/tomb')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [5, 6],
            [
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.7)),
            ]
        )
        .addWeightedLoot(
            [4, 4],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
            ]
        )


    e.addLootTableModifier('betterdeserttemples:chests/tomb_pharaoh')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addAlternativesLoot(
            LootEntry.of('minecraft:dune_armor_trim_smithing_template').when(c => c.randomChance(0.4)),
            LootEntry.of('minecraft:eye_armor_trim_smithing_template').when(c => c.randomChance(0.4))
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.4)))
        .addWeightedLoot(
            [5, 7],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.6)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('simplyswords:runic_longsword').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_twinblade').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_rapier').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_katana').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_sai').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_spear').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_glaive').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_cutlass').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_claymore').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_chakram').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_greataxe').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_greathammer').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_warglaive').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_scythe').when(c => c.randomChance(0.01)),
            LootEntry.of('simplyswords:runic_halberd').when(c => c.randomChance(0.01))
        )
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

    e.addLootTableModifier('betterdeserttemples:chests/wardrobe')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .pool(p => {
            p.addWeightedLoot[
                [0, 2],
                [
                    LootEntry.of('epicsamurai:white_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:white_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:white_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:white_samurai_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:iron_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:iron_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:iron_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:iron_samurai_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicpaladins:knight_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicpaladins:knight_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicpaladins:knight_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicpaladins:knight_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:steel_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:steel_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:steel_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:steel_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gray_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gray_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gray_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gray_samurai_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:green_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:green_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:green_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:green_samurai_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:blue_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:blue_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:blue_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:blue_samurai_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:red_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:red_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:red_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:red_samurai_helmet').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gold_samurai_boots').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gold_samurai_leggings').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gold_samurai_chestplate').when(c => c.randomChance(0.06)),
                    LootEntry.of('epicsamurai:gold_samurai_helmet').when(c => c.randomChance(0.06)),
                ]
            ]
            p.enchantWithLevels([0, 20])
        })
        .addWeightedLoot(
            [5, 6],
            [
                LootEntry.of('minecraft:white_wool', 3).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:yellow_wool', 4).when(c => c.randomChance(0.7)),
            ]
        )
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
})
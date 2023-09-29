LootJS.modifiers(e => {
    e.addLootTableModifier('nova_structures:chests/hamlet/hamlet')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [6, 8],
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
        .addWeightedLoot(
            [8, 14],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:quartz', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('epicpaladins:moonlight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:netherite_ingot', 1).when(c => c.randomChance(0.005)),
                LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.02)),
                LootEntry.of('minecraft:ancient_debris', 1).when(c => c.randomChance(0.02))
            ]
        )
        .addWeightedLoot(
            [0, 2],
            [
                LootEntry.of('minecraft:netherite_upgrade_smithing_template').when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:snout_armor_trim_smithing_template').when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:piglin_banner_pattern').when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:music_disc_pigstep').when(c => c.randomChance(0.3)),
            ]
        )

    e.addLootTableModifier('nova_structures:chests/hamlet/hamlet_tresure')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [6, 8],
            [
                LootEntry.of('minecraft:diamond_block', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:gold_block', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_block', 4).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:emerald_block', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:netherite_ingot', 1).when(c => c.randomChance(0.1))
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.2,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.4)))
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
            p.enchantWithLevels(30, true);
        })
})
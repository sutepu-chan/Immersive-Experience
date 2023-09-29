LootJS.modifiers(e => {
    e.addLootTableModifier('deeperdarker:chests/ancient_temple_apex')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.6)))
        .addLoot(LootEntry.of('deeperdarker:warden_upgrade_smithing_template').when(c => c.randomChance(0.8)))
        .addWeightedLoot(
            [5, 6],
            [
                LootEntry.of('minecraft:sculk', 7).when(c => c.randomChance(0.41)),
                LootEntry.of('deeperdarker:sculk_bone', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('deeperdarker:grime_brick', 6).when(c => c.randomChance(0.37)),
                LootEntry.of('deeperdarker:grime_ball', 6).when(c => c.randomChance(0.34)),
                LootEntry.of('deeperdarker:crystallized_amber', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('deeperdarker:warden_carapace', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:echo_shard', 5).when(c => c.randomChance(0.37)),
                LootEntry.of('minecraft:sculk_sensor', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:sculk_catalyst', 3).when(c => c.randomChance(0.5)),
            ]
        )
        .addWeightedLoot(
            [0, 2],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.5))
            ]
        )
        .addWeightedLoot(
            [6, 8],
            [
                LootEntry.of('minecraft:diamond_block', 2).when(c => c.randomChance(0.12)),
                LootEntry.of('minecraft:gold_block', 3).when(c => c.randomChance(0.24)),
                LootEntry.of('minecraft:iron_block', 4).when(c => c.randomChance(0.22)),
                LootEntry.of('minecraft:emerald_block', 3).when(c => c.randomChance(0.23)),
                LootEntry.of('minecraft:netherite_ingot', 1).when(c => c.randomChance(0.11))
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.6,
                    "max": 0.8
                },
            })
            .when(c => c.randomChance(0.3)))
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

    e.addLootTableModifier('deeperdarker:chests/ancient_temple_basement')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:sculk', 7).when(c => c.randomChance(0.41)),
                LootEntry.of('deeperdarker:soul_dust', 3).when(c => c.randomChance(0.38)),
                LootEntry.of('deeperdarker:sculk_bone', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('deeperdarker:grime_brick', 6).when(c => c.randomChance(0.37)),
                LootEntry.of('deeperdarker:grime_ball', 6).when(c => c.randomChance(0.34)),
                LootEntry.of('deeperdarker:crystallized_amber', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('deeperdarker:warden_carapace', 1).when(c => c.randomChance(0.1)),
            ]
        )
        .addWeightedLoot(
            [10, 14],
            [
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.55)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.55)),
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.3)),
            ]
        )
        .pool(p => {
            p.addWeightedLoot(
                [2, 4],
                [
                    LootEntry.of('minecraft:diamond_helmet').when(c => c.randomChance(0.1)),
                    LootEntry.of('minecraft:diamond_chestplate').when(c => c.randomChance(0.1)),
                    LootEntry.of('minecraft:diamond_leggings').when(c => c.randomChance(0.1)),
                    LootEntry.of('minecraft:diamond_boots').when(c => c.randomChance(0.1))
                ]
            )
            p.enchantWithLevels(25, true)
        })


    e.addLootTableModifier('deeperdarker:chests/ancient_temple_secret')
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.8,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.5)))
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
            [3, 6],
            [
                LootEntry.of('minecraft:diamond_block', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:netherite_block', 1).when(c => c.randomChance(0.12)),
                LootEntry.of('advancednetherite:netherite_iron_ingot', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('advancednetherite:netherite_gold_ingot', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('advancednetherite:netherite_emerald_ingot', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('advancednetherite:netherite_diamond_ingot', 1).when(c => c.randomChance(0.3))
            ]
        )

    e.addLootTableModifier('deeperdarker:chests/ancient_temple_storage')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .addWeightedLoot(
            [2, 5],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.6)),
            ]
        )
        .addWeightedLoot(
            [10, 12],
            [
                LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:amethyst_shard', 5).when(c => c.randomChance(0.5)),

                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),


                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.35)),

                LootEntry.of('minecraft:ancient_debris', 1).when(c => c.randomChance(0.18)),
                LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.14)),
            ]
        )
})
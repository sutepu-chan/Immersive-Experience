LootJS.modifiers(e => {

    e.addLootTableModifier('nova_structures:chests/stray_fort_archer')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('minecraft:bow').when(c => c.randomChance(0.33)),
                LootEntry.of('nyfsarcheryplus:iron_bow').when(c => c.randomChance(0.33)),
                LootEntry.of('nyfsarcheryplus:golden_bow').when(c => c.randomChance(0.33))
            )
            p.damage([0.01, 0.5]);
            p.enchantWithLevels([0, 20]);
        })
        .addWeightedLoot(
            [5, 6],
            [
                LootEntry.of('minecraft:feather', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:flint', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:stick', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:arrow', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('nyfsarcheryplus:iron_tipped_arrow', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('nyfsarcheryplus:golden_tipped_arrow', 1).when(c => c.randomChance(0.2)),
            ]
        )


    e.addLootTableModifier('nova_structures:chests/stray_fort_loot_generic')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [4, 7],
            [
                LootEntry.of('minecraft:snow_block', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:carved_pumpkin', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:pumpkin_pie', 2).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:cooked_rabbit', 2).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:sweet_berries', 4).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:ice', 5).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:packed_ice', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:blue_ice', 1).when(c => c.randomChance(0.1)),
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
            .when(c => c.randomChance(0.2)))
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
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),
            ]
        )


    e.addLootTableModifier('nova_structures:chests/stray_fort_tresure')
        .removeLoot(Ingredient.all)
        .addLoot('minecraft:music_disc_strad')
        .addLoot('minecraft:skull_banner_pattern')
        .addLoot('minecraft:wild_armor_trim_smithing_template')
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.4,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.6)))
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
            );
            p.enchantWithLevels([15, 30]);
        })
        .addWeightedLoot(
            [8, 12],
            [
                LootEntry.of('minecraft:iron_block', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:golden_block', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:emerald_block', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:diamond', 2).when(c => c.randomChance(0.4)),
            ]
        )
        .addWeightedLoot(
            [3, 5],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.6)),
            ]
        )

})
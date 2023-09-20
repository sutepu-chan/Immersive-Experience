LootJS.modifiers(e => {
    e.addLootTableModifier('betterjungletemples:chests/campsite')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.1)))
        .addWeightedLoot(
            [5, 7],
            [
                LootEntry.of('minecraft:cobweb', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:stick', 2).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.5)),
            ]
        )
        .addWeightedLoot(
            [2, 3],
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
        );


    e.addLootTableModifier('betterjungletemples:chests/treasure')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [12, 20],
            [
                LootEntry.of('minecraft:diamond', 4).when(c => c.randomChance(0.6)),
                LootEntry.of('epicsamurai:ruby', 4).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:emerald', 8).when(c => c.randomChance(0.9)),
            ]
        )
        .addLoot('simplyswords:empowered_remnant')
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
            p.enchantWithLevels(30);
        })
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.6,
                    "max": 0.8
                },
            })
            .when(c => c.randomChance(0.8)))
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
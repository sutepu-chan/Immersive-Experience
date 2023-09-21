LootJS.modifiers(e => {
    e.addLootTableModifier('1_splatus:ultris/chests/blazetower_treasure')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.2)))
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
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
            [4, 6],
            [
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('epicpaladins:moonlight_gem', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.2)),
            ]
        )
        .pool( p => {
            p.addAlternativesLoot(
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
            );
            p.enchantWithLevels(25);
        })
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 0.6
                },
            })
            .when(c => c.randomChance(0.6)))
})
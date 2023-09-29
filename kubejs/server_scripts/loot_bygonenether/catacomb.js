LootJS.modifiers(e => {
    e.addLootTableModifier('bygonenether:chests/catacomb/treasure_rib')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 6],
            [
                LootEntry.of('minecraft:diamond_block', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:iron_block', 4).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:gold_block', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:netherite_block', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('advancednetherite:netherite_iron_ingot', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('advancednetherite:netherite_gold_ingot', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('advancednetherite:netherite_emerald_ingot', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('advancednetherite:netherite_diamond_ingot', 1).when(c => c.randomChance(0.3))
            ]
        )
        .addWeightedLoot(
            [8, 12],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:netherite_ingot', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:ancient_debris', 1).when(c => c.randomChance(0.6))
            ]
        )
        .addWeightedLoot(
            [6, 8],
            [
                LootEntry.of('minecraft:obsidian', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:crying_obsidian', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('regions_unexplored:cobalt_obsidian', 4).when(c => c.randomChance(0.3)),
                LootEntry.of('nourished_nether:glowing_obsidian', 4).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:soul_sand', 4).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:soul_soil', 4).when(c => c.randomChance(0.8)),
                LootEntry.of('bygonenether:withered_blackstone', 6).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:polished_blackstone_bricks', 6).when(c => c.randomChance(0.6))
            ]
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
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.4,
                    "max": 1.0
                },
            }))
});
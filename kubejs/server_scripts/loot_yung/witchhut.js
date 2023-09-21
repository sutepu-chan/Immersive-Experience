LootJS.modifiers(e => {
    e.addLootTableModifier('betterwitchhuts:chests/hut_0')
        .removeLoot(Ingredient.all)
        .addLoot('endrem:witch_pupil')
        .addAlternativesLoot(
            LootEntry.of('minecraft:phantom_membrane', 2).when(c => c.randomChance(0.15)),
            LootEntry.of('minecraft:pufferfish', 1).when(c => c.randomChance(0.15)),
            LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.25)),
            LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.3)),
        )
        .addWeightedLoot(
            [5, 8],
            [
                Item.of('minecraft:sugar', 1).withChance(0.45),
                Item.of('minecraft:gunpowder', 2).withChance(0.30),
                Item.of('minecraft:spider_eye', 6).withChance(0.30),
                Item.of('minecraft:slime_ball', 6).withChance(0.30),
            ]
        )
        .addWeightedLoot(
            [2, 4],
            [
                LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.2)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:potion', '{Potion:"irons_spellbooks:instant_mana_two"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:bulldrogioth"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"illagerinvasion:strong_berserking"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"aquamirae:potion_of_tenacity"}').when(c => c.randomChance(0.10))
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.1,
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
            LootEntry.of('irons_spellbooks:affinity_ring', 1).customFunction({ function: "irons_spellbooks:randomize_ring_enhancement" }).when(c => c.randomChance(0.1)),
        )

});
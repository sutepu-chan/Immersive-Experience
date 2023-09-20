LootJS.modifiers(e => {
    //addAlternativesLoot(...items)
    //addWeightedLoot(NumberProvider, [...items]) or 
    const armorTypes = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];
    e.addLootTableModifier('betterwitchhuts:chests/hut_0')
        .removeLoot(Ingredient.all)
        .addLoot('endrem:witch_pupil')
        .addAlternativesLoot([
            LootEntry.of('minecraft:phantom_membrane', 2).when(c => c.randomChance(0.15)),
            LootEntry.of('minecraft:pufferfish', 1).when(c => c.randomChance(0.15)),
            LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.25)),
            LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.3)),
        ])
        .addWeightedLoot(
            [6, 12],
            [
                Item.of('minecraft:sugar', 1).withChance(0.45),
                Item.of('minecraft:gunpowder', 2).withChance(0.30),
                Item.of('minecraft:redstone', 4).withChance(0.50),
                Item.of('minecraft:iron_ingot', 2).withChance(0.60),
                Item.of('minecraft:lapis_lazuli', 6).withChance(0.50),
                Item.of('minecraft:spider_eye', 6).withChance(0.30),
                Item.of('minecraft:slime_ball', 6).withChance(0.30),
            ]
        )
        .addAlternativesLoot([
            LootEntry.of('minecraft:potion', '{Potion:"irons_spellbooks:instant_mana_two"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:bulldrogioth"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"illagerinvasion:strong_berserking"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"aquamirae:potion_of_tenacity"}').when(c => c.randomChance(0.10))
        ]);

});
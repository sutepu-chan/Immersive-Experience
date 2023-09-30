LootJS.modifiers(e => {
    //fix loot drop
    e.addEntityLootModifier('fromtheshadows:nehemoth')
        .addLoot('fromtheshadows:crystallized_blood');

    e.addEntityLootModifier('fromtheshadows:bulldrogioth')
        .pool(p => {
            p.addLoot('fromtheshadows:crimson_shell');
            p.applyLootingBonus([1, 3])
        })
})
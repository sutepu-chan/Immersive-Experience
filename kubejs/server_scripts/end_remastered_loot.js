LootJS.modifiers(e => {
    //blaze king
    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:nether_eye');
    e.addEntityLootModifier('minecraft:blaze')
        .anyStructure(['1_splatus:blaze_king_tower'], true)
        .addLoot('endrem:nether_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:cursed_eye');
    e.addEntityLootModifier('minecraft:piglin_brute')
        .randomChance(0.3)
        .addLoot('endrem:cursed_eye');

    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('endrem:undead_soul');
    e.addEntityLootModifier('mutantmonsters:mutant_zombie').addLoot('endrem:undead_soul');

    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('endrem:magical_eye');
    e.addEntityLootModifier('minecraft:illusioner').addLoot('endrem:magical_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:cold_eye');
    e.addEntityLootModifier('aquamirae:maw').addLoot('endrem:cold_eye');

});
let nbtItems = [
    'enderchests:ender_chest',
    'enderchests:ender_bag',
    'touhou_little_maid:garage_kit',
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'minecraft:leather_helmet',
    'minecraft:leather_chestplate',
    'minecraft:leather_leggings',
    'minecraft:leather_boots',
    'doggytalents:dog_bed',
];

nbtItems.forEach(nbtItem => {
    REIEvents.hide('item', e => {
        e.hide(Item.of(nbtItem).ignoreNBT());
    });
    REIEvents.hide('item', e => {
        e.add(Item.of(nbtItem, '{}'));;
    });
});
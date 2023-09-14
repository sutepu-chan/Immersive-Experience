ServerEvents.recipes(e => {
    e.replaceInput({ output: 'mtr:station_color_concrete' }, '#minecraft:wool', '#c:concretes');
    e.replaceInput({ output: 'mtr:station_color_concrete_powder' }, '#minecraft:wool', '#c:concrete_powders');
    e.replaceInput({ output: 'mtr:station_color_iron_block' }, '#minecraft:wool', '#forge:storage_blocks/iron');
    e.replaceInput({ output: 'mtr:station_color_birch_wood' }, '#minecraft:wool', 'minecraft:birch_log');
    e.replaceInput({ output: 'mtr:station_color_planks' }, '#minecraft:wool', '#minecraft:planks');
    e.replaceInput({ output: 'mtr:station_color_stained_glass' }, '#minecraft:wool', 'minecraft:glass');

    let mtrItems = [
        'mtr:station_color_cobblestone',
        'mtr:station_color_coal_ore',
        'mtr:station_color_clay',
        'mtr:station_color_chiseled_stone_bricks',
        'mtr:station_color_chiseled_quartz_block',
        'mtr:station_color_bone_block',
        'mtr:station_color_andesite',
        'mtr:station_color_wool',
        'mtr:station_color_stone_bricks',
        'mtr:station_color_stone',
        'mtr:station_color_snow_block',
        'mtr:station_color_smooth_stone',
        'mtr:station_color_smooth_quartz',
        'mtr:station_color_quartz_pillar',
        'mtr:station_color_quartz_bricks',
        'mtr:station_color_quartz_block',
        'mtr:station_color_purpur_pillar',
        'mtr:station_color_purpur_block',
        'mtr:station_color_polished_diorite',
        'mtr:station_color_polished_andesite',
        'mtr:station_color_metal',
        'mtr:station_color_gravel',
        'mtr:station_color_diorite',
        'mtr:station_color_dark_prismarine',
        'mtr:station_color_cracked_stone_bricks',
        'mtr:station_color_concrete',
        'mtr:station_color_concrete_powder',
        'mtr:station_color_iron_block',
        'mtr:station_color_birch_wood',
        'mtr:station_color_planks',
        'mtr:station_color_stained_glass'
    ];
    mtrItems.forEach(item => {
        e.replaceInput({ output: item }, '#c:dyes', '#minecraft:wool');
    });

});
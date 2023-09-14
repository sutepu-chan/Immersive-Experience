ServerEvents.tags('item', e => {
    e.add('forge:storage_blocks', [
        '#forge:storage_blocks/jade',
        '#forge:storage_blocks/steel',
        '#forge:storage_blocks/arclight',
        '#forge:storage_blocks/cryorium',
        '#forge:storage_blocks/bloodstone',
        '#forge:storage_blocks/moonlight',
        '#forge:storage_blocks/ruby',
        '#forge:storage_blocks/aquamarine',
        '#forge:storage_blocks/onyx',
        '#forge:storage_blocks/silver',
    ])
    e.add('forge:storage_blocks/jade', ['epicsamurai:jade_block', 'epicpaladins:jade_block']);
    e.add('forge:storage_blocks/steel', ['epicpaladins:steel_block', 'epicsamurai:steel_block']);
    e.add('forge:storage_blocks/arclight', ['epicpaladins:arclight_block']);
    e.add('forge:storage_blocks/cryorium', ['epicpaladins:cryorium_block']);
    e.add('forge:storage_blocks/bloodstone', ['epicpaladins:bloodstone_block']);
    e.add('forge:storage_blocks/moonlight', ['epicpaladins:moonlight_block']);
    e.add('forge:storage_blocks/ruby', ['epicsamurai:ruby_block']);
    e.add('forge:storage_blocks/aquamarine', ['epicsamurai:aquamarine_block']);
    e.add('forge:storage_blocks/onyx', ['epicsamurai:onyx_block']);
    e.add('forge:storage_blocks/silver', ['epicsamurai:silver_block']);
    e.add('forge:planks', [
        /regions_unexplored:.+planks/
    ]);
    e.add('minecraft:planks', [
        /regions_unexplored:.+planks/
    ]);

    e.add('curios:head', [
        'epicsamurai:kitsune_mask',
        'epicsamurai:oni_mask',
        'epicsamurai:mask_straw_hat',
        'epicsamurai:straw_hat',
    ]);

    //#region quest
    e.add('quest:weapons/stone', [
        'minecraft:stone_sword',
        'minecraft:stone_axe',
    ]);
    e.add('quest:weapons/iron', [
        'minecraft:iron_sword',
        'minecraft:iron_axe',
        '#simplyswords:iron_gear'
    ]);
    e.add('quest:weapons/diamond', [
        'minecraft:diamond_sword',
        'minecraft:diamond_axe',
        '#simplyswords:diamond_gear'
    ]);
    e.add('quest:weapons/netherite', [
        'minecraft:netherite_sword',
        'minecraft:netherite_axe',
        '#simplyswords:netherite_gear'
    ]);
})

ServerEvents.tags('block', e => {
    //#region domum ornamentum
    const stoneworkDO = [
        'stoneworks:andesite_bricks',
        'stoneworks:mossy_cobbled_andesite',
        'stoneworks:cobbled_andesite',
        'stoneworks:stone_plates',
        'stoneworks:stone_pavers',
        'stoneworks:stone_shingles',
        'stoneworks:stone_pillar',
        'stoneworks:cracked_stone_tiles',
        'stoneworks:stone_tiles',
        'stoneworks:chiseled_diorite',
        'stoneworks:cracked_diorite_bricks',
        'stoneworks:mossy_diorite_bricks',
        'stoneworks:diorite_bricks',
        'stoneworks:mossy_cobbled_diorite',
        'stoneworks:cobbled_diorite',
        'stoneworks:granite_plates',
        'stoneworks:granite_pavers',
        'stoneworks:granite_shingles',
        'stoneworks:granite_pillar',
        'stoneworks:cracked_granite_tiles',
        'stoneworks:granite_tiles',
        'stoneworks:chiseled_granite',
        'stoneworks:cracked_granite_bricks',
        'stoneworks:mossy_granite_bricks',
        'stoneworks:granite_bricks',
        'stoneworks:mossy_cobbled_granite',
        'stoneworks:cobbled_granite',
        'stoneworks:andesite_plates',
        'stoneworks:andesite_pavers',
        'stoneworks:andesite_shingles',
        'stoneworks:andesite_pillar',
        'stoneworks:cracked_andesite_tiles',
        'stoneworks:andesite_tiles',
        'stoneworks:chiseled_andesite',
        'stoneworks:cracked_andesite_bricks',
        'stoneworks:mossy_andesite_bricks',
        'stoneworks:deepslate_pillar',
        'stoneworks:mossy_deepslate_bricks',
        'stoneworks:mossy_cobbled_deepslate',
        'stoneworks:diorite_plates',
        'stoneworks:diorite_pavers',
        'stoneworks:diorite_shingles',
        'stoneworks:diorite_pillar',
        'stoneworks:cracked_diorite_tiles',
        'stoneworks:diorite_tiles',
        'stoneworks:tuff_shingles',
        'stoneworks:tuff_pillar',
        'stoneworks:cracked_tuff_tiles',
        'stoneworks:tuff_tiles',
        'stoneworks:chiseled_tuff',
        'stoneworks:polished_tuff',
        'stoneworks:cracked_tuff_bricks',
        'stoneworks:mossy_tuff_bricks',
        'stoneworks:tuff_bricks',
        'stoneworks:mossy_cobbled_tuff',
        'stoneworks:cobbled_tuff',
        'stoneworks:calcite_plates',
        'stoneworks:calcite_pavers',
        'stoneworks:calcite_shingles',
        'stoneworks:calcite_pillar',
        'stoneworks:cracked_calcite_tiles',
        'stoneworks:calcite_tiles',
        'stoneworks:chiseled_calcite',
        'stoneworks:polished_calcite',
        'stoneworks:cracked_calcite_bricks',
        'stoneworks:mossy_calcite_bricks',
        'stoneworks:calcite_bricks',
        'stoneworks:mossy_cobbled_calcite',
        'stoneworks:cobbled_calcite',
        'stoneworks:deepslate_plates',
        'stoneworks:deepslate_pavers',
        'stoneworks:deepslate_shingles',
        'stoneworks:basalt_tiles',
        'stoneworks:chiseled_basalt',
        'stoneworks:cracked_basalt_bricks',
        'stoneworks:mossy_basalt_bricks',
        'stoneworks:basalt_bricks',
        'stoneworks:mossy_cobbled_basalt',
        'stoneworks:cobbled_basalt',
        'stoneworks:tuff_plates',
        'stoneworks:tuff_pavers',
        'stoneworks:polished_end_stone',
        'stoneworks:cracked_end_stone_bricks',
        'stoneworks:mossy_end_stone_bricks',
        'stoneworks:mossy_cobbled_end_stone',
        'stoneworks:cobbled_end_stone',
        'stoneworks:nether_brick_plates',
        'stoneworks:nether_brick_pavers',
        'stoneworks:nether_brick_shingles',
        'stoneworks:nether_brick_pillar',
        'stoneworks:polished_netherrack',
        'stoneworks:cracked_netherrack_bricks',
        'stoneworks:mossy_netherrack_bricks',
        'stoneworks:netherrack_bricks',
        'stoneworks:cobbled_netherrack',
        'stoneworks:blackstone_plates',
        'stoneworks:blackstone_pavers',
        'stoneworks:blackstone_shingles',
        'stoneworks:blackstone_pillar',
        'stoneworks:cracked_blackstone_tiles',
        'stoneworks:blackstone_tiles',
        'stoneworks:mossy_blackstone_bricks',
        'stoneworks:mossy_cobbled_blackstone',
        'stoneworks:cobbled_blackstone',
        'stoneworks:basalt_plates',
        'stoneworks:basalt_pavers',
        'stoneworks:basalt_shingles',
        'stoneworks:cracked_basalt_tiles',
        'stoneworks:cobbled_purpur',
        'stoneworks:raw_purpur',
        'stoneworks:end_stone_plates',
        'stoneworks:end_stone_pavers',
        'stoneworks:end_stone_shingles',
        'stoneworks:end_stone_pillar',
        'stoneworks:cracked_end_stone_tiles',
        'stoneworks:end_stone_tiles',
        'stoneworks:chiseled_end_stone',
        'stoneworks:mossy_dark_prismarine_bricks',
        'stoneworks:dark_prismarine_bricks',
        'stoneworks:mossy_cobbled_dark_prismarine',
        'stoneworks:cobbled_dark_prismarine',
        'stoneworks:raw_dark_prismarine',
        'stoneworks:prismarine_plates',
        'stoneworks:prismarine_pavers',
        'stoneworks:prismarine_pillar',
        'stoneworks:cracked_prismarine_tiles',
        'stoneworks:prismarine_tiles',
        'stoneworks:chiseled_prismarine',
        'stoneworks:polished_prismarine',
        'stoneworks:cracked_prismarine_bricks',
        'stoneworks:mossy_prismarine_bricks',
        'stoneworks:prismarine_bricks',
        'stoneworks:mossy_cobbled_prismarine',
        'stoneworks:cobbled_prismarine',
        'stoneworks:purpur_pavers',
        'stoneworks:purpur_shingles',
        'stoneworks:cracked_purpur_tiles',
        'stoneworks:purpur_tiles',
        'stoneworks:chiseled_purpur',
        'stoneworks:polished_purpur',
        'stoneworks:cracked_purpur_bricks',
        'stoneworks:mossy_purpur_bricks',
        'stoneworks:purpur_bricks',
        'stoneworks:mossy_cobbled_purpur',
        'stoneworks:cobbled_sandstone',
        'stoneworks:dark_prismarine_plates',
        'stoneworks:dark_prismarine_shingles',
        'stoneworks:dark_prismarine_pillar',
        'stoneworks:cracked_dark_prismarine_tiles',
        'stoneworks:dark_prismarine_tiles',
        'stoneworks:chiseled_dark_prismarine',
        'stoneworks:polished_dark_prismarine',
        'stoneworks:cracked_dark_prismarine_bricks',
        'stoneworks:quartz_tiles',
        'stoneworks:polished_quartz',
        'stoneworks:cracked_quartz_bricks',
        'stoneworks:mossy_quartz_bricks',
        'stoneworks:mossy_cobbled_quartz',
        'stoneworks:cobbled_quartz',
        'stoneworks:red_sandstone_plates',
        'stoneworks:red_sandstone_pavers',
        'stoneworks:red_sandstone_shingles',
        'stoneworks:red_sandstone_pillar',
        'stoneworks:cracked_red_sandstone_tiles',
        'stoneworks:red_sandstone_tiles',
        'stoneworks:cracked_red_sandstone_bricks',
        'stoneworks:mossy_red_sandstone_bricks',
        'stoneworks:red_sandstone_bricks',
        'stoneworks:mossy_cobbled_red_sandstone',
        'stoneworks:cobbled_red_sandstone',
        'stoneworks:sandstone_plates',
        'stoneworks:sandstone_pavers',
        'stoneworks:sandstone_shingles',
        'stoneworks:sandstone_pillar',
        'stoneworks:cracked_sandstone_tiles',
        'stoneworks:sandstone_tiles',
        'stoneworks:cracked_sandstone_bricks',
        'stoneworks:mossy_sandstone_bricks',
        'stoneworks:sandstone_bricks',
        'stoneworks:mossy_cobbled_sandstone',
        'stoneworks:quartz_plates',
        'stoneworks:quartz_pavers',
        'stoneworks:quartz_shingles',
        'stoneworks:cracked_quartz_tiles',
    ];
    e.add('domum_ornamentum:extra_block', stoneworkDO);

    const cataclysmDO = [
        'cataclysm:enderite_block',
        'cataclysm:witherite_block',
        'cataclysm:ignitium_block',
        'cataclysm:dungeon_block',
        'cataclysm:polished_end_stone',
        'cataclysm:chiseled_end_stone_bricks',
        'cataclysm:end_stone_pillar',
        'cataclysm:void_infused_end_stone_bricks',
        'cataclysm:void_stone',
        'cataclysm:void_lantern_block',
        'cataclysm:obsidian_bricks',
        'cataclysm:chiseled_obsidian_bricks',
        'cataclysm:chiseled_purpur_block',
        'cataclysm:purpur_void_rune_trap_block',
        'cataclysm:end_stone_teleport_trap_bricks',
        'cataclysm:obsidian_explosion_trap_bricks',
        'cataclysm:chorus_planks',
        'cataclysm:stone_pillar',
        'cataclysm:chiseled_stone_brick_pillar',
        'cataclysm:stone_tiles'
    ];
    e.add('domum_ornamentum:extra_block', cataclysmDO);

    const nourishedNetherDO = [
        'nourished_nether:cracked_sludge_bricks',
        'nourished_nether:chiseled_sludge_bricks',
        'nourished_nether:sludge_bricks',
        'nourished_nether:soul_quartz_block',
        'nourished_nether:cracked_soul_quartz_bricks',
        'nourished_nether:soul_quartz_bricks',
        'nourished_nether:soul_quartz_pillar',
        'nourished_nether:chiseled_soul_quartz',
        'nourished_nether:smooth_soul_quartz',
        'nourished_nether:warped_bricks',
        'nourished_nether:chiseled_warped_nether_bricks',
        'nourished_nether:cracked_warped_bricks',
        'nourished_nether:cracked_red_nether_bricks',
        'nourished_nether:chiseled_red_nether_bricks',
        'nourished_nether:ash',
        'nourished_nether:glowing_obsidian',
        'nourished_nether:cracked_quartz_bricks',
        'nourished_nether:gilded_blackstone_bricks',
        'nourished_nether:necronium_block'
    ];
    e.add('domum_ornamentum:extra_block', nourishedNetherDO);

    const deeperDarkerDO = [
        'deeperdarker:sculk_stone',
        'deeperdarker:cobbled_sculk_stone',
        'deeperdarker:polished_sculk_stone',
        'deeperdarker:sculk_stone_bricks',
        'deeperdarker:sculk_stone_tiles',
        'deeperdarker:smooth_sculk_stone',
        'deeperdarker:cut_sculk_stone',
        'deeperdarker:gloomslate',
        'deeperdarker:cobbled_gloomslate',
        'deeperdarker:polished_gloomslate',
        'deeperdarker:gloomslate_bricks',
        'deeperdarker:gloomslate_tiles',
        'deeperdarker:smooth_gloomslate',
        'deeperdarker:cut_gloomslate',
        'deeperdarker:chiseled_gloomslate',
        'deeperdarker:sculk_grime',
        'deeperdarker:sculk_grime_bricks',
        'deeperdarker:echo_soil',
        'deeperdarker:gloomy_sculk',
        'deeperdarker:gloomy_geyser',
        'deeperdarker:crystallized_amber',
        'deeperdarker:sculk_gleam',
        'deeperdarker:sculk_stone_coal_ore',
        'deeperdarker:sculk_stone_iron_ore',
        'deeperdarker:sculk_stone_copper_ore',
        'deeperdarker:sculk_stone_gold_ore',
        'deeperdarker:sculk_stone_redstone_ore',
        'deeperdarker:sculk_stone_emerald_ore',
        'deeperdarker:sculk_stone_lapis_ore',
        'deeperdarker:sculk_stone_diamond_ore',
        'deeperdarker:gloomslate_coal_ore',
        'deeperdarker:gloomslate_iron_ore',
        'deeperdarker:gloomslate_copper_ore',
        'deeperdarker:gloomslate_gold_ore',
        'deeperdarker:gloomslate_redstone_ore',
        'deeperdarker:gloomslate_emerald_ore',
        'deeperdarker:gloomslate_lapis_ore',
        'deeperdarker:gloomslate_diamond_ore'
    ]
    e.add('domum_ornamentum:extra_block', deeperDarkerDO);

    //create
    const createDO = [
        'create:rose_quartz_block',
        'create:experience_block',
        'create:brass_block',
        'create:industrial_iron_block',
        'create:andesite_alloy_block',
        'create:zinc_block',
        'create:raw_zinc_block',
        'create:deepslate_zinc_ore',
        'create:zinc_ore',
        'create:waxed_oxidized_copper_shingles',
        'create:acacia_window',
        'create:jungle_window',
        'create:birch_window',
        'create:spruce_window',
        'create:oak_window',
        'create:vertical_framed_glass',
        'create:horizontal_framed_glass',
        'create:framed_glass',
        'create:tiled_glass',
        'create:waxed_oxidized_copper_tiles',
        'create:waxed_weathered_copper_tiles',
        'create:waxed_exposed_copper_tiles',
        'create:waxed_copper_tiles',
        'create:oxidized_copper_tiles',
        'create:weathered_copper_tiles',
        'create:copper_tiles',
        'create:exposed_copper_tiles',
        'create:waxed_weathered_copper_shingles',
        'create:waxed_exposed_copper_shingles',
        'create:waxed_copper_shingles',
        'create:oxidized_copper_shingles',
        'create:weathered_copper_shingles',
        'create:exposed_copper_shingles',
        'create:copper_shingles',
        'create:small_rose_quartz_tiles',
        'create:rose_quartz_tiles',
        'create:ornate_iron_window',
        'create:warped_window',
        'create:crimson_window',
        'create:mangrove_window',
        'create:dark_oak_window',
    ];
    const createStoneTypes = [
        'dripstone',
        'granite',
        'diorite',
        'calcite',
        'andesite',
        'deepslate',
        'limestone',
        'tuff',
        'orchrum',
        'crimsite',
        'asurine',
        'scoria',
        'scorchia',
        'veridium'
    ];
    createStoneTypes.forEach(createStoneType => {
        createDO.push(`create:small_${createStoneType}_bricks`);
        createDO.push(`create:cut_${createStoneType}_bricks`);
        createDO.push(`create:polished_cut_${createStoneType}`);
        createDO.push(`create:cut_${createStoneType}`);
        createDO.push(`create:${createStoneType}_pillar`);
        createDO.push(`create:layered_${createStoneType}`);
    })
    for (var i = 8; i < createStoneTypes.length; i++) {
        createDO.push(`create:${createStoneTypes[i]}`);
    }
    e.add('domum_ornamentum:extra_block', createDO);
    //enlightened end
    const enlightened_endDO = [
        'enlightened_end:smooth_purpur',
        'enlightened_end:cracked_purpur',
        'enlightened_end:cracked_end_stone_bricks',
        'enlightened_end:cracked_end_stone_tiles',
        'enlightened_end:end_stone_tiles',
        'enlightened_end:irradium_ore',
        'enlightened_end:raw_irradium_block',
        'enlightened_end:irradium_block',
        'enlightened_end:irradium_bricks',
        'enlightened_end:depleted_irradium_block',
        'enlightened_end:depleted_irradium_bricks',
        'enlightened_end:raw_bismuth_block',
        'enlightened_end:bismuth_ore',
        'enlightened_end:adamantite_node',
        'enlightened_end:adamantite_block',
        'enlightened_end:starsteel_block'
    ];
    const enlightenedBlockTypes = [
        'palerock',
        'malachite',
        'void_shale'
    ]
    enlightenedBlockTypes.forEach(enlightenedBlockType => {
        enlightened_endDO.push(`enlightened_end:${enlightenedBlockType}_tiles`);
        enlightened_endDO.push(`enlightened_end:cracked_${enlightenedBlockType}_tiles`);
        enlightened_endDO.push(`enlightened_end:${enlightenedBlockType}_bricks`);
        enlightened_endDO.push(`enlightened_end:cracked_${enlightenedBlockType}_bricks`);
        enlightened_endDO.push(`enlightened_end:polished_${enlightenedBlockType}`);
        enlightened_endDO.push(`enlightened_end:${enlightenedBlockType}`);
        enlightened_endDO.push(`enlightened_end:chiseled_${enlightenedBlockType}`);
    });
    const enlightenedMetalTypes = [
        '',
        'ethereal',
        'poise',
        'verdant',
        'dazzling',
        'waxed', ,
        'iridescent',
        'serene'
    ]
    enlightenedMetalTypes.forEach(enlightenedMetalType => {
        enlightened_endDO.push(`enlightened_end:${enlightenedMetalType}_lamp`);
        enlightened_endDO.push(`enlightened_end:${enlightenedMetalType}_glass`);
        enlightened_endDO.push(`enlightened_end:${enlightenedMetalType}_sheets`);
        enlightened_endDO.push(`enlightened_end:${enlightenedMetalType}_block`);
    })
    e.add('domum_ornamentum:extra_block', enlightened_endDO);

    e.add('domum_ornamentum:extra_block', [
        '@rechiseled',
        '@rechiseledcreate'
    ]);
    e.remove('domum_ornamentum:extra_block', [
        'rechiseled:chisel',
        'domum_ornamentum:architectscutter'
    ]);
    //#endregion

    //#region metal
    e.add('forge:storage_blocks', [
        '#forge:storage_blocks/jade',
        '#forge:storage_blocks/steel',
        '#forge:storage_blocks/arclight',
        '#forge:storage_blocks/cryorium',
        '#forge:storage_blocks/bloodstone',
        '#forge:storage_blocks/moonlight',
        '#forge:storage_blocks/ruby',
        '#forge:storage_blocks/aquamarine',
        '#forge:storage_blocks/onyx',
        '#forge:storage_blocks/silver',
    ])
    e.add('forge:storage_blocks/jade', ['epicsamurai:jade_block', 'epicpaladins:jade_block']);
    e.add('forge:storage_blocks/steel', ['epicpaladins:steel_block', 'epicsamurai:steel_block']);
    e.add('forge:storage_blocks/arclight', ['epicpaladins:arclight_block']);
    e.add('forge:storage_blocks/cryorium', ['epicpaladins:cryorium_block']);
    e.add('forge:storage_blocks/bloodstone', ['epicpaladins:bloodstone_block']);
    e.add('forge:storage_blocks/moonlight', ['epicpaladins:moonlight_block']);
    e.add('forge:storage_blocks/ruby', ['epicsamurai:ruby_block']);
    e.add('forge:storage_blocks/aquamarine', ['epicsamurai:aquamarine_block']);
    e.add('forge:storage_blocks/onyx', ['epicsamurai:onyx_block']);
    e.add('forge:storage_blocks/silver', ['epicsamurai:silver_block']);
    //#endregion

    e.add('forge:planks', [
        /regions_unexplored:.+planks/
    ]);
    e.add('minecraft:planks', [
        /regions_unexplored:.+planks/
    ]);
})

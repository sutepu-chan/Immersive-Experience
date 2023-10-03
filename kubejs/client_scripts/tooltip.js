ItemEvents.tooltip(e => {
    //#region function
    let tooltipColor = [
        'darkBlue',
        'darkGreen',
        'darkAqua',
        'darkRed',
        'darkPurple',
        'gold',
        'gray',
        'darkGray',
        'blue',
        'green',
        'red',
        'lightPurple',
        'yellow',
        'white',
        'aqua'
    ]

    let formattedTooltip = (colour, item, tooltip) => {
        e.add(item, '');
        let line = '';
        tooltip.split(' ').forEach(word => {
            line.length == 0 ? line = word : line += ` ${word}`;
            if (line.length > 40) {
                e.add(item, Text.of(line)[colour]());
                line = '';
            };
        });
        if (line.length > 0) e.add(item, Text.of(line)[colour]());
        e.add(item, '');
    };

    const createTooltip = (color) => (item, tooltip) => formattedTooltip(color, item, tooltip);

    const tooltips = tooltipColor.reduce((acc, color) => {
        acc[color] = createTooltip(color);
        return acc;
    }, {});
    //tooltips.darkBlue(someItem, someTooltip);

    //#endregion

    //#region creative
    let creativeItems = [
        'ironfurnaces:rainbow_coal',
        'mtr:resource_pack_creator',
        'mtr:bridge_creator_3',
        'mtr:bridge_creator_5',
        'mtr:bridge_creator_7',
        'mtr:bridge_creator_9',
        'mtr:tunnel_creator_4_3',
        'mtr:tunnel_creator_4_5',
        'mtr:tunnel_creator_4_7',
        'mtr:tunnel_creator_4_9',
        'mtr:tunnel_creator_5_3',
        'mtr:tunnel_creator_5_5',
        'mtr:tunnel_creator_5_7',
        'mtr:tunnel_creator_5_9',
        'mtr:tunnel_creator_6_3',
        'mtr:tunnel_creator_6_5',
        'mtr:tunnel_creator_6_7',
        'mtr:tunnel_creator_6_9',
        'mtr:tunnel_wall_creator_4_3',
        'mtr:tunnel_wall_creator_4_5',
        'mtr:tunnel_wall_creator_4_7',
        'mtr:tunnel_wall_creator_4_9',
        'mtr:tunnel_wall_creator_5_3',
        'mtr:tunnel_wall_creator_5_5',
        'mtr:tunnel_wall_creator_5_7',
        'mtr:tunnel_wall_creator_5_9',
        'mtr:tunnel_wall_creator_6_3',
        'mtr:tunnel_wall_creator_6_5',
        'mtr:tunnel_wall_creator_6_7',
        'mtr:tunnel_wall_creator_6_9',
        'mtr:cable_car_node_station',
    ];
    creativeItems.forEach(creativeItem => {
        tooltips.gray(creativeItem, 'Creative Item, unobtainable!');
    });
    //#endregion

    //#region construction wand
    tooltips.aqua([
        'constructionwand:stone_wand',
        'constructionwand:iron_wand',
        'constructionwand:diamond_wand',
        'constructionwand:infinity_wand'
    ], 'Builder\'s wand Renewal! Shift+Scroll to set mode. Ctrl+Shift+Scroll to open menu');

    e.addAdvanced('constructionwand:core_angel', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Max placement distance with angel core')])
            text.add(1, [Text.of('Stone: ').darkGray(), Text.of('0 ').gray(), Text.of('blocks.').darkGray()])
            text.add(2, [Text.of('Iron: ').gray(), Text.of('2 ').white(), Text.of('blocks.').gray()])
            text.add(3, [Text.of('Diamond: ').darkAqua(), Text.of('4 ').aqua(), Text.of('blocks.').darkAqua()])
            text.add(4, [Text.of('Infinity: ').darkPurple(), Text.of('8 ').lightPurple(), Text.of('blocks.').darkPurple()])
        }
    })

    e.addAdvanced('constructionwand:core_destruction', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Wand destruction block limit')])
            text.add(1, [Text.of('Stone: ').darkGray(), Text.of('0 ').gray(), Text.of('blocks.').darkGray()])
            text.add(2, [Text.of('Iron: ').gray(), Text.of('18 ').white(), Text.of('blocks.').gray()])
            text.add(3, [Text.of('Diamond: ').darkAqua(), Text.of('64 ').aqua(), Text.of('blocks.').darkAqua()])
            text.add(4, [Text.of('Infinity: ').darkPurple(), Text.of('512 ').lightPurple(), Text.of('blocks.').darkPurple()])
        }
    })
    //#endregion

    //#region car
    tooltips.yellow('car:oilmill', 'Convert Canola in Oil');
    tooltips.yellow('car:blastfurnace', 'Convert Wood Logs into Methanol');
    tooltips.yellow('car:generator', 'Generate FE using BioDiesel');
    tooltips.yellow('car:dynamo', 'Generate FE by rotating crank on top');
    tooltips.yellow('car:crank', 'Use in Dynamo in FE generation');
    tooltips.yellow('car:tank', 'Store 16,000mB fluid. Retain fluid when broken.');
    tooltips.yellow('car:cable', 'Energy Pipe');
    tooltips.yellow('car:backmix_reactor', 'Convert Oil and Methanol into Canola Methanol Mix');
    tooltips.yellow('car:split_tank', 'Convert Canola Methanol Mix into Glycerin and Bio Diesel');
    tooltips.yellow('car:glycerin_bucket', 'Completely useless');
    tooltips.yellow('car:gas_station', 'Fill nearby vehicles using Bio Diesel');
    //#endregion

    //#region doggy talents
    tooltips.white('doggytalents:throw_bone', 'RC to throw');
    tooltips.white('doggytalents:throw_stick', 'RC to throw');
    tooltips.white('doggytalents:throw_bone_wet', 'RC to remove the drool');
    tooltips.white('doggytalents:throw_stick_wet', 'RC to remove the drool');
    tooltips.white('doggytalents:training_treat', 'Use in level < 20');
    tooltips.white('doggytalents:super_treat', 'Use in level 20-40');
    tooltips.white('doggytalents:master_treat', 'Use in level 40-60');
    tooltips.white('doggytalents:dire_treat', 'Use in level > 60');
    e.add('doggytalents:whistle', [
        [Text.of('RC ').gold(), Text.of('to use').gray()],
        [Text.of('Shift+RC ').gold(), Text.of('to open GUI').gray()]
    ]);
    e.add('doggytalents:canine_tracker', [
        [Text.of('RC ').gold(), Text.of('to open GUI').gray()],
    ]);
    e.add('doggytalents:radio_collar', [
        [Text.of('RC ').gold(), Text.of('your doggo to equip').gray()],
    ]);
    //#endregion

    //#region framed blocks
    tooltips.darkPurple('framedblocks:framed_hammer', 'RC to remove camo of framed blocks');
    tooltips.darkPurple('framedblocks:framed_wrench', 'RC to rotate the framed blocks');
    tooltips.darkPurple('framedblocks:framed_blueprint', 'RC to copy and paste the camo and glowing states of framed blocks');
    tooltips.darkPurple('framedblocks:framed_key', 'RC to lock the framed blocks');
    tooltips.darkPurple('framedblocks:framed_chest', 'Properties of the latch can be changed by Framed Hammer');
    tooltips.darkPurple('framedblocks:framed_screwdriver', 'RC to change the rotation of the camo');
    //#endregion

    //#region iron furnaces
    e.add('ironfurnaces:iron_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('8 seconds').white()]
    ])
    e.add('ironfurnaces:gold_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('6 seconds').white()]
    ])
    e.add('ironfurnaces:diamond_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('4 seconds').white()]
    ])
    e.add('ironfurnaces:emerald_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('2 seconds').white()]
    ])
    e.add('ironfurnaces:obsidian_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('1 seconds').white()]
    ])
    e.add('ironfurnaces:crystal_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('2 seconds').white()]
    ])
    e.add('ironfurnaces:netherite_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('0.25 seconds').white()]
    ])
    e.add('ironfurnaces:copper_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('9 seconds').white()]
    ])
    e.add('ironfurnaces:silver_furnace', [
        [Text.of('1 ').white(), Text.of('item ').gray(), Text.of('per ').gray(), Text.of('7 seconds').white()]
    ])
    e.add('ironfurnaces:million_furnace', [
        [Text.of('20 ticks ').white(), Text.of('per 64 smelting operation').gray()],
        [Text.of('I ').red(), Text.of('a').gold(), Text.of('m ').yellow(), Text.of('s').green(), Text.of('p').darkGreen(), Text.of('e').aqua(), Text.of('e').blue(), Text.of('d').lightPurple(), Text.of('.').gray()]
    ])
    //#endregion

    //#region maid
    tooltips.white('touhou_little_maid:ultramarine_orb_elixir', 'Avoid death of maid up to 6 times');
    tooltips.white('touhou_little_maid:nimble_fabric', 'When being attacked by projectile entities, the maid will act likes an Enderman');
    tooltips.white('touhou_little_maid:explosion_protect_bauble', 'Immune to blast damage');
    tooltips.white('touhou_little_maid:fire_protect_bauble', 'Immune to fire');
    tooltips.white('touhou_little_maid:projectile_protect_bauble', 'Immune to projectile damage');
    tooltips.white('touhou_little_maid:magic_protect_bauble', 'Immune to potion damage');
    tooltips.white('touhou_little_maid:fall_protect_bauble', 'Immune to fall damage');
    tooltips.white('touhou_little_maid:drown_protect_bauble', 'Immune to drowning');
    //#endregion

    //#region aether
    tooltips.gold('aether:iron_ring', 'An aesthetic accessory');
    tooltips.gold('aether:golden_ring', 'An aesthetic accessory');
    tooltips.gold('aether:zanite_ring', 'Increase mining speed');
    tooltips.gold('aether:ice_ring', 'Freezes water and lava when walked on');
    tooltips.gold('aether:iron_pendant', 'An aesthetic accessory');
    tooltips.gold('aether:golden_pendant', 'An aesthetic accessory');
    tooltips.gold('aether:zanite_pendant', 'Increase mining speed');
    tooltips.gold('aether:ice_pendant', 'Freezes water and lava when walked on');
    tooltips.gold('lost_aether_content:phoenix_cape', 'Give second chance of life when fall in void');
    tooltips.gold('aether:neptune_gloves', 'Allows underwater walking');
    tooltips.gold('aether:agility_cape', 'Grant step assists');
    tooltips.gold('aether:invisibility_cloak', 'Grant complete invisibility');
    tooltips.gold('aether:valkyrie_cape', 'Grant slow falling');
    tooltips.gold('aether:golden_feather', 'Grant slow falling');
    tooltips.gold('aether:regeneration_stone', 'Grant stacklable regeneration effect');
    tooltips.gold('aether:iron_bubble', 'Grant water breathing');
    tooltips.gold('aether:shield_of_repulsion', 'Projectile Immunity');
    tooltips.gold('aether:swet_cape', 'Allow you to ride swet');
    tooltips.gold('aether:swet_cape', 'Increase mining speed');
    tooltips.gold('deep_aether:gravitite_ring', 'Boost of Stratus Armor dash and Gravitite Armor boosted jump');
    tooltips.gold('deep_aether:stratus_ring', 'Upgraded boost the Stratus Armor dash and Gravitite Armor boosted jump');
    //#endregion

    //#region deeperdark
    e.add('deeperdarker:warden_helmet', [
        Text.of('Grant Darkness Immunity').gold(),
        Text.of('Speed Boost').gold()
    ]);
    e.add('deeperdarker:warden_chestplate', [
        Text.of('Grant Darkness Immunity').gold(),
        Text.of('Speed Boost').gold()
    ]);
    e.add('deeperdarker:warden_leggings', [
        Text.of('Grant Darkness Immunity').gold(),
        Text.of('Speed Boost').gold()
    ]);
    e.add('deeperdarker:warden_boots', [
        Text.of('Grant Darkness Immunity').gold(),
        Text.of('Speed Boost').gold()
    ]);
    //#endregion

    //#region mahoutsukai
    tooltips.blue('mahoutsukai:staff_emrys', 'Hold RC while holding in offhand to summon zap')
    //#endregion
    
    //#region miscellaneous
    tooltips.red('minecraft:shield', 'Disabled! Only used for obtaining Morgan.');
    tooltips.darkPurple('manyideas_core:end_block', 'Just a decorative block');
    tooltips.blue('dragonmounts:dragon_egg', 'Dragon eggs will adapt to surrounding environment and change the breed.')
    tooltips.darkPurple('majruszsdifficulty:wither_sword', 'Turns normal skeletons into Wither skeleton by chances')
    tooltips.darkPurple('majruszsdifficulty:enderium_upgrade_smithing_template', 'Loots in structures in the End dimension')
    tooltips.darkRed('aquamirae:poisoned_chakra', 'W.I.P.');
    tooltips.darkRed('aquamirae:maze_rose', 'W.I.P.');
    tooltips.darkRed('cataclysm:final_fractal', 'W.I.P.');
    tooltips.darkRed('cataclysm:zweiender', 'W.I.P.');
    tooltips.darkPurple('explorerscompass:explorerscompass', 'Obtain by completing certain quest');
    //#endregion

})
REIEvents.groupEntries(e => {
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    const woodVariants = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'crimson',
        'warped',
        'mangrove',
        'cherry'
    ]
    String.prototype.format = function () {
        const sentence = this.toString();

        const words = sentence.split('_');

        const formattedWords = words.map(word => {
            var firstLetter = word.charAt(0).toUpperCase();
            var restOfWord = word.slice(1).toLowerCase();
            return firstLetter + restOfWord;
        });

        const formattedSentence = formattedWords.join(' ');

        return formattedSentence;
    };
    //#region color variants
    const colorVariants = [
        ['wool', 'minecraft:white_wool'],
        ['terracotta', 'minecraft:white_terracotta'],
        ['glazed_terracotta', 'minecraft:white_glazed_terracotta'],
        ['stained_glass', 'minecraft:white_stained_glass'],
        ['stained_glass_pane', 'minecraft:white_stained_glass_pane'],
        ['concrete', 'minecraft:white_concrete'],
        ['concrete_powder', 'minecraft:white_concrete_powder'],
        ['carpet', 'minecraft:white_carpet'],
        ['shulker_box', 'minecraft:white_shulker_box'],
        ['bed', 'minecraft:white_bed'],
        ['banner', 'minecraft:white_banner'],
        ['candle', 'minecraft:white_candle'],
        ['color_bricks_extra', 'domum_ornamentum:white_brick_extra'],
        ['color_floating_carpet', 'domum_ornamentum:white_floating_carpet'],
        ['curtain', 'mcwwindows:white_curtain'],
        ['transporter_body', 'car:white_transporter_body'],
        ['suv_body', 'car:white_suv_body'],
        ['sport_body', 'car:white_sport_body'],
        ['container', 'car:white_container'],
        ['tank_container', 'car:white_tank_container'],
        ['lamp', 'mcwlights:white_lamp'],
        ['ceiling_light', 'mcwlights:white_ceiling_light'],
        ['paper_lamp', 'mcwlights:white_paper_lamp'],
        ['mosaic_glass', 'mcwwindows:white_mosaic_glass'],
        ['mosaic_glass_pane', 'mcwwindows:white_mosaic_glass_pane'],
        ['sharestones', 'waystones:white_sharestone'],
    ];

    function createColorVariants(whiteItem) {
        return colors.map(color => whiteItem.replace('white', color));
    }

    function groupItems(name, whiteItem) {
        e.groupItems(`kubejs:rei_groups/${name}`, name.format(), createColorVariants(whiteItem));
    }
    colorVariants.forEach(([name, whiteItem]) => groupItems(name, whiteItem));

    //#endregion

    //#region other grouping

    //additional lights
    e.groupItems('kubejs:rei_groups/al_lamp', 'AL Lamp', [
        /additional_lights:al_lamp_.+/
    ]);
    e.groupItems('kubejs:rei_groups/al_torch', 'AL Torch', [
        /additional_lights:al_torch_.+/
    ]);
    e.groupItems('kubejs:rei_groups/standing_torch_s', 'Short Standing Torch', [
        /additional_lights:standing_torch_s.+/
    ]);
    e.groupItems('kubejs:rei_groups/standing_torch_l', 'Tall Standing Torch', [
        /additional_lights:standing_torch_l.+/
    ]);
    e.groupItems('kubejs:rei_groups/fire_pit_s', 'Short Fire Pit', [
        /additional_lights:fire_pit_s.+/
    ]);
    e.groupItems('kubejs:rei_groups/fire_pit_l', 'Long Fire Pit', [
        /additional_lights:fire_pit_l.+/
    ]);

    //macaw lights
    e.groupItems('kubejs:rei_groups/tiki_torch', 'Tiki Torch', [
        /mcwlights:.+_tiki_torch/
    ]);
    e.groupItems('kubejs:rei_groups/macaw_lanterns', 'Macaw Lanterns', [
        /mcwlights:.+_lantern/
    ]);

    //spawn eggs
    e.groupItems('kubejs:rei_groups/spawn_eggs', 'Spawn Eggs', [
        /.+spawn_egg/,
        'minecolonies:barbarianegg',
        'minecolonies:barbarcheregg',
        'minecolonies:barbchiefegg',
        'minecolonies:pirateegg',
        'minecolonies:piratearcheregg',
        'minecolonies:piratecaptainegg',
        'minecolonies:mummyegg',
        'minecolonies:mummyarcheregg',
        'minecolonies:pharaoegg',
        'minecolonies:shieldmaidenegg',
        'minecolonies:norsemenarcheregg',
        'minecolonies:norsemenchiefegg',
        'minecolonies:amazonegg',
        'minecolonies:amazonspearmanegg',
        'minecolonies:amazonchiefegg',
        'minecolonies:mercegg'
    ]);

    //doggy talents
    e.groupItems('kubejs:rei_groups/doggy_talents/dog_beds', 'Dog Beds', [
        Item.of('doggytalents:dog_bed').ignoreNBT()
    ]);

    //drawers
    
    e.groupItems('kubejs:rei_group/functionalstorage/drawer_1', '1x1 Drawers', [
        /functionalstorage:.+_1/
    ]);
    e.groupItems('kubejs:rei_group/functionalstorage/drawer_2', '1x2 Drawers', [
        /functionalstorage:.+_2/
    ]);
    e.groupItems('kubejs:rei_group/functionalstorage/drawer_4', '2x2 Drawers', [
        /functionalstorage:.+_4/
    ]);

    //car
    e.groupItems('kubejs:rei_group/car/arrows', 'Arrows', [
        /car:arrow_.+/
    ]);

    //#endregion
})
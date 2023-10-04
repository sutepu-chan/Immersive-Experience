ServerEvents.recipes(e => {
    let toolTypes = [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'sword',
    ];
    toolTypes.forEach(armorType => {
        e.remove({ output: `majruszsdifficulty:enderium_${armorType}` });
        e.smithing(
            `majruszsdifficulty:enderium_${armorType}`,
            'majruszsdifficulty:enderium_upgrade_smithing_template',
            `advancednetherite:netherite_diamond_${armorType}`,
            'majruszsdifficulty:enderium_ingot'
        );
    });
    e.remove({ output: 'majruszsdifficulty:enderium_upgrade_smithing_template' });
    e.shaped('2x majruszsdifficulty:enderium_upgrade_smithing_template', ['DTD', 'DED', 'DDD'], {
        D: 'minecraft:diamond',
        T: 'majruszsdifficulty:enderium_upgrade_smithing_template',
        E: 'majruszsdifficulty:enderium_shard'
    }).id('kubejs:enderite/upgrade_smithing_template');
});
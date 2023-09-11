ServerEvents.recipes(e => {
    let armorTypes = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];
    armorTypes.forEach(armorType => {
        e.smithing(
            `majruszsdifficulty:enderium_${armorType}`,
            'majruszsdifficulty:enderium_upgrade_smithing_template',
            `advancednetherite:netherite_diamond_${armorType}`,
            'majruszsdifficulty:enderium_ingot'
        );
    });
});
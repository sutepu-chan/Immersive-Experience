ServerEvents.recipes(e => {
    let armorTypes = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];
    armorTypes.forEach(armorType => {
        e.remove({ output: `deeperdarker:warden_${armorType}` });
        e.smithing(
            `deeperdarker:warden_${armorType}`,
            'deeperdarker:warden_upgrade_smithing_template',
            `advancednetherite:netherite_diamond_${armorType}`,
            'deeperdarker:heart_of_the_deep'
        );
    });
})
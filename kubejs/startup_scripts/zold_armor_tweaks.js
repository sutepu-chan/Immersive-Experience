//maxDamage (durability)

//armorProtection
//diamond = [3,8,6,3]
//netherite = [3,8,6,3]

//armorToughness
//diamond = 0
//netherite = 3

//armorKnockbackResistance
//diamond = 0
//netherite = 0.1 (= +1 knockback resistance)

// Currently don't work due to bugs. Wait for the fix.

/*
ItemEvents.modification(e => {
    const sets = [
        {
            name: 'advancednetherite:netherite_iron',
            attributes: {
                armorProtection: [4, 9, 7, 4],
                armorToughness: 3.5,
                armorKnockbackResistance: 0.1
            }
        },
        {
            name: 'advancednetherite:netherite_gold',
            attributes: {
                armorProtection: [5, 10, 8, 5],
                armorToughness: 3.5,
                armorKnockbackResistance: 0.15
            }
        },
        {
            name: 'advancednetherite:netherite_emerald',
            attributes: {
                armorProtection: [6, 11, 9, 6],
                armorToughness: 4,
                armorKnockbackResistance: 0.2
            }
        },
        {
            name: 'advancednetherite:netherite_diamond',
            attributes: {
                armorProtection: [7, 12, 10, 7],
                armorToughness: 4,
                armorKnockbackResistance: 0.25
            }
        },
        {
            name: 'majruszsdifficulty:enderium',
            attributes: {
                armorProtection: [9, 15, 12, 9],
                armorToughness: 4.5,
                armorKnockbackResistance: 0.3
            }
        },
    ];
    for (const set of sets) {
        e.modify(`${set.name}_helmet`, item => {
            item.tier = tier => {
                tier.armorProtection = set.attributes.armorProtection[0];
                tier.armorToughness = set.attributes.armorToughness;
                tier.armorKnockbackResistance = set.attributes.armorKnockbackResistance;
            };
        });
        e.modify(`${set.name}_chestplate`, item => {
            item.tier = tier => {
                tier.armorProtection = set.attributes.armorProtection[1];
                tier.armorToughness = set.attributes.armorToughness;
                tier.armorKnockbackResistance = set.attributes.armorKnockbackResistance;
            };
        });
        e.modify(`${set.name}_leggings`, item => {
            item.tier = tier => {
                tier.armorProtection = set.attributes.armorProtection[2];
                tier.armorToughness = set.attributes.armorToughness;
                tier.armorKnockbackResistance = set.attributes.armorKnockbackResistance;
            };
        });
        e.modify(`${set.name}_boots`, item => {
            item.tier = tier => {
                tier.armorProtection = set.attributes.armorProtection[3];
                tier.armorToughness = set.attributes.armorToughness;
                tier.armorKnockbackResistance = set.attributes.armorKnockbackResistance;
            };
        });

    };

    //#region other armor
    e.modify('fromtheshadows:diabolium_helmet', item => {
        item.tier = tier => {
            tier.armorProtection = 5;
        };
    });
    e.modify('fromtheshadows:diabolium_chestplate', item => {
        item.tier = tier => {
            tier.armorProtection = 10;
        };
    });
    e.modify('fromtheshadows:diabolium_leggings', item => {
        item.tier = tier => {
            tier.armorProtection = 8;
        };
    });
    e.modify('fromtheshadows:crust_helmet', item => {
        item.tier = tier => {
            tier.armorProtection = 4;
            tier.armorToughness = 7;
            tier.armorKnockbackResistance = 0.5;
        };
    });
    e.modify('fromtheshadows:crust_chestplate', item => {
        item.tier = tier => {
            tier.armorProtection = 8;
            tier.armorToughness = 7;
            tier.armorKnockbackResistance = 0.5;
        };
    });
    e.modify('fromtheshadows:crust_leggings', item => {
        item.tier = tier => {
            tier.armorProtection = 6;
            tier.armorToughness = 7;
            tier.armorKnockbackResistance = 0.5;
        };
    });
    //#end region

});

*/
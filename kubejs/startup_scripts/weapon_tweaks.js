//maxDamage (durability)

//attackDamageBonus
//diamond = 3
//netherite = 4
//speed (attackSpeed/diggingSpeed)

// Currently don't work due to bugs. Wait for the fix.

/*
ItemEvents.modification(e => {
    const sets = [
        {
            name: 'advancednetherite:netherite_iron',
            attributes: {
                attackDamage: 5,
                attackSpeed: 1.6,
                diggingSpeed: 12
            }
        },
        {
            name: 'advancednetherite:netherite_gold',
            attributes: {
                attackDamage: 7,
                attackSpeed: 1.6,
                diggingSpeed: 20
            }

        },
        {
            name: 'advancednetherite:netherite_emerald',
            attributes: {
                attackDamage: 9,
                attackSpeed: 1.7,
                diggingSpeed: 29
            }

        },
        {
            name: 'advancednetherite:netherite_diamond',
            attributes: {
                attackDamage: 11,
                attackSpeed: 1.7,
                diggingSpeed: 39
            }

        },
        {
            name: 'majruszsdifficulty:enderium',
            attributes: {
                attackDamage: 13,
                attackSpeed: 1.7,
                diggingSpeed: 45
            }

        },
    ];
    for (const set of sets) {
        e.modify(`${set.name}_sword`, item => {
            item.tier = tier => {
                tier.attackDamageBonus = set.attributes.attackDamage;
                tier.speed = set.attributes.attackSpeed;
            };
        });
        e.modify(`${set.name}_pickaxe`, item => {
            item.tier = tier => {
                tier.attackDamageBonus = set.attributes.attackDamage - 4;
                tier.speed = set.attributes.diggingSpeed;
            };
        });
        e.modify(`${set.name}_axe`, item => {
            item.tier = tier => {
                tier.attackDamageBonus = set.attributes.attackDamage + 2;
                tier.speed = set.attributes.diggingSpeed;
            };
        });
        e.modify(`${set.name}_shovel`, item => {
            item.tier = tier => {
                tier.attackDamageBonus = set.attributes.attackDamage - 4;
                tier.speed = set.attributes.diggingSpeed;
            };
        });
    };
    e.modify('fromtheshadows:thirst_for_blood', item => {
        item.tier = tier => {
            tier.attackDamageBonus = 7;
            tier.speed = 1.6;
        };
    });
});
*/
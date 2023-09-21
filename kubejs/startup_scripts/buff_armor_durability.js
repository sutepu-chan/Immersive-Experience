ItemEvents.modification(e => {
    const armorSets = [
        {
            name: 'advancednetherite:netherite_iron',
            durability: 627
        },
        {
            name: 'advancednetherite:netherite_gold',
            durability: 924
        },
        {
            name: 'advancednetherite:netherite_emerald',
            durability: 1231
        },
        {
            name: 'advancednetherite:netherite_diamond',
            durability: 1602
        },
        {
            name: 'majruszsdifficulty:enderium',
            durability: 2278
        },
        {
            name: 'cataclysm:ignitium',
            durability: 3075
        },
        {
            name: 'enlightened_end:adamantite_armor',
            durability: 637
        },
        {
            name: 'epicpaladins:arclight',
            durability: 804
        },
        {
            name: 'epicpaladins:bloodstone',
            durability: 804
        },
        {
            name: 'epicpaladins:cryorium',
            durability: 804
        },
        {
            name: 'epicpaladins:jade',
            durability: 804
        },
        {
            name: 'epicpaladins:moonlight',
            durability: 804
        },
        {
            name: 'epicpaladins:sculk',
            durability: 912
        },
        {
            name: 'aquamirae:terrible',
            durability: 275
        },
        {
            name: 'aquamirae:abyssal',
            durability: 538
        },
        {
            name: 'deeperdarker:warden',
            durability: 912
        },
        {
            name: 'epicsamurai:gold_samurai',
            durability: 210
        },
        {
            name: 'epicsamurai:iron_samurai',
            durability: 210
        },
        {
            name: 'epicsamurai:silver_samurai',
            durability: 220
        },
        {
            name: 'epicsamurai:steel',
            durability: 230
        },
        {
            name: 'epicsamurai:red_samurai',
            durability: 318
        },
        {
            name: 'epicsamurai:diamond_samurai',
            durability: 318
        },
        {
            name: 'epicsamurai:brass_samurai',
            durability: 318
        },
        {
            name: 'epicsamurai:gray_samurai',
            durability: 318
        },
        {
            name: 'epicsamurai:green_samurai',
            durability: 318
        },
        {
            name: 'epicsamurai:blue_samurai',
            durability: 318
        },
        {
            name: 'epicsamurai:amethyst_samurai',
            durability: 608
        },
        {
            name: 'epicsamurai:quartz_samurai',
            durability: 608
        },
        {
            name: 'epicsamurai:netherite_samurai',
            durability: 724
        },
        {
            name: 'epicsamurai:sculk_samurai',
            durability: 724
        },
        {
            name: 'monsterplus:crystal',
            durability: 382
        },
        {
            name: 'epicsamurai:iron',
            durability: 125
        },
        {
            name: 'epicsamurai:golden',
            durability: 98
        },
        {
            name: 'epicsamurai:diamond',
            durability: 250
        },
        {
            name: 'epicsamurai:netherite',
            durability: 492
        },
        {
            name: 'aether:valkyrie',
            durability: 438
        },
        {
            name: 'aether:neptune',
            durability: 342
        },
        {
            name: 'aether:phoenix',
            durability: 604
        },
        {
            name: 'aether:obsidian',
            durability: 812
        },
        {
            name: 'deep_aether:stratus',
            durability: 543
        },
        {
            name: 'deep_aether:skyjade',
            durability: 64
        },
    ];
    for (const set of armorSets) {
        e.modify(`${set.name}_helmet`, item => {
            item.maxDamage = set.durability
        });
        e.modify(`${set.name}_chestplate`, item => {
            item.maxDamage = set.durability * 1.6
        });
        e.modify(`${set.name}_leggings`, item => {
            item.maxDamage = set.durability * 1.33
        });
        e.modify(`${set.name}_boots`, item => {
            item.maxDamage = set.durability * 1.1
        });
    };

    //#region misc
    e.modify('cataclysm:ignitium_elytra_chestplate', (item) => {
        item.maxDamage = 4920
    });
    //crust 3, 7, 5 + 3, 4, 4
    e.modify('fromtheshadows:crust_helmet', (item) => {
        item.maxDamage = 1139
    });
    e.modify('fromtheshadows:crust_chest', (item) => {
        item.maxDamage = 1139 * 1.6
    });
    e.modify('fromtheshadows:crust_leggings', (item) => {
        item.maxDamage = 1139 * 1.33
    });
    //diabolium 3, 8, 6 + 5, 5, 5
    e.modify('fromtheshadows:diabolium_helmet', (item) => {
        item.maxDamage = 1567
    });
    e.modify('fromtheshadows:diabolium_chest', (item) => {
        item.maxDamage = 1567 * 1.6
    });
    e.modify('fromtheshadows:diabolium_leggings', (item) => {
        item.maxDamage = 1567 * 1.33
    });
    //mutant skeleton 6 5 2 + 4 3 3
    e.modify('mutantmonsters:mutant_skeleton_chestplate', (item) => {
        item.maxDamage = 589 * 1.6
    });
    e.modify('mutantmonsters:mutant_skeleton_leggings', (item) => {
        item.maxDamage = 589 * 1.33
    });
    e.modify('mutantmonsters:mutant_skeleton_boots', (item) => {
        item.maxDamage = 1567 * 1.1
    });
    e.modify('aquamirae:three_bolt_helmet', (item) => {
        item.maxDamage = 1923
    });
    e.modify('aquamirae:three_bolt_suit', (item) => {
        item.maxDamage = 1923 * 1.6
    });
    e.modify('aquamirae:three_bolt_leggings', (item) => {
        item.maxDamage = 1923 * 1.33
    });
    e.modify('aquamirae:three_bolt_boots', (item) => {
        item.maxDamage = 1923 * 1.1
    });
    //#endregion
    e.modify('aquamirae:abyssal_tiara', (item) => {
        item.maxDamage = 1322 
    });
});
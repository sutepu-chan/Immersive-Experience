/*
===== Armor =====
minecraft:generic.armor
minecraft:generic.armor_toughness
minecraft:generic.knockback_resistance
minecraft:generic.max_health
minecraft:generic.movement_speed (multiply)

===== Armor miscellaneous =====
combatroll:count
forge:swim_speed
*/

ItemEvents.modification(e => {
    //#region normal armor
    const sets = [
        {
            name: 'advancednetherite:netherite_iron',
            attributes: {
                armor: [1, 1, 1, 1], //5 9 7 5
                max_health: 1
            }
        },
        {
            name: 'advancednetherite:netherite_gold',
            attributes: {
                armor: [2, 2, 2, 2], //6 11 9 6
                max_health: 1
            }
        },
        {
            name: 'advancednetherite:netherite_emerald',
            attributes: {
                armor: [3, 3, 3, 3], //7 12 10 7
                armor_toughness: 0.5, //4
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'advancednetherite:netherite_diamond',
            attributes: {
                armor: [4, 4, 4, 4], //9 13 11 9
                armor_toughness: 0.5, //4.5
                knockback_resistance: 0.1, //0.2
                max_health: 2
            }
        },
        {
            name: 'majruszsdifficulty:enderium',
            attributes: {
                armor: [6, 7, 6, 6], //10 15 12 10
                armor_toughness: 1.5, //5
                knockback_resistance: 0.15, //0.25
                max_health: 3,
            }
        },
        {
            name: 'cataclysm:ignitium',
            attributes: {
                armor: [9, 10, 10, 9], //14 20 18 14
                armor_toughness: 1.5, //5.5
                knockback_resistance: 0.2, //0.35
                max_health: 5,
            }
        },
        {
            name: 'enlightened_end:adamantite_armor',
            attributes: {
                armor: [1, 1, 0, 1], //4 9 6 5
                max_health: 1,
            }
        },
        {
            name: 'epicpaladins:arclight',
            attributes: {
                armor: [2, 3, 3, 2], //6 12 10 6
                armor_toughness: 1, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'epicpaladins:bloodstone',
            attributes: {
                armor: [2, 3, 3, 2], //6 11 9 6
                armor_toughness: 1, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'epicpaladins:cryorium',
            attributes: {
                armor: [2, 3, 3, 2], //6 11 9 6
                armor_toughness: 1, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'epicpaladins:jade',
            attributes: {
                armor: [2, 3, 3, 2], //6 11 9 6
                armor_toughness: 1, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'epicpaladins:moonlight',
            attributes: {
                armor: [2, 3, 3, 2], //6 11 9 6
                armor_toughness: 1, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'epicpaladins:sculk',
            attributes: {
                armor: [2, 3, 3, 2], //6 11 9 6
                armor_toughness: 1, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'tofucraft:tofu_solid',
            attributes: {
                armor: [1, 1, 1, 1], //3 5 4 2
            }
        },
        {
            name: 'tofucraft:tofu_metal',
            attributes: {
                armor: [1, 1, 1, 1], //3 7 6 2
                armor_toughness: 1,
                max_health: 1
            }
        },
        {
            name: 'tofucraft:tofu_diamond',
            attributes: {
                armor: [1, 2, 1, 2], //5 11 8 5
                armor_toughness: 0.5, //3.75
                knockback_resistance: 0.1, //0.15
                max_health: 1
            }
        },
        {
            name: 'tofucraft:sculk_bone',
            attributes: {
                armor: [2, 3, 3, 2], //6 12 10 5
                armor_toughness: 0.5, //4
                knockback_resistance: 0.1, //0.2
                max_health: 2
            }
        },
        {
            name: 'aquamirae:terrible',
            attributes: {
                armor: [1, 2, 4, 2], //6 9 7 4
            }
        },
        {
            name: 'aquamirae:abyssal',
            attributes: {
                armor: [3, 3, 3, 3], //9 7 7 5
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'aquamirae:three_bolt',
            attributes: {
                armor: [6, 4, 4, 4], //13 9 9 7
                armor_toughness: 2, //4
                knockback_resistance: 0.1, //0.2
                max_health: 3
            }
        },
        {
            name: 'deeperdarker:warden',
            attributes: {
                armor: [2, 3, 2, 2], //6 12 9 6
                knockback_resistance: 0.05, //0.15
                max_health: 2
            }
        },
        {
            name: 'epicsamurai:gold_samurai',
            attributes: {
                armor_toughness: 0.5,
            }
        },
        {
            name: 'epicsamurai:iron_samurai',
            attributes: {
                armor_toughness: 0.5,
            }
        },
        {
            name: 'epicsamurai:silver_samurai',
            attributes: {
                armor_toughness: 0.5,
            }
        },
        {
            name: 'epicsamurai:steel',
            attributes: {
                armor: [0, 1, 1, 0], //2 8 6 3
                armor_toughness: 0.5,
                knockback_resistance: 0.05, //0.05
            }
        },
        {
            name: 'epicsamurai:red_samurai',
            attributes: {
                armor: [2, 0, 0, 1], //2 8 6 3
                knockback_resistance: 0.1, //0.1
            }
        },
        {
            name: 'epicsamurai:diamond_samurai',
            attributes: {
                armor: [2, 0, 0, 1], //2 8 6 3
                knockback_resistance: 0.1, //0.1
            }
        },
        {
            name: 'epicsamurai:brass_samurai',
            attributes: {
                armor: [2, 0, 0, 1], //2 8 6 3
                knockback_resistance: 0.1, //0.1
            }
        },
        {
            name: 'epicsamurai:gray_samurai',
            attributes: {
                armor: [2, 0, 0, 1], //2 8 6 3
                knockback_resistance: 0.1, //0.1
            }
        },
        {
            name: 'epicsamurai:green_samurai',
            attributes: {
                armor: [2, 0, 0, 1], //2 8 6 3
                knockback_resistance: 0.1, //0.1
            }
        },
        {
            name: 'epicsamurai:blue_samurai',
            attributes: {
                armor: [2, 0, 0, 1], //2 8 6 3
                knockback_resistance: 0.1, //0.1
            }
        },
        {
            name: 'epicsamurai:amethyst_samurai',
            attributes: {
                armor: [2, 2, 2, 2], //5 10 8 5
                armor_toughness: 0.5, //3
                knockback_resistance: 0.1, //0.1
                max_health: 2
            }
        },
        {
            name: 'epicsamurai:quartz_samurai',
            attributes: {
                armor: [2, 2, 2, 2], //5 10 8 5
                armor_toughness: 0.5, //3
                knockback_resistance: 0.1, //0.1
                max_health: 2
            }
        },
        {
            name: 'epicsamurai:netherite_samurai',
            attributes: {
                armor: [3, 3, 3, 3], //6 11 9 6
                armor_toughness: 1, //4
                knockback_resistance: 0.1, //0.2
                max_health: 2
            }
        },
        {
            name: 'epicsamurai:sculk_samurai',
            attributes: {
                armor: [3, 4, 4, 3], //6 12 10 6
                armor_toughness: 0.5, //3.5
                knockback_resistance: 0.05, //0.15
                max_health: 1
            }
        },
    ];

    const armorType = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];

    for (const set of sets) {
        for (let i = 0; i < armorType.length; i++) {
            e.modify(`${set.name}_${armorType[i]}`, (item) => {
                if (set.attributes.armor != null) {
                    if (set.attributes.armor[i] != null) {
                        item.addAttribute(
                            'minecraft:generic.armor',
                            $UUID.randomUUID(),
                            "Armor modifier",
                            set.attributes.armor[i],
                            $AM$Operation.ADDITION
                        );
                    };
                };
                if (set.attributes.armor_toughness != null) {
                    item.addAttribute(
                        'minecraft:generic.armor_toughness',
                        $UUID.randomUUID(),
                        "Armor modifier",
                        set.attributes.armor_toughness,
                        $AM$Operation.ADDITION
                    );
                };
                if (set.attributes.knockback_resistance != null) {
                    item.addAttribute(
                        'minecraft:generic.knockback_resistance',
                        $UUID.randomUUID(),
                        "Armor modifier",
                        set.attributes.knockback_resistance,
                        $AM$Operation.ADDITION
                    );
                };
                if (set.attributes.max_health != null) {
                    item.addAttribute(
                        'minecraft:generic.max_health',
                        $UUID.randomUUID(),
                        "Armor modifier",
                        set.attributes.max_health,
                        $AM$Operation.ADDITION
                    );
                };
            });
        }
    };
    //#endregion


    //#region misc
    e.modify('cataclysm:ignitium_elytra_chestplate', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            10,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            1.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.2,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            5,
            $AM$Operation.ADDITION
        );
    });
    //crust 3, 7, 5 + 3, 4, 4
    e.modify('fromtheshadows:crust_helmet', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            2,
            $AM$Operation.ADDITION
        );
    });
    e.modify('fromtheshadows:crust_chest', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            4,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            2,
            $AM$Operation.ADDITION
        );
    });
    e.modify('fromtheshadows:crust_leggings', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            4,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            2,
            $AM$Operation.ADDITION
        );
    });
    //diabolium 3, 8, 6 + 5, 5, 5
    e.modify('fromtheshadows:diabolium_helmet', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            0.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.05,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
    });
    e.modify('fromtheshadows:diabolium_chest', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            0.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.05,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
    });
    e.modify('fromtheshadows:diabolium_leggings', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            0.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.05,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
    });
    //mutant skeleton 2 6 5 2 + 3 4 3 3
    e.modify('mutantmonsters:mutant_skeleton_skull', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            3.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            1,
            $AM$Operation.ADDITION
        );
    });
    e.modify('mutantmonsters:mutant_skeleton_chestplate', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            4,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            3.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            2,
            $AM$Operation.ADDITION
        );
    });
    e.modify('mutantmonsters:mutant_skeleton_leggings', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            3.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            2,
            $AM$Operation.ADDITION
        );
    });
    e.modify('mutantmonsters:mutant_skeleton_boots', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            3.5,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            1,
            $AM$Operation.ADDITION
        );
    });
    //#endregion
    e.modify('aquamirae:abyssal_tiara', (item) => {
        item.addAttribute(
            'minecraft:generic.armor',
            $UUID.randomUUID(),
            "Armor modifier",
            3,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.armor_toughness',
            $UUID.randomUUID(),
            "Armor modifier",
            1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.knockback_resistance',
            $UUID.randomUUID(),
            "Armor modifier",
            0.1,
            $AM$Operation.ADDITION
        );
        item.addAttribute(
            'minecraft:generic.max_health',
            $UUID.randomUUID(),
            "Armor modifier",
            4,
            $AM$Operation.ADDITION
        );
    });

});
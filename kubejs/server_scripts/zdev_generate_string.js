/*
let genSets = [ //default 0.95 0.8 0.9 1.0
    {
        name: 'advancednetherite:netherite_iron',
        bleed: 0.25
    },
    {
        name: 'advancednetherite:netherite_gold',
        bleed: 0.3
    },
    {
        name: 'advancednetherite:netherite_emerald',
        bleed: 0.35
    },
    {
        name: 'advancednetherite:netherite_diamond',
        bleed: 0.4
    },
    {
        name: 'majruszsdifficulty:enderium',
        bleed: 0.45
    },
    {
        name: "cataclysm:ignitium",
        bleed: 0.625
    },
    {
        name: "enlightened_end:adamantite_armor",
        bleed: 0.17
    },
    {
        name: "epicpaladins:arclight",
        bleed: 0.28
    },
    {
        name: "epicpaladins:jade",
        bleed: 0.28
    },
    {
        name: "epicpaladins:bloodstone",
        bleed: 0.28
    },
    {
        name: "epicpaladins:cryorium",
        bleed: 0.28
    },
    {
        name: "epicpaladins:moonlight",
        bleed: 0.28
    },
    {
        name: "epicpaladins:sculk",
        bleed: 0.32
    },
    {
        name: "tofucraft:tofu_solid",
        bleed: 0.001
    },
    {
        name: "tofucraft:tofu_metal",
        bleed: 0.0128
    },
    {
        name: "tofucraft:tofu_diamond",
        bleed: 0.0256
    },
    {
        name: 'tofucraft:sculk_bone',
        bleed: 0.0512
    },
    {
        name: 'deeperdarker:warden',
        bleed: 0.29
    },
    {
        name: 'minecraft:wooden',
        bleed: 0.01
    },
    {
        name: 'minecraft:iron',
        bleed: 0.055
    },
    {
        name: 'minecraft:golden',
        bleed: 0.06
    },
    {
        name: 'minecraft:diamond',
        bleed: 0.15
    },
    {
        name: 'minecraft:netherite',
        bleed: 0.2
    }
];
let toolType = [
    'sword',
    'axe'
]
for (var set of genSets) {
    for (let i = 0; i < 2; i++) {
        console.log(`
            {
                "id": "${set.name}_${toolType[i]}",
                "chance": ${(i === 0) ? set.bleed : set.bleed - 0.025},
                "enchantments": [
                    {
                        "id": "minecraft:sharpness",
                        "extra_chance": 0.02
                    },
                    {
                        "id": "{regex}(minecraft:smite)|(minecraft:bane_of_arthropods)|(majruszsenchantments:misanthropy)",
                        "extra_chance": 0.01
                    }
                ]
            },`);
    }
};

const simplySwordSets = [
    {
        name: 'simplyswords:golden',
        bleed: 0.06
    },
    {
        name: 'simplyswords:iron',
        bleed: 0.055
    },
    {
        name: 'simplyswords:diamond',
        bleed: 0.15
    },
    {
        name: 'simplyswords:netherite',
        bleed: 0.2
    },
    {
        name: 'simplyswords:runic',
        bleed: 0.28
    },
]
const simplySwordTypes = [
    'longsword',
    'twinblade',
    'rapier',
    'katana',
    'sai',
    'spear',
    'glaive',
    'warglaive',
    'cutlass',
    'claymore',
    'greathammer',
    'greataxe',
    'chakram',
    'scythe',
    'halberd',
]

simplySwordSets.forEach(set => {
    simplySwordTypes.forEach(type => {
        console.log(`
            {
                "id": "${set.name}_${type}",
                "chance": ${set.bleed},
                "enchantments": [
                    {
                        "id": "minecraft:sharpness",
                        "extra_chance": 0.02
                    },
                    {
                        "id": "{regex}(minecraft:smite)|(minecraft:bane_of_arthropods)|(majruszsenchantments:misanthropy)",
                        "extra_chance": 0.01
                    }
                ]
            },`);
    })
})
*/
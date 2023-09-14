/*
[
    {
        "id": "minecraft:{regex}.*_helmet",
        "chance_multiplier": 0.95
    },
    {
        "id": "minecraft:{regex}.*_chestplate",
        "chance_multiplier": 0.8
    },
    {
        "id": "minecraft:{regex}.*_leggings",
        "chance_multiplier": 0.9
    },
    {
        "id": "minecraft:{regex}.*_boots",
        "chance_multiplier": 1.0
    }
]


let genSets = [ //default 0.95 0.8 0.9 1.0
    {
        name: 'advancednetherite:netherite_iron',
        bleed: [0.7, 0.5, 0.55, 0.7], //13.5
    },
    {
        name: 'advancednetherite:netherite_gold',
        bleed: [0.65, 0.5, 0.55, 0.65], //11.7
    },
    {
        name: 'advancednetherite:netherite_emerald',
        bleed: [0.6, 0.45, 0.5, 0.6], //0.08
    },
    {
        name: 'advancednetherite:netherite_diamond',
        bleed: [0.55, 0.35, 0.4, 0.55], //0.03
    },
    {
        name: 'majruszsdifficulty:enderium',
        bleed: [0.5, 0.3, 0.3, 0.5], //0.03
    },
    {
        name: "cataclysm:ignitium",
        bleed: [0.55, 0.2, 0.25, 0.55] //0.015
    },
    {
        name: "enlightened_end:adamantite_armor",
        bleed: [0.8, 0.7, 0.7, 0.8]
    },
    {
        name: "epicpaladins:arclight",
        bleed: [0.65, 0.5, 0.5, 0.6]
    },
    {
        name: "epicpaladins:jade",
        bleed: [0.65, 0.5, 0.5, 0.6]
    },
    {
        name: "epicpaladins:bloodstone",
        bleed: [0.7, 0.5, 0.5, 0.65]
    },
    {
        name: "epicpaladins:cryorium",
        bleed: [0.7, 0.5, 0.5, 0.65]
    },
    {
        name: "epicpaladins:moonlight",
        bleed: [0.7, 0.5, 0.5, 0.65]
    },
    {
        name: "epicpaladins:sculk",
        bleed: [0.7, 0.5, 0.5, 0.65]
    },
    {
        name: "tofucraft:tofu_solid",
        bleed: [0.9, 0.8, 0.9, 0.95]
    },
    {
        name: "tofucraft:tofu_metal",
        bleed: [0.9, 0.8, 0.85, 0.95]
    },
    {
        name: "tofucraft:tofu_diamond",
        bleed: [0.8, 0.7, 0.75, 0.85]
    },
    {
        name: 'tofucraft:sculk_bone',
        bleed: [0.8, 0.65, 0.7, 0.8]
    },
    {
        name: 'aquamirae:terrible',
        bleed: [0.9, 0.8, 0.85, 0.95]
    },
    {
        name: 'aquamirae:abyssal',
        bleed: [0.65, 0.8, 0.8, 0.9]
    },
    {
        name: 'aquamirae:three_bolt',
        bleed: [0.5, 0.6, 0.6, 0.7]
    },
    {
        name: 'deeperdarker:warden',
        bleed: [0.7, 0.45, 0.5, 0.7]
    },
    {
        name: 'epicsamurai:gold_samurai',
        bleed: [0.9, 0.8, 0.9, 1.0]
    },
    {
        name: 'epicsamurai:iron_samurai',
        bleed: [0.9, 0.8, 0.9, 1.0]
    },
    {
        name: 'epicsamurai:silver_samurai',
        bleed: [0.85, 0.8, 0.9, 0.9]
    },
    {
        name: 'epicsamurai:steel',
        bleed: [0.85, 0.8, 0.9, 0.9]
    },
    {
        name: 'epicsamurai:red_samurai',
        bleed: [0.85, 0.75, 0.8, 0.9]
    },
    {
        name: 'epicsamurai:diamond_samurai',
        bleed: [0.85, 0.75, 0.8, 0.9]
    },
    {
        name: 'epicsamurai:brass_samurai',
        bleed: [0.85, 0.75, 0.8, 0.9]
    },
    {
        name: 'epicsamurai:gray_samurai',
        bleed: [0.85, 0.75, 0.8, 0.9]
    },
    {
        name: 'epicsamurai:green_samurai',
        bleed: [0.85, 0.75, 0.8, 0.9]
    },
    {
        name: 'epicsamurai:blue_samurai',
        bleed: [0.85, 0.75, 0.8, 0.9]
    },
    {
        name: 'epicsamurai:amethyst_samurai',
        bleed: [0.7, 0.5, 0.5, 0.7]
    },
    {
        name: 'epicsamurai:quartz_samurai',
        bleed: [0.7, 0.5, 0.5, 0.7]
    },
    {
        name: 'epicsamurai:netherite_samurai',
        bleed: [0.7, 0.5, 0.5, 0.7]
    },
    {
        name: 'epicsamurai:sculk_samurai',
        bleed: [0.7, 0.5, 0.5, 0.7]
    },
    {
        name: 'minecraft:leather',
        bleed: [1.0, 0.95, 0.95, 1.0]
    },
    {
        name: 'minecraft:iron',
        bleed: [0.95, 0.8, 0.9, 1.0]
    },
    {
        name: 'minecraft:golden',
        bleed: [0.95, 0.8, 0.9, 1.0]
    },
    {
        name: 'minecraft:diamond',
        bleed: [0.8, 0.65, 0.7, 0.85]
    },
    {
        name: 'minecraft:netherite',
        bleed: [0.75, 0.55, 0.6, 0.75]
    },
    {
        name: 'epicpaladins:assassin',
        bleed: [0.95, 0.8, 0.9, 1.0]
    },
    {
        name: 'epicpaladins:knight',
        bleed: [0.95, 0.8, 0.9, 1.0]
    },
    {
        name: 'monsterplus:crystal',
        bleed: [0.9, 0.75, 0.75, 0.9]
    },
    {
        name: 'epicsamurai:iron',
        bleed: [0.95, 0.8, 0.9, 1.0]
    },
    {
        name: 'epicsamurai:golden',
        bleed: [0.95, 0.8, 0.9, 1.0]
    },
    {
        name: 'epicsamurai:diamond',
        bleed: [0.8, 0.65, 0.7, 0.85]
    },
    {
        name: 'epicsamurai:netherite',
        bleed: [0.75, 0.55, 0.6, 0.75]
    },
];
//default 0.95 0.8 0.9 1.0
const armorType = [
    'helmet',
    'chestplate',
    'leggings',
    'boots'
];

for (var set of genSets) {
    for (let i = 0; i < armorType.length; i++) {
        console.log(`{\n"id": "${set.name}_${armorType[i]}",\n"chance_multiplier": ${set.bleed[i]},\n},`);
    }
};

*/
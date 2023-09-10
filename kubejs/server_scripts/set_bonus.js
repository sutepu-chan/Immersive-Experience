const durationConst = 400;

const set = {
    "name": "minecraft:diamond",
    "requirements": 2,
    "effects": [
        {
            "effect": "regeneration",
            "duration": durationConst,
            "amplifier": 0
        }
    ]
}

const sets = [set];

PlayerEvents.tick(e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    if (e.player.level.time % 100 == 0) {
        for (let armorSet in sets) {
            var setCount = 0;
            if (headArmorItem.id === sets[armorSet].name + '_helmet') {
                setCount ++
            };
            if (chestArmorItem.id === sets[armorSet].name + '_chestplate') {
                setCount ++
            };
            if (legsArmorItem.id === sets[armorSet].name + '_leggings') {
                setCount ++
            };
            if (feetArmorItem.id === sets[armorSet].name + '_boots') {
                setCount ++
            };
            if (setCount >= sets[armorSet].requirements) {
                for (let x in sets[armorSet].effects) {
                    e.player.potionEffects.add(sets[armorSet].effects[x].effect, sets[armorSet].effects[x].duration, sets[armorSet].effects[x].amplifier);
                }
            };
        };
    };
});
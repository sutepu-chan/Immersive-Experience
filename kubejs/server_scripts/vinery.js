ServerEvents.recipes(e => {
    e.remove({id: 'vinery:grapevine_stem'});
    e.shaped('4x vinery:grapevine_stem', ['L', 'L', 'L'], {
        L: '#minecraft:oak_logs'
    });
});
WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', [
        'epicpaladins:jade_ore',
        'rftoolsbase:dimensionalshard_end',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_overworld'
    ])
})
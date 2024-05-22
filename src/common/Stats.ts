export interface Stats{
    crit:number,
    specialization:number,
    domination:number,
    swiftness:number,
    endurance:number,
    expertise:number,
}

export function sumStats(stats1:Stats, stats2:Stats) : Stats{
    return {
        crit: stats1.crit + stats2.crit,
        specialization: stats1.specialization + stats2.specialization,
        domination: stats1.domination + stats2.domination,
        swiftness: stats1.swiftness + stats2.swiftness,
        endurance: stats1.endurance + stats2.endurance,
        expertise: stats1.expertise + stats2.expertise,
    };
}
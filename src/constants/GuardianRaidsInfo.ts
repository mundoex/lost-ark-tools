import { ItemEnum } from "../common/Items/ItemEnum";
import { RaidInfo } from "../common/Raids/RaidInfo";

export const GUARDIANS_RAIDS_INFO: readonly RaidInfo[] = [
    {
        name: "Sonavel",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 60 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 180 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
                extraRewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [],
                }
            }
        ]
    },
    {
        name: "Gargadeth",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 100 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 300 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
                extraRewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [],
                }
            }
        ]
    },
    {
        name: "Veskal",
        gates: [
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 167 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 24 },
                    ],
                },
                extraRewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [],
                }
            }
        ]
    },
    {
        name: "Argeos",
        gates: [
            {
                itemLevelRequired: 1640,
                rewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 93 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 280 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 11 },
                    ],
                },
                extraRewards: {
                    gold: 0,
                    soloTokens: 0,
                    materialRewards: [],
                    honingMatsRewards: [],
                }
            }
        ]
    }
]
import { ItemEnum } from "../common/Items/ItemEnum";
import { RaidInfo } from "../common/Raids/RaidInfo";

export const RAIDS_INFO: readonly RaidInfo[] = [
    {
        name: "Valtan (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1415,
                rewards: {
                    gold: 240,
                    soloTokens: 50,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 600 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 5 },
                    ],
                },
                extraRewards: {
                    gold: 140,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 280 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 560 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 600 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 7 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1415,
                rewards: {
                    gold: 360,
                    soloTokens: 70,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 900 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 5 },
                    ],
                },
                extraRewards: {
                    gold: 200,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 360 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 720 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 900 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
        ],
    },
    {
        name: "Valtan (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1415,
                rewards: {
                    gold: 300,
                    soloTokens: 50,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 150 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 300 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 400 },
                    ],
                },
                extraRewards: {
                    gold: 180,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 400 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 6 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1415,
                rewards: {
                    gold: 450,
                    soloTokens: 70,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 600 },
                    ],
                },
                extraRewards: {
                    gold: 255,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 300 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 600 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 700 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 7 },
                    ],
                },
            },
        ],
    },
    {
        name: "Valtan (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1445,
                rewards: {
                    gold: 400,
                    soloTokens: 50,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 500 },
                    ],
                },
                extraRewards: {
                    gold: 255,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 360 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 720 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 10 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1445,
                rewards: {
                    gold: 700,
                    soloTokens: 70,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 700 },
                    ],
                },
                extraRewards: {
                    gold: 380,
                    materialRewards: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 480 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 960 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1300 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 10 },
                    ],
                },
                bidBox: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Vykas (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1430,
                rewards: {
                    gold: 280,
                    soloTokens: 60,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 6 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 700 },
                    ],
                },
                extraRewards: {
                    gold: 140,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 340 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 680 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 800 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 9 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1430,
                rewards: {
                    gold: 520,
                    soloTokens: 100,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 280 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 560 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 6 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1100 },
                    ],
                },
                extraRewards: {
                    gold: 230,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 420 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 840 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1200 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 10 },
                    ],
                },
            },
        ],
    },
    {
        name: "Vykas (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1430,
                rewards: {
                    gold: 350,
                    soloTokens: 60,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 150 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 300 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 500 },
                    ],
                },
                extraRewards: {
                    gold: 175,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 300 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 600 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 700 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 7 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1430,
                rewards: {
                    gold: 650,
                    soloTokens: 100,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 700 },
                    ],
                },
                extraRewards: {
                    gold: 290,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 360 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 720 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 9 },
                    ],
                },
            },
        ],
    },
    {
        name: "Vykas (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1460,
                rewards: {
                    gold: 500,
                    soloTokens: 60,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 600 },
                    ],
                },
                extraRewards: {
                    gold: 280,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 450 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 900 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1600 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1460,
                rewards: {
                    gold: 1000,
                    soloTokens: 100,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 280 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 560 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 900 },
                    ],
                },
                extraRewards: {
                    gold: 435,
                    materialRewards: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 520 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 1040 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2000 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
                bidBox: [{ name: ItemEnum.COVETOUS_WING, quantity: 5 }],
            },
        ],
    },
    {
        name: "Clown (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1475,
                rewards: {
                    gold: 320,
                    soloTokens: 60,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 5 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                    ],
                },
                extraRewards: {
                    gold: 160,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 360 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 720 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2200 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 13 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1460,
                rewards: {
                    gold: 480,
                    soloTokens: 90,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 240 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 480 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 5 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                    ],
                },
                extraRewards: {
                    gold: 265,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 480 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 960 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2200 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 13 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1475,
                rewards: {
                    gold: 800,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 280 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 560 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 5 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                    ],
                },
                extraRewards: {
                    gold: 375,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 600 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 1200 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2600 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
        ],
    },
    {
        name: "Clown",
        partySize: 4,
        gates: [
            //G1
            {
                itemLevelRequired: 1475,
                rewards: {
                    gold: 400,
                    soloTokens: 60,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 800 },
                    ],
                },
                extraRewards: {
                    gold: 200,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 300 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 600 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1300 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1460,
                rewards: {
                    gold: 600,
                    soloTokens: 90,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 800 },
                    ],
                },
                extraRewards: {
                    gold: 335,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 420 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 840 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1300 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1475,
                rewards: {
                    gold: 1000,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 280 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 560 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 800 },
                    ],
                },
                extraRewards: {
                    gold: 470,
                    materialRewards: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, quantity: 540 },
                        { name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, quantity: 1080 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1600 },
                        { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
                bidBox: [{ name: ItemEnum.MAYHEM_HORN, quantity: 5 }],
            },
        ],
    },
    {
        name: "Brelshaza (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1490,
                rewards: {
                    gold: 800,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 2 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1100 },
                    ],
                },
                extraRewards: {
                    gold: 140,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1490,
                rewards: {
                    gold: 800,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 2 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1300 },
                    ],
                },
                extraRewards: {
                    gold: 210,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 10 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1500,
                rewards: {
                    gold: 800,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 140 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 280 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 2 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1600 },
                    ],
                },
                extraRewards: {
                    gold: 280,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 300 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 600 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
            //G4
            {
                itemLevelRequired: 1520,
                rewards: {
                    gold: 1280,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 420 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 840 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 4 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 530,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 600 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 1200 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 7000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 28 },
                    ],
                },
            },
        ],
    },
    {
        name: "Brelshaza (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1490,
                rewards: {
                    gold: 1000,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 100 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 200 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                    ],
                },
                extraRewards: {
                    gold: 250,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2100 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 6 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1490,
                rewards: {
                    gold: 1000,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 100 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 200 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1200 },
                    ],
                },
                extraRewards: {
                    gold: 300,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2700 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 9 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1500,
                rewards: {
                    gold: 1000,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1500 },
                    ],
                },
                extraRewards: {
                    gold: 400,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 300 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 600 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3400 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 14 },
                    ],
                },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
            },
            //G4
            {
                itemLevelRequired: 1520,
                rewards: {
                    gold: 1600,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 400 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 800 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 600,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 600 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 1200 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 7000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 27 },
                    ],
                },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 15 }],
            },
        ],
    },
    {
        name: "Brelshaza (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 1200,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 280 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 560 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 400,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 260 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 520 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 1200,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 320 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 640 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 400,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 420 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 840 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1550,
                rewards: {
                    gold: 1200,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 400 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 800 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 500,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 640 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 1280 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 5200 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 24 },
                    ],
                },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
            },
            //G4
            {
                itemLevelRequired: 1560,
                rewards: {
                    gold: 2000,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 10 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 800 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 1600 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 6000 },
                    ],
                },
                extraRewards: {
                    gold: 800,
                    materialRewards: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 10 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 1000 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 2000 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 10000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 40 },
                    ],
                },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 30 }],
            },
        ],
    },
    {
        name: "Kayangel (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 640,
                    soloTokens: 100,
                    materialRewards: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 260 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 520 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 3 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2100 },
                    ],
                },
                extraRewards: {
                    gold: 240,
                    materialRewards: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 220 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 440 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3500 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 10 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 960,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 300 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 600 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 3 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 320,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 280 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 560 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3500 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 1280,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 17 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 400 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 800 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 4 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4100 },
                    ],
                },
                extraRewards: {
                    gold: 400,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 17 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 340 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 680 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 5500 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
        ],
    },
    {
        name: "Kayangel (Normal)",
        partySize: 4,
        gates: [
            //G1
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 800,
                    soloTokens: 100,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 0 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 240 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 480 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2000 },
                    ],
                },
                extraRewards: {
                    gold: 300,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 0 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 5 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 1200,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 280 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 560 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 400,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 220 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 440 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1500 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 6 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1540,
                rewards: {
                    gold: 1600,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 17 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 360 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 720 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4000 },
                    ],
                },
                extraRewards: {
                    gold: 500,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 17 }],
                    honingMatsRewards: [
                        { name: ItemEnum.OBLITERATION_STONE, quantity: 300 },
                        { name: ItemEnum.PROTECTION_STONE, quantity: 600 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2000 },
                        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
                bidBox: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }],
            },
        ],
    },
    {
        name: "Kayangel (Hard)",
        partySize: 4,
        gates: [
            //G1
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 1000,
                    soloTokens: 100,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 14 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 80 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 160 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 350,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 14 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 70 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 140 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 3 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 1600,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 16 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3500 },
                    ],
                },
                extraRewards: {
                    gold: 500,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 16 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 90 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 180 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 4 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 2200,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 20 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 150 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 300 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 5000 },
                    ],
                },
                extraRewards: {
                    gold: 700,
                    materialRewards: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }, { name: ItemEnum.LIGHTS_TRIAL, quantity: 20 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 6 },
                    ],
                },
                bidBox: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 5 }],
            },
        ],
    },
    {
        name: "Akkan (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 800,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 140 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 280 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 2 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2700 },
                    ],
                },
                extraRewards: {
                    gold: 360,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 160 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 320 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 7 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 1440,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 2 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2700 },
                    ],
                },
                extraRewards: {
                    gold: 440,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 2080,
                    soloTokens: 400,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 260 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 520 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 3 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4200 },
                    ],
                },
                extraRewards: {
                    gold: 600,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 260 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 520 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 5000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 14 },
                    ],
                },
            },
        ],
    },
    {
        name: "Akkan (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 1000,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1600 },
                    ],
                },
                extraRewards: {
                    gold: 450,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 6 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 1800,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 160 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 320 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 1600 },
                    ],
                },
                extraRewards: {
                    gold: 550,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 160 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 320 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1580,
                rewards: {
                    gold: 2600,
                    soloTokens: 400,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 240 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 480 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 750,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 240 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 480 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4200 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 11 },
                    ],
                },
                bidBox: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }],
            },
        ],
    },
    {
        name: "Akkan (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 1500,
                    soloTokens: 150,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 600,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 9 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 2500,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 700,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 240 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 480 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 3500,
                    soloTokens: 400,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 8 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 320 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 640 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4000 },
                    ],
                },
                extraRewards: {
                    gold: 950,
                    materialRewards: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 8 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 360 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 720 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 5500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 18 },
                    ],
                },
                bidBox: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 10 }],
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 1200,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 3 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 400,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 1600,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 3 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 440,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 2400,
                    soloTokens: 450,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }, { name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 260 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 520 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 4 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                    ],
                },
                extraRewards: {
                    gold: 720,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }, { name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 280 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 560 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 7500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Normal)",
        partySize: 4,
        gates: [
            //G1
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 1500,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 100 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 200 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2000 },
                    ],
                },
                extraRewards: {
                    gold: 600,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 2000,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 130 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 260 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 650,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1600,
                rewards: {
                    gold: 3000,
                    soloTokens: 450,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }, { name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 130 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 260 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 1000,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }, { name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 1 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 280 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 560 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 7500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
                bidBox: [{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 1 }],
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Hard)",
        partySize: 4,
        gates: [
            //G1
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 3000,
                    soloTokens: 200,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 140 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 280 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 1200,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 0 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 0 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 4000,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 140 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 280 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 1450,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 0 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 0 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 6000,
                    soloTokens: 450,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 }, { name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 160 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 320 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 2000,
                    materialRewards: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 }, { name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 0 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 0 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                    ],
                },
                bidBox: [{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }],
            },
        ],
    },
    {
        name: "Thaemine (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 2450,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 6 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 150 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 300 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 5 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 750,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 6 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 420 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 840 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3850 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 15 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 2800,
                    soloTokens: 300,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 8 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 180 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 360 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 5 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3750 },
                    ],
                },
                extraRewards: {
                    gold: 840,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 8 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 495 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 990 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4950 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 18 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 3850,
                    soloTokens: 500,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 12 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 225 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 450 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 6 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                    ],
                },
                extraRewards: {
                    gold: 1200,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 12 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 660 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 1320 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 6600 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 22 },
                    ],
                },
            },
        ],
    },
    {
        name: "Thaemine (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 3500,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 6 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 100 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 200 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2000 },
                    ],
                },
                extraRewards: {
                    gold: 1500,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 6 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 2 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 380 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 760 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 13 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 4000,
                    soloTokens: 300,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 8 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 120 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 240 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2500 },
                    ],
                },
                extraRewards: {
                    gold: 1800,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 8 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 450 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 900 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1610,
                rewards: {
                    gold: 5500,
                    soloTokens: 500,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 12 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 150 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 300 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 2500,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 12 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 600 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 1200 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 6000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 20 },
                    ],
                },
                bidBox: [{ name: ItemEnum.DARK_FIRE, quantity: 10 }],
            },
        ],
    },
    {
        name: "Thaemine (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 3500 + 900,
                    soloTokens: 250,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 12 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 150 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 300 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 1700,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 12 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 500 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 1000 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 5000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 15 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 4500 + 1000,
                    soloTokens: 300,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 16 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 9 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3000 },
                    ],
                },
                extraRewards: {
                    gold: 1900,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 16 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 9 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 600 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 1200 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 6000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 21 },
                    ],
                },
            },
            //G3
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 7500 + 1400,
                    soloTokens: 500,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 24 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 240 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 480 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 3600 },
                    ],
                },
                extraRewards: {
                    gold: 2300,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 24 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 700 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 1400 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 7500 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 27 },
                    ],
                },
                bidBox: [{ name: ItemEnum.DARK_FIRE, quantity: 20 }],
            },
            //G4
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 8000 + 1800,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 24 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 300 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 600 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 4500 },
                    ],
                },
                extraRewards: {
                    gold: 2300,
                    materialRewards: [{ name: ItemEnum.DARK_FIRE, quantity: 24 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 850 },
                        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 1700 },
                        { name: ItemEnum.HONOR_SHARD, quantity: 9000 },
                        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 34 },
                    ],
                },
                bidBox: [{ name: ItemEnum.DARK_FIRE, quantity: 20 }],
            },
        ],
    },
    {
        name: "Echidna (Solo)",
        partySize: 1,
        gates: [
            //G1
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 4800,
                    soloTokens: 400,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 210 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 420 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 2 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3600 },
                    ],
                },
                extraRewards: {
                    gold: 1450,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 440 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 880 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3630 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 8 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 8000,
                    soloTokens: 550,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 300 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 600 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 3 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 4500 },
                    ],
                },
                extraRewards: {
                    gold: 2400,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 770 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1540 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 5500 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
        ],
    },
    {
        name: "Echidna (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 6000,
                    soloTokens: 400,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 140 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 280 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 2200,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 400 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 800 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 2500 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 7 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 10000,
                    soloTokens: 550,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 0 },
                    ],
                },
                extraRewards: {
                    gold: 3400,
                    materialRewards: [{ name: ItemEnum.AGRIS_SCALE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 700 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1400 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 5000 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 14 },
                    ],
                },
                bidBox: [{ name: ItemEnum.AGRIS_SCALE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Echidna (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1630,
                rewards: {
                    gold: 7000,
                    soloTokens: 400,
                    materialRewards: [{ name: ItemEnum.ALCAONE_EYE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 2400 },
                    ],
                },
                extraRewards: {
                    gold: 2800,
                    materialRewards: [{ name: ItemEnum.ALCAONE_EYE, quantity: 3 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 550 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1100 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3800 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1630,
                rewards: {
                    gold: 12500,
                    soloTokens: 550,
                    materialRewards: [{ name: ItemEnum.ALCAONE_EYE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 260 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 520 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3800 },
                    ],
                },
                extraRewards: {
                    gold: 4100,
                    materialRewards: [{ name: ItemEnum.ALCAONE_EYE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 850 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1700 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 5800 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 19 },
                    ],
                },
                bidBox: [{ name: ItemEnum.ALCAONE_EYE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Behemoth",
        partySize: 16,
        gates: [
            //G1
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 6500,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 10 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 10 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 200 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 400 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 2700 },
                    ],
                },
                extraRewards: {
                    gold: 1800,
                    materialRewards: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 10 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 10 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 550 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1100 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3800 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 12 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1620,
                rewards: {
                    gold: 11500,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 20 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 18 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 260 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 520 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3800 },
                    ],
                },
                extraRewards: {
                    gold: 2700,
                    materialRewards: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 20 }, { name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 18 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 850 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1700 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 5800 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 19 },
                    ],
                },
                bidBox: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 20 }],
            },
        ],
    },
    {
        name: "Aegir (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1660,
                rewards: {
                    gold: 7500,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 480 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 960 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 3600 },
                    ],
                },
                extraRewards: {
                    gold: 3200,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 700 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1400 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 6500 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 16 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1660,
                rewards: {
                    gold: 16500,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 580 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1160 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 4400 },
                    ],
                },
                extraRewards: {
                    gold: 5300,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 1000 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 2000 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 9500 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 28 },
                    ],
                },
                bidBox: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Aegir (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1680,
                rewards: {
                    gold: 10000,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 8 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 580 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1160 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 4200 },
                    ],
                },
                extraRewards: {
                    gold: 4100,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 8 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 850 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1700 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 7500 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 28 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1680,
                rewards: {
                    gold: 20000,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 660 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1320 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 5400 },
                    ],
                },
                extraRewards: {
                    gold: 6600,
                    materialRewards: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 1150 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 2300 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 11000 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 38 },
                    ],
                },
                bidBox: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 10 }],
            },
        ],
    },
    {
        name: "Brelshaza Act2 (Normal)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1670,
                rewards: {
                    gold: 9000,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 540 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1080 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 4000 },
                    ],
                },
                extraRewards: {
                    gold: 3800,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 4 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 800 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1600 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 7000 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 18 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1670,
                rewards: {
                    gold: 18500,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 650 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1280 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 4600 },
                    ],
                },
                extraRewards: {
                    gold: 5600,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 6 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 1050 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 2100 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 10500 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 30 },
                    ],
                },
                bidBox: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 5 }],
            },
        ],
    },
    {
        name: "Brelshaza Act2 (Hard)",
        partySize: 8,
        gates: [
            //G1
            {
                itemLevelRequired: 1690,
                rewards: {
                    gold: 11000,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 8 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 640 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1280 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 4600 },
                    ],
                },
                extraRewards: {
                    gold: 4500,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 8 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 950 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1900 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 8000 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 32 },
                    ],
                },
            },
            //G2
            {
                itemLevelRequired: 1690,
                rewards: {
                    gold: 23000,
                    soloTokens: 0,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 700 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 1400 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 0 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 6000 },
                    ],
                },
                extraRewards: {
                    gold: 7200,
                    materialRewards: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 12 }],
                    honingMatsRewards: [
                        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 1400 },
                        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 2800 },
                        { name: ItemEnum.DESTINY_SHARD, quantity: 14000 },
                        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 48 },
                    ],
                },
                bidBox: [{ name: ItemEnum.SHADOW_OF_KARMA, quantity: 10 }],
            },
        ],
    },
]
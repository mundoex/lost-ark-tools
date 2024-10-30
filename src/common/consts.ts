import { RaidInfo } from "./RaidInfo";

export const PET_BUFFS:readonly string[] = ["none", "crit", "specialization", "swiftness","expertise","domination","endurance"];
export const GEAR_NAMES:readonly string[] = ["Helmet", "Pauldrons", "Chestpiece", "Pants", "Gloves", "Weapon"];
export const GEAR_LEVELS:readonly number[] = [
    500, 545, 590, 635, 680, 725, 765, 805, 845, 885, 925, 960, 995, 1030, 1065, 1100, //other
    1250, 1275, 1295, 1310, 1325, 1340, 1355, 1370, 1385, 1400, 1415, 1430, 1445, 1460, 1475, 1490,    //valtan
    1510, 1520, 1530, 1540, 1550, 1560, 1570, 1580,    //brel
    1585, 1590, 1595, 1600, 1605, 1610, 1615, 1620, 1625, 1630, 1635, 1640, 1645, 1650   //akkan
];

export enum MaterialsEnum {
    SUNSET_SCALE = "Sunset Scale",
    ARGOS_BLOOD = "Argos Blood",
    DEMON_BEAST_BONE = "Demon Beast Bone",
    COVETOUS_WING = "Covetous Wing",
    MAYHEM_HORN = "Mayhem Horn",
    PHANTOM_INTENTION = "Phantom Intention",
    LIGHTS_TRIAL = "Light's Trial",
    EMPYREAN_CONTEMPLATION = "Empyrean Contemplation",
    EYE_OF_DECAY = "Eye of Decay",
    CLEAR_ENERGY_OF_WISDOM = "Clear Energy of Wisdom",
    CLEAR_ELIXIR_OF_WISDOM = "Clear Elixir of Wisdom",
    SPLENDID_ENERGY_OF_WISDOM = "Slendid Energy of Wisdom",
    SPLENDID_ELIXIR_OF_WISDOM = "Slendid Elixir of Wisdom",
    DARK_FIRE = "Dark Fire",
    MAGICAL_SPRING_WATER = "Magical Spring Water",
    AGRIS_SCALE = "Agris's Scale",
    ALCAONE_EYE = "Alcaone's Eye",
    BEHEMOTH_SCALE = "Behemoth's Scale",
    HELLFIRE_KEYSTONE = "Hellfire Keystone",
}

export const RAIDS_INFO: readonly RaidInfo[] = [
    {
        name: "Oreha's Well (Normal)",
        gates: [
            {
                itemLevelRequired: 1340,
                rewards: { gold: 200, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 1 }] },
                box: { gold: 100, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1340,
                rewards: { gold: 300, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 2 }] },
                box: { gold: 150, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Oreha's Well (Hard)",
        gates: [
            {
                itemLevelRequired: 1370,
                rewards: { gold: 300, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 3 }] },
                box: { gold: 100, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1370,
                rewards: { gold: 400, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 4 }] },
                box: { gold: 150, materials: [{ name: MaterialsEnum.SUNSET_SCALE, quantity: 4 }] },
            },
        ],
    },
    {
        name: "Argos",
        gates: [
            {
                itemLevelRequired: 1370,
                rewards: { gold: 150, materials: [{ name: MaterialsEnum.ARGOS_BLOOD, quantity: 1 }] },
                box: { gold: 50, materials: [{ name: MaterialsEnum.ARGOS_BLOOD, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1370,
                rewards: { gold: 150, materials: [{ name: MaterialsEnum.ARGOS_BLOOD, quantity: 2 }] },
                box: { gold: 50, materials: [{ name: MaterialsEnum.ARGOS_BLOOD, quantity: 2 }] },
            },
            {
                itemLevelRequired: 1370,
                rewards: { gold: 200, materials: [{ name: MaterialsEnum.ARGOS_BLOOD, quantity: 2 }] },
                box: { gold: 75, materials: [{ name: MaterialsEnum.ARGOS_BLOOD, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Valtan (Solo)",
        gates: [
            {
                itemLevelRequired: 1415,
                rewards: { gold: 240, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 1 }] },
                box: { gold: 140, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1415,
                rewards: { gold: 360, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 2 }] },
                box: { gold: 200, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Valtan (Normal)",
        gates: [
            {
                itemLevelRequired: 1415,
                rewards: { gold: 300, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 1 }] },
                box: { gold: 180, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1415,
                rewards: { gold: 450, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 2 }] },
                box: { gold: 255, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Valtan (Hard)",
        gates: [
            {
                itemLevelRequired: 1445,
                rewards: { gold: 400, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 3 }] },
                box: { gold: 255, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1445,
                rewards: { gold: 700, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 3 }] },
                box: { gold: 380, materials: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 3 }] },
                bidBox: [{ name: MaterialsEnum.DEMON_BEAST_BONE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Vykas (Solo)",
        gates: [
            {
                itemLevelRequired: 1430,
                rewards: { gold: 280, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 1 }] },
                box: { gold: 140, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1430,
                rewards: { gold: 520, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 2 }] },
                box: { gold: 230, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Vykas (Normal)",
        gates: [
            {
                itemLevelRequired: 1430,
                rewards: { gold: 350, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 1 }] },
                box: { gold: 175, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1430,
                rewards: { gold: 650, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 2 }] },
                box: { gold: 290, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Vykas (Hard)",
        gates: [
            {
                itemLevelRequired: 1460,
                rewards: { gold: 500, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 3 }] },
                box: { gold: 280, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1460,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 3 }] },
                box: { gold: 435, materials: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 3 }] },
                bidBox: [{ name: MaterialsEnum.COVETOUS_WING, quantity: 5 }],
            },
        ],
    },
    {
        name: "Clown (Solo)",
        gates: [
            {
                itemLevelRequired: 1475,
                rewards: { gold: 320, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 1 }] },
                box: { gold: 160, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1460,
                rewards: { gold: 480, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 265, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
            },
            {
                itemLevelRequired: 1475,
                rewards: { gold: 800, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 375, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Clown",
        gates: [
            {
                itemLevelRequired: 1475,
                rewards: { gold: 400, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 1 }] },
                box: { gold: 200, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1460,
                rewards: { gold: 600, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 335, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
            },
            {
                itemLevelRequired: 1475,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 470, materials: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 2 }] },
                bidBox: [{ name: MaterialsEnum.MAYHEM_HORN, quantity: 5 }],
            },
        ],
    },
    {
        name: "Brelshaza (Solo)",
        gates: [
            {
                itemLevelRequired: 1490,
                rewards: { gold: 800, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 140, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1490,
                rewards: { gold: 800, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 210, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1500,
                rewards: { gold: 800, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 5 }] },
                box: { gold: 280, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 5 }] },
            },
            {
                itemLevelRequired: 1520,
                rewards: { gold: 1280, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 7 }] },
                box: { gold: 530, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 7 }] },
            },
        ],
    },
    {
        name: "Brelshaza (Normal)",
        gates: [
            {
                itemLevelRequired: 1490,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 250, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1490,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 300, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1500,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 5 }] },
                box: { gold: 400, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 5 }] },
                bidBox: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 5 }],
            },
            {
                itemLevelRequired: 1520,
                rewards: { gold: 1600, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 7 }] },
                box: { gold: 600, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 7 }] },
                bidBox: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 15 }],
            },
        ],
    },
    {
        name: "Brelshaza (Hard)",
        gates: [
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1200, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 6 }] },
                box: { gold: 400, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 6 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1200, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 6 }] },
                box: { gold: 500, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 6 }] },
            },
            {
                itemLevelRequired: 1550,
                rewards: { gold: 1200, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 7 }] },
                box: { gold: 500, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 7 }] },
                bidBox: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 5 }],
            },
            {
                itemLevelRequired: 1560,
                rewards: { gold: 2000, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 10 }] },
                box: { gold: 800, materials: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 10 }] },
                bidBox: [{ name: MaterialsEnum.PHANTOM_INTENTION, quantity: 30 }],
            },
        ],
    },
    {
        name: "Kayangel (Solo)",
        gates: [
            {
                itemLevelRequired: 1540,
                rewards: { gold: 640, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 11 }] },
                box: { gold: 240, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 11 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 960, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 12},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 320, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 12},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1280, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 17},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
                box: { gold: 400, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 17},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Kayangel (Normal)",
        gates: [
            {
                itemLevelRequired: 1540,
                rewards: { gold: 800, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 11 }] },
                box: { gold: 300, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 11 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1200, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 12},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 400, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 12},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1600, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 17},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
                box: { gold: 500, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 17},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
                bidBox: [{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }],
            },
        ],
    },
    {
        name: "Kayangel (Hard)",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 14},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 350, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 14},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1600, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 16},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 500, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 16},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 2200, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 20},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }] },
                box: { gold: 700, materials: [{ name: MaterialsEnum.LIGHTS_TRIAL, quantity: 20},{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }] },
                bidBox: [{ name: MaterialsEnum.EMPYREAN_CONTEMPLATION, quantity: 5 }],
            },
        ],
    },
    {
        name: "Akkan (Solo)",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: { gold: 800, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 360, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1440, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 440, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 2080, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 5 }] },
                box: { gold: 600, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 5 }] },
            },
        ],
    },
    {
        name: "Akkan (Normal)",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1000, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 450, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1800, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 500, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 2600, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 5 }] },
                box: { gold: 750, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 5 }] },
                bidBox: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 5 }],
            },
        ],
    },
    {
        name: "Akkan (Hard)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1500, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 7 }] },
                box: { gold: 600, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 7 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 2500, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 7 }] },
                box: { gold: 700, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 7 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 3500, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 8 }] },
                box: { gold: 950, materials: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 8 }] },
                bidBox: [{ name: MaterialsEnum.EYE_OF_DECAY, quantity: 10 }],
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Solo)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1200, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 400, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1600, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 440, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 2400, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 8 },{ name: MaterialsEnum.CLEAR_ELIXIR_OF_WISDOM, quantity: 2 }] },
                box: { gold: 720, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 8 },{ name: MaterialsEnum.CLEAR_ELIXIR_OF_WISDOM, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Normal)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1500, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 500, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 2000, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 550, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 3000, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 8 },{ name: MaterialsEnum.CLEAR_ELIXIR_OF_WISDOM, quantity: 2 }] },
                box: { gold: 900, materials: [{ name: MaterialsEnum.CLEAR_ENERGY_OF_WISDOM, quantity: 8 },{ name: MaterialsEnum.CLEAR_ELIXIR_OF_WISDOM, quantity: 2 }] },
                bidBox: [{ name: MaterialsEnum.CLEAR_ELIXIR_OF_WISDOM, quantity: 2 }],
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Hard)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 3000, materials: [{ name: MaterialsEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 750, materials: [{ name: MaterialsEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 4000, materials: [{ name: MaterialsEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 900, materials: [{ name: MaterialsEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 6000, materials: [{ name: MaterialsEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: MaterialsEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
                box: { gold: 1350, materials: [{ name: MaterialsEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: MaterialsEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
                bidBox: [{ name: MaterialsEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }],
            },
        ],
    },
    {
        name: "Thaemine (Normal)",
        gates: [
            {
                itemLevelRequired: 1610,
                rewards: { gold: 3500, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 6 },{ name:"Magical Spring Water", quantity: 4 }] },
                box: { gold: 1500, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 6 },{ name:"Magical Spring Water", quantity: 4 }] },
            },
            {
                itemLevelRequired: 1610,
                rewards: { gold: 4000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 8 },{ name:"Magical Spring Water", quantity: 6 }] },
                box: { gold: 2500, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 8 },{ name:"Magical Spring Water", quantity: 6 }] },
            },
            {
                itemLevelRequired: 1610,
                rewards: { gold: 5500, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 12 },{ name:"Magical Spring Water", quantity: 8 }] },
                box: { gold: 3000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 12 },{ name:"Magical Spring Water", quantity: 8 }] },
                bidBox: [{ name: MaterialsEnum.DARK_FIRE, quantity: 10 }],
            },
        ],
    },
    {
        name: "Thaemine (Hard)",
        gates: [
            {
                itemLevelRequired: 1630,
                rewards: { gold: 5000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 12 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 12 }] },
                box: { gold: 2000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 12 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 12 }] },
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 6000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 16 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
                box: { gold: 2400, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 16 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 9000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 24},{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                box: { gold: 2800, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 24 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                bidBox: [{ name: MaterialsEnum.DARK_FIRE, quantity: 20 }],
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 21000, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 24 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                box: { gold: 3600, materials: [{ name: MaterialsEnum.DARK_FIRE, quantity: 24 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                bidBox: [{ name: MaterialsEnum.DARK_FIRE, quantity: 20 }],
            },
        ],
    },
    {
        name: "Echidna (Normal)",
        gates: [
            {
                itemLevelRequired: 1620,
                rewards: { gold: 6000, materials: [{ name: MaterialsEnum.AGRIS_SCALE, quantity: 3 }] },
                box: { gold: 2200, materials: [{ name: MaterialsEnum.AGRIS_SCALE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 10000, materials: [{ name: MaterialsEnum.AGRIS_SCALE, quantity: 6 }] },
                box: { gold: 3400, materials: [{ name: MaterialsEnum.AGRIS_SCALE, quantity: 6 }] },
                bidBox: [{ name: MaterialsEnum.AGRIS_SCALE, quantity: 5 }],
            },
           
        ],
    },
    {
        name: "Echidna (Hard)",
        gates: [
            {
                itemLevelRequired: 1630,
                rewards: { gold: 7000, materials: [{ name: MaterialsEnum.ALCAONE_EYE, quantity: 3 }] },
                box: { gold: 2800, materials: [{ name: MaterialsEnum.ALCAONE_EYE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 12500, materials: [{ name: MaterialsEnum.ALCAONE_EYE, quantity: 6 }] },
                box: { gold: 4100, materials: [{ name: MaterialsEnum.ALCAONE_EYE, quantity: 6 }] },
                bidBox: [{ name: MaterialsEnum.ALCAONE_EYE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Behemoth",
        gates: [
            {
                itemLevelRequired: 1620,
                rewards: { gold: 6500, materials: [{ name: MaterialsEnum.BEHEMOTH_SCALE, quantity: 10 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 10 }] },
                box: { gold: 1800, materials: [{ name: MaterialsEnum.BEHEMOTH_SCALE, quantity: 10 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 10 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 11500, materials: [{ name: MaterialsEnum.BEHEMOTH_SCALE, quantity: 20 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
                box: { gold: 2700, materials: [{ name: MaterialsEnum.BEHEMOTH_SCALE, quantity: 20 },{ name: MaterialsEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
                bidBox: [{ name: MaterialsEnum.BEHEMOTH_SCALE, quantity: 20 }],
            },
        ],
    },
    {
        name: "Aegir (Normal)",
        gates: [
            {
                itemLevelRequired: 1660,
                rewards: { gold: 7500, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 4 }] },
                box: { gold: 3200, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 15500, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 6 }] },
                box: { gold: 5300, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 6 }] },
                bidBox: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Aegir (Hard)",
        gates: [
            {
                itemLevelRequired: 1680,
                rewards: { gold: 9000, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 8 }] },
                box: { gold: 4100, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 8 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 18500, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 12 }] },
                box: { gold: 6600, materials: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 12 }] },
                bidBox: [{ name: MaterialsEnum.HELLFIRE_KEYSTONE, quantity: 10 }],
            },
        ],
    },
]
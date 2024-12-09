import { ItemEnum } from "./ItemEnum";
import { RaidInfo } from "./RaidInfo";

export const env = import.meta.env.MODE;

export const PET_BUFFS:readonly string[] = ["none", "crit", "specialization", "swiftness","expertise","domination","endurance"];
export const GEAR_NAMES:readonly string[] = ["Helmet", "Pauldrons", "Chestpiece", "Pants", "Gloves", "Weapon"];

export const SUPPORTS_CLASS_NAMES = ['Bard','Paladin','Artist'];
export const PARTY_COLORS=['green','purple','#34ebe8','#d4cf3f'];
export const TIER_COLORS=['#d4240d','#d44c0d','#d4b60f','#099928','#0d81d4'];

export const BASE_URL=env === 'development' ? 'lost-ark-tools/' : '';

export interface ItemRecord{
    image: string;
    bundleSize?:number;
}

export const ItemsList: Record<ItemEnum, ItemRecord> = {
    //blues
    [ItemEnum.DESTINY_GUARDIAN_STONE]: { image: `${BASE_URL}destiny_guardian_stone.webp`, bundleSize: 10 },
    [ItemEnum.REFINED_PROTECTION_STONE]: { image: `${BASE_URL}refined_protection_stone.webp`, bundleSize: 10 },
    [ItemEnum.PROTECTION_STONE]: { image: `${BASE_URL}protection_stone.webp`, bundleSize: 10 },

    //reds
    [ItemEnum.DESTINY_DESTRUCTION_STONE]: { image: `${BASE_URL}destiny_destruction_stone.webp`, bundleSize: 10 },
    [ItemEnum.REFINED_OBLITERATION_STONE]: { image: `${BASE_URL}refined_obliteration_stone.webp`, bundleSize: 10 },
    [ItemEnum.OBLITERATION_STONE]: { image: `${BASE_URL}obliteration_stone.webp`, bundleSize: 10 },

    //leaps
    [ItemEnum.DESTINY_LEAPSTONE]: { image: `${BASE_URL}destiny_leapstone.webp` },
    [ItemEnum.RADIANT_HONOR_LEAPSTONE]: { image: `${BASE_URL}radiant_leapstone.webp`, },
    [ItemEnum.MARVELOUS_HONOR_LEAPSTONE]: { image: `${BASE_URL}marvelous_leapstone.webp`, },

    //fusion mats
    [ItemEnum.ABIDOS_FUSION_MATERIAL]: { image: `${BASE_URL}abidos_fusion_material.webp` },
    [ItemEnum.PRIME_OREHA_FUSION_MATERIAL]: { image: `${BASE_URL}prime_oreha.webp` },
    [ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL]: { image: `${BASE_URL}superior_oreha.webp` },

    //shards
    [ItemEnum.DESTINY_SHARD]: { image: `${BASE_URL}destiny_shard.webp` },
    [ItemEnum.HONOR_SHARD]: { image: `${BASE_URL}honor_shard.webp` },

    [ItemEnum.DESTINY_SHARD_POUCH_S]: { image: `${BASE_URL}destiny_shard_pouch_s.webp` },
    [ItemEnum.DESTINY_SHARD_POUCH_M]: { image: `${BASE_URL}destiny_shard_pouch_m.webp` },
    [ItemEnum.DESTINY_SHARD_POUCH_L]: { image: `${BASE_URL}destiny_shard_pouch_l.webp` },

    [ItemEnum.HONOR_SHARD_POUCH_S]: { image: `${BASE_URL}honor_shard_pouch_s.webp` },
    [ItemEnum.HONOR_SHARD_POUCH_M]: { image: `${BASE_URL}honor_shard_pouch_m.webp` },
    [ItemEnum.HONOR_SHARD_POUCH_L]: { image: `${BASE_URL}honor_shard_pouch_l.webp` },

    //solars
    [ItemEnum.GLACIERS_BREATH]: { image: `${BASE_URL}glacier_breath.webp` },
    [ItemEnum.LAVAS_BREATH]: { image: `${BASE_URL}lava_breath.webp` },
    [ItemEnum.SOLAR_GRACE]: { image: `${BASE_URL}solar_grace.webp` },
    [ItemEnum.SOLAR_BLESSING]: { image: `${BASE_URL}solar_blessing.webp` },
    [ItemEnum.SOLAR_PROTECTION]: { image: `${BASE_URL}solar_protection.webp` },

    //special honing
    [ItemEnum.SPECIAL_HONING_CIRCULATED_LEAPSTONE]: { image: `${BASE_URL}special_honing_circulated_leapstone.webp` },
    [ItemEnum.SPECIAL_HONING_CONCENTRATED_LEAPSTONE]: { image: `${BASE_URL}special_honing_concentrated_leapstone.webp` },

    //raids rewards
    [ItemEnum.SUNSET_SCALE]: { image: `https://lostarkcodex.com/icons/use_7_188.webp` },
    [ItemEnum.ARGOS_BLOOD]: { image: `https://lostarkcodex.com/icons/use_2_202.webp` },
    [ItemEnum.DEMON_BEAST_BONE]: { image: `https://i.imgur.com/QDtkgbg.png` },
    [ItemEnum.COVETOUS_WING]: { image: `https://i.imgur.com/xeGsS2w.png` },
    [ItemEnum.MAYHEM_HORN]: { image: `https://i.imgur.com/UUMunnH.png` },
    [ItemEnum.PHANTOM_INTENTION]: { image: `https://i.imgur.com/z7dMBFs.png` },
    [ItemEnum.LIGHTS_TRIAL]: { image: `https://i.imgur.com/QencPzO.png` },
    [ItemEnum.EMPYREAN_CONTEMPLATION]: { image: `https://i.imgur.com/YTX6DKk.png` },
    [ItemEnum.EYE_OF_DECAY]: { image: `https://i.imgur.com/LrRIH8K.png` },
    [ItemEnum.SPLENDID_ENERGY_OF_WISDOM]: { image: `${BASE_URL}splendid_energy.webp` },
    [ItemEnum.SPLENDID_ELIXIR_OF_WISDOM]: { image: `${BASE_URL}elixir.webp` },
    [ItemEnum.MAGICAL_SPRING_WATER]: { image: `${BASE_URL}magical_spring_water.webp` },
    [ItemEnum.DARK_FIRE]: { image: `${BASE_URL}dark_fire.webp` },
    [ItemEnum.AGRIS_SCALE]: { image: `${BASE_URL}agris_scale.webp` },
    [ItemEnum.ALCAONE_EYE]: { image: `${BASE_URL}alcaone_eye.webp` },
    [ItemEnum.BEHEMOTH_SCALE]: { image: `${BASE_URL}behemoth_scale.png` },
    [ItemEnum.HELLFIRE_KEYSTONE]: { image: `${BASE_URL}hellfire_keystone.webp` },

    //other
    [ItemEnum.TRANSCENDENCE_TICKET_WEAPON]: { image: `${BASE_URL}transcendence_ticket_weapon.webp` },
    [ItemEnum.TRANSCENDENCE_TICKET_ARMOR]: { image: `${BASE_URL}transcendence_ticket_armor.webp` },
    [ItemEnum.CLEAR_MEDAL]: { image: `${BASE_URL}clear_medal.webp` },
    [ItemEnum.SYLMAEL_BLOODSTONE]: { image: `${BASE_URL}sylmael_bloodstone.webp` },
    [ItemEnum.EXPERT_TOKEN]: { image: `${BASE_URL}expert_token.png` },
    [ItemEnum.BLUE_CRYSTAL]: { image: `${BASE_URL}blue_crystal.png` },
    [ItemEnum.GOLD]: { image: `${BASE_URL}gold.webp` },

    //books
    [ItemEnum.METALLURGY_HELLFIRE_11_14]: { image: `${BASE_URL}book_hellfire_metallurgy.png` },
    [ItemEnum.TAILORING_HELLFIRE_11_14]: { image: `${BASE_URL}book_hellfire_tailoring.png` },
    [ItemEnum.METALLURGY_DECAY_13_15]: { image: `${BASE_URL}book_decay_metallurgy.webp` },
    [ItemEnum.TAILORING_DECAY_13_15]: { image: `${BASE_URL}book_decay_tailoring.webp` },
    [ItemEnum.METALLURGY_DECAY_16_19]: { image: `${BASE_URL}book_decay_metallurgy.webp` },
    [ItemEnum.TAILORING_DECAY_16_19]: { image: `${BASE_URL}book_decay_tailoring.webp` },

    [ItemEnum.ABILITY_STONE]: { image: `${BASE_URL}abilitystone.png` },
    [ItemEnum.RELIC_ENGRAVING]: { image: `${BASE_URL}relic_book.png` },
    [ItemEnum.LEGENDARY_ENGRAVING]: { image: `${BASE_URL}legendary_book.png` },
    [ItemEnum.GOLD_BAR_BOUND]: { image: `${BASE_URL}gold_bar_1k_bound.png` },
    [ItemEnum.SOLO_TOKEN]: { image: `${BASE_URL}solo_token.png` },
};

export const RAIDS_INFO: readonly RaidInfo[] = [
    {
        name: "Oreha's Well (Normal)",
        gates: [
            {
                itemLevelRequired: 1340,
                rewards: { gold: 200, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 1 }] },
                box: { gold: 100, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1340,
                rewards: { gold: 300, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 2 }] },
                box: { gold: 150, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Oreha's Well (Hard)",
        gates: [
            {
                itemLevelRequired: 1370,
                rewards: { gold: 300, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 3 }] },
                box: { gold: 100, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1370,
                rewards: { gold: 400, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 4 }] },
                box: { gold: 150, materials: [{ name: ItemEnum.SUNSET_SCALE, quantity: 4 }] },
            },
        ],
    },
    {
        name: "Argos",
        gates: [
            {
                itemLevelRequired: 1370,
                rewards: { gold: 150, materials: [{ name: ItemEnum.ARGOS_BLOOD, quantity: 1 }] },
                box: { gold: 50, materials: [{ name: ItemEnum.ARGOS_BLOOD, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1370,
                rewards: { gold: 150, materials: [{ name: ItemEnum.ARGOS_BLOOD, quantity: 2 }] },
                box: { gold: 50, materials: [{ name: ItemEnum.ARGOS_BLOOD, quantity: 2 }] },
            },
            {
                itemLevelRequired: 1370,
                rewards: { gold: 200, materials: [{ name: ItemEnum.ARGOS_BLOOD, quantity: 2 }] },
                box: { gold: 75, materials: [{ name: ItemEnum.ARGOS_BLOOD, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Valtan (Solo)",
        gates: [
            {
                itemLevelRequired: 1415,
                rewards: { gold: 240, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }] },
                box: { gold: 140, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1415,
                rewards: { gold: 360, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }] },
                box: { gold: 200, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Valtan (Normal)",
        gates: [
            {
                itemLevelRequired: 1415,
                rewards: { gold: 300, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }] },
                box: { gold: 180, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1415,
                rewards: { gold: 450, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }] },
                box: { gold: 255, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Valtan (Hard)",
        gates: [
            {
                itemLevelRequired: 1445,
                rewards: { gold: 400, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }] },
                box: { gold: 255, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1445,
                rewards: { gold: 700, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }] },
                box: { gold: 380, materials: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 3 }] },
                bidBox: [{ name: ItemEnum.DEMON_BEAST_BONE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Vykas (Solo)",
        gates: [
            {
                itemLevelRequired: 1430,
                rewards: { gold: 280, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }] },
                box: { gold: 140, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1430,
                rewards: { gold: 520, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }] },
                box: { gold: 230, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Vykas (Normal)",
        gates: [
            {
                itemLevelRequired: 1430,
                rewards: { gold: 350, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }] },
                box: { gold: 175, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1430,
                rewards: { gold: 650, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }] },
                box: { gold: 290, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Vykas (Hard)",
        gates: [
            {
                itemLevelRequired: 1460,
                rewards: { gold: 500, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }] },
                box: { gold: 280, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1460,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }] },
                box: { gold: 435, materials: [{ name: ItemEnum.COVETOUS_WING, quantity: 3 }] },
                bidBox: [{ name: ItemEnum.COVETOUS_WING, quantity: 5 }],
            },
        ],
    },
    {
        name: "Clown (Solo)",
        gates: [
            {
                itemLevelRequired: 1475,
                rewards: { gold: 320, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }] },
                box: { gold: 160, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1460,
                rewards: { gold: 480, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 265, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
            },
            {
                itemLevelRequired: 1475,
                rewards: { gold: 800, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 375, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Clown",
        gates: [
            {
                itemLevelRequired: 1475,
                rewards: { gold: 400, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }] },
                box: { gold: 200, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1460,
                rewards: { gold: 600, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 335, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
            },
            {
                itemLevelRequired: 1475,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
                box: { gold: 470, materials: [{ name: ItemEnum.MAYHEM_HORN, quantity: 2 }] },
                bidBox: [{ name: ItemEnum.MAYHEM_HORN, quantity: 5 }],
            },
        ],
    },
    {
        name: "Brelshaza (Solo)",
        gates: [
            {
                itemLevelRequired: 1490,
                rewards: { gold: 800, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 140, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1490,
                rewards: { gold: 800, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 210, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1500,
                rewards: { gold: 800, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }] },
                box: { gold: 280, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }] },
            },
            {
                itemLevelRequired: 1520,
                rewards: { gold: 1280, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }] },
                box: { gold: 530, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }] },
            },
        ],
    },
    {
        name: "Brelshaza (Normal)",
        gates: [
            {
                itemLevelRequired: 1490,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 250, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1490,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
                box: { gold: 300, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1500,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }] },
                box: { gold: 400, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }] },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
            },
            {
                itemLevelRequired: 1520,
                rewards: { gold: 1600, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }] },
                box: { gold: 600, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }] },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 15 }],
            },
        ],
    },
    {
        name: "Brelshaza (Hard)",
        gates: [
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1200, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }] },
                box: { gold: 400, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1200, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }] },
                box: { gold: 500, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 6 }] },
            },
            {
                itemLevelRequired: 1550,
                rewards: { gold: 1200, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }] },
                box: { gold: 500, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 7 }] },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 5 }],
            },
            {
                itemLevelRequired: 1560,
                rewards: { gold: 2000, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 10 }] },
                box: { gold: 800, materials: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 10 }] },
                bidBox: [{ name: ItemEnum.PHANTOM_INTENTION, quantity: 30 }],
            },
        ],
    },
    {
        name: "Kayangel (Solo)",
        gates: [
            {
                itemLevelRequired: 1540,
                rewards: { gold: 640, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }] },
                box: { gold: 240, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 960, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 12},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 320, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 12},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1280, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 17},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
                box: { gold: 400, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 17},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Kayangel (Normal)",
        gates: [
            {
                itemLevelRequired: 1540,
                rewards: { gold: 800, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }] },
                box: { gold: 300, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 11 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1200, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 12},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 400, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 12},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1540,
                rewards: { gold: 1600, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 17},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
                box: { gold: 500, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 17},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 2 }] },
                bidBox: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }],
            },
        ],
    },
    {
        name: "Kayangel (Hard)",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 14},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 350, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 14},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1600, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 16},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
                box: { gold: 500, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 16},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 1 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 2200, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 20},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }] },
                box: { gold: 700, materials: [{ name: ItemEnum.LIGHTS_TRIAL, quantity: 20},{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 3 }] },
                bidBox: [{ name: ItemEnum.EMPYREAN_CONTEMPLATION, quantity: 5 }],
            },
        ],
    },
    {
        name: "Akkan (Solo)",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: { gold: 800, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 360, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1440, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 440, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 2080, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }] },
                box: { gold: 600, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }] },
            },
        ],
    },
    {
        name: "Akkan (Normal)",
        gates: [
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1000, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 450, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 1800, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
                box: { gold: 500, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1580,
                rewards: { gold: 2600, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }] },
                box: { gold: 750, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }] },
                bidBox: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 5 }],
            },
        ],
    },
    {
        name: "Akkan (Hard)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1500, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }] },
                box: { gold: 600, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 2500, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }] },
                box: { gold: 700, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 7 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 3500, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 8 }] },
                box: { gold: 950, materials: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 8 }] },
                bidBox: [{ name: ItemEnum.EYE_OF_DECAY, quantity: 10 }],
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Solo)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1200, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 400, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1600, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 440, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 2400, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
                box: { gold: 720, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Normal)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 1500, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 500, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 2000, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 550, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 3000, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
                box: { gold: 900, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
                bidBox: [{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }],
            },
        ],
    },
    {
        name: "Ivory Tower of Chaos (Hard)",
        gates: [
            {
                itemLevelRequired: 1600,
                rewards: { gold: 3000, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 750, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 4000, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
                box: { gold: 900, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1600,
                rewards: { gold: 6000, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 2 }] },
                box: { gold: 1350, materials: [{ name: ItemEnum.SPLENDID_ENERGY_OF_WISDOM, quantity: 8 },{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }] },
                bidBox: [{ name: ItemEnum.SPLENDID_ELIXIR_OF_WISDOM, quantity: 2 }],
            },
        ],
    },
    {
        name: "Thaemine (Normal)",
        gates: [
            {
                itemLevelRequired: 1610,
                rewards: { gold: 3500, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 6 },{ name:"Magical Spring Water", quantity: 4 }] },
                box: { gold: 1500, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 6 },{ name:"Magical Spring Water", quantity: 4 }] },
            },
            {
                itemLevelRequired: 1610,
                rewards: { gold: 4000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 8 },{ name:"Magical Spring Water", quantity: 6 }] },
                box: { gold: 2500, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 8 },{ name:"Magical Spring Water", quantity: 6 }] },
            },
            {
                itemLevelRequired: 1610,
                rewards: { gold: 5500, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 12 },{ name:"Magical Spring Water", quantity: 8 }] },
                box: { gold: 3000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 12 },{ name:"Magical Spring Water", quantity: 8 }] },
                bidBox: [{ name: ItemEnum.DARK_FIRE, quantity: 10 }],
            },
        ],
    },
    {
        name: "Thaemine (Hard)",
        gates: [
            {
                itemLevelRequired: 1630,
                rewards: { gold: 5000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 12 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 12 }] },
                box: { gold: 2000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 12 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 12 }] },
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 6000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 16 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
                box: { gold: 2400, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 16 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 9000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 24},{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                box: { gold: 2800, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 24 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                bidBox: [{ name: ItemEnum.DARK_FIRE, quantity: 20 }],
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 21000, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 24 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                box: { gold: 3600, materials: [{ name: ItemEnum.DARK_FIRE, quantity: 24 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 24 }] },
                bidBox: [{ name: ItemEnum.DARK_FIRE, quantity: 20 }],
            },
        ],
    },
    {
        name: "Echidna (Normal)",
        gates: [
            {
                itemLevelRequired: 1620,
                rewards: { gold: 6000, materials: [{ name: ItemEnum.AGRIS_SCALE, quantity: 3 }] },
                box: { gold: 2200, materials: [{ name: ItemEnum.AGRIS_SCALE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 10000, materials: [{ name: ItemEnum.AGRIS_SCALE, quantity: 6 }] },
                box: { gold: 3400, materials: [{ name: ItemEnum.AGRIS_SCALE, quantity: 6 }] },
                bidBox: [{ name: ItemEnum.AGRIS_SCALE, quantity: 5 }],
            },
           
        ],
    },
    {
        name: "Echidna (Hard)",
        gates: [
            {
                itemLevelRequired: 1630,
                rewards: { gold: 7000, materials: [{ name: ItemEnum.ALCAONE_EYE, quantity: 3 }] },
                box: { gold: 2800, materials: [{ name: ItemEnum.ALCAONE_EYE, quantity: 3 }] },
            },
            {
                itemLevelRequired: 1630,
                rewards: { gold: 12500, materials: [{ name: ItemEnum.ALCAONE_EYE, quantity: 6 }] },
                box: { gold: 4100, materials: [{ name: ItemEnum.ALCAONE_EYE, quantity: 6 }] },
                bidBox: [{ name: ItemEnum.ALCAONE_EYE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Behemoth",
        gates: [
            {
                itemLevelRequired: 1620,
                rewards: { gold: 6500, materials: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 10 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 10 }] },
                box: { gold: 1800, materials: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 10 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 10 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 11500, materials: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 20 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
                box: { gold: 2700, materials: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 20 },{ name: ItemEnum.MAGICAL_SPRING_WATER, quantity: 18 }] },
                bidBox: [{ name: ItemEnum.BEHEMOTH_SCALE, quantity: 20 }],
            },
        ],
    },
    {
        name: "Aegir (Normal)",
        gates: [
            {
                itemLevelRequired: 1660,
                rewards: { gold: 7500, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 4 }] },
                box: { gold: 3200, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 4 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 15500, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 6 }] },
                box: { gold: 5300, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 6 }] },
                bidBox: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 5 }],
            },
        ],
    },
    {
        name: "Aegir (Hard)",
        gates: [
            {
                itemLevelRequired: 1680,
                rewards: { gold: 9000, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 8 }] },
                box: { gold: 4100, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 8 }] },
            },
            {
                itemLevelRequired: 1620,
                rewards: { gold: 18500, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 12 }] },
                box: { gold: 6600, materials: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 12 }] },
                bidBox: [{ name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 10 }],
            },
        ],
    },
]
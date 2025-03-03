import { ItemEnum } from "../../common/Items/ItemEnum";
import { BuyItem } from "../../common/Market/BuyItem";
import { BuyItemType } from "../../common/Market/BuyItemType";

export const honing_mats_behe: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.BEHEMOTH_SCALE, quantity: 15 },
    rewards: [
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 3 },
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 120 },
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 360 },
    ],
    bidBoxQuantity: 20,
};

export const breaths_behe: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.BEHEMOTH_SCALE, quantity: 15 },
    rewards: [
        { name: ItemEnum.GLACIERS_BREATH, quantity: 3 },
        { name: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
    bidBoxQuantity: 20,
};

export const honing_aegir: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 5 },
    rewards: [
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 5 },
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 2 },
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 160 },
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 480 },
    ],
    bidBoxQuantity: 5,
};

export const breaths_aegir: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.HELLFIRE_KEYSTONE, quantity: 5 },
    rewards: [
        { name: ItemEnum.GLACIERS_BREATH, quantity: 5 },
        { name: ItemEnum.LAVAS_BREATH, quantity: 2 },
    ],
    bidBoxQuantity: 10,
};

export const honing_echidna_eyes: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.ALCAONE_EYE, quantity: 5 },
    rewards: [
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 3 },
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 100 },
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 300 },
        { name: ItemEnum.GLACIERS_BREATH, quantity: 3 },
        { name: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
    bidBoxQuantity: 5,
};

export const destiny_guardian_stone_sylmael_240: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 240 },
    rewards: [
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 40 },
    ],
};

export const destiny_guardian_stone_sylmael_270: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 270 },
    rewards: [
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 40 },
    ],
};

export const destiny_destruction_stone_sylmael_690: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 690 },
    rewards: [
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 40 },
    ],
};

export const destiny_destruction_stone_sylmael_770: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 770 },
    rewards: [
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 40 },
    ],
};

export const destiny_shard_sylmael_860: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 860 },
    rewards: [
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
    ],
};

export const destiny_shard_sylmael_1030: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 1030 },
    rewards: [
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
    ],
};


export const destiny_leap_sylmael_500: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 500 },
    rewards: [
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 1 },
    ],
};

export const destiny_leap_sylmael_590: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 590 },
    rewards: [
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 1 },
    ],
};

export const breaths_sylmael_670: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 670 },
    rewards: [
        { name: ItemEnum.GLACIERS_BREATH, quantity: 1 },
        { name: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
};

export const breaths_sylmael_790: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 790 },
    rewards: [
        { name: ItemEnum.GLACIERS_BREATH, quantity: 1 },
        { name: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
};

export const solars_sylmael_90: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 90 },
    rewards: [
        { name: ItemEnum.SOLAR_GRACE, quantity: 1 },
        { name: ItemEnum.SOLAR_BLESSING, quantity: 1 },
        { name: ItemEnum.SOLAR_PROTECTION, quantity: 1 },
    ],
};

export const solars_sylmael_110: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 110 },
    rewards: [
        { name: ItemEnum.SOLAR_GRACE, quantity: 1 },
        { name: ItemEnum.SOLAR_BLESSING, quantity: 1 },
        { name: ItemEnum.SOLAR_PROTECTION, quantity: 1 },
    ],
};

export const solars_sylmael_120: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { name: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 120 },
    rewards: [
        { name: ItemEnum.SOLAR_GRACE, quantity: 1 },
        { name: ItemEnum.SOLAR_BLESSING, quantity: 1 },
        { name: ItemEnum.SOLAR_PROTECTION, quantity: 1 },
    ],
};

export const metallurgy_hellfire_11_14_expert_token:BuyItem={
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 25 },
    rewards: [
        { name: ItemEnum.METALLURGY_HELLFIRE_11_14, quantity: 1 },
    ],
};

export const tailoring_hellfire_11_14_expert_token:BuyItem={
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 13 },
    rewards: [
        { name: ItemEnum.TAILORING_HELLFIRE_11_14, quantity: 1 },
    ],
};

export const solars_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 4 },
    rewards: [
        { name: ItemEnum.SOLAR_GRACE, quantity: 36 },
        { name: ItemEnum.SOLAR_BLESSING, quantity: 12 },
        { name: ItemEnum.SOLAR_PROTECTION, quantity: 6 },
        { name: ItemEnum.GLACIERS_BREATH, quantity: 9 },
        { name: ItemEnum.LAVAS_BREATH, quantity: 3 },
    ],
};

export const shards_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 1 },
    rewards: [
        { name: ItemEnum.HONOR_SHARD_POUCH_M, quantity: 5 },
        { name: ItemEnum.DESTINY_SHARD_POUCH_M, quantity: 1 },
    ],
};

export const blue_selector_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 1 },
    rewards: [
        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 150 },
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 75 },
    ],
};

export const red_selector_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 3 },
    rewards: [
        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 150 },
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 75 },
    ],
};

export const leap_selector_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 5 },
    rewards: [
        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 10 },
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 5 },
    ],
};

export const relic_book_expert_token:BuyItem={
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 1200 },
    rewards: [
        { name: ItemEnum.RELIC_ENGRAVING, quantity: 1 },
    ],
};

export const trans_ticket_expert_token:BuyItem={
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 5 },
    rewards: [
        { name: ItemEnum.TRANSCENDENCE_TICKET_ARMOR, quantity: 1 },
    ],
};

export const gold_bar_bound_expert_token:BuyItem={
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.EXPERT_TOKEN, quantity: 10 },
    rewards: [
        { name: ItemEnum.GOLD_BAR_BOUND, quantity: 1 },
    ],
};

export const red_1_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { name: ItemEnum.OBLITERATION_STONE, quantity: 400 },
        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 400/5 },
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 400/25 },
    ],
};

export const red_refined_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { name: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
        { name: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 200/5 },
    ],
};

export const blue_1_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { name: ItemEnum.PROTECTION_STONE, quantity: 400 },
        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400/5 },
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 400/25 },
    ],
};

export const blue_refined_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { name: ItemEnum.REFINED_PROTECTION_STONE, quantity: 200 },
        { name: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 200/5 },
    ],
};

export const marvelous_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 20 },
        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 20/5 },
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 20/25 },
    ],
};

export const radiant_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 10 },
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 10/5 },
    ],
};

export const oreha_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 10 },
    rewards: [
        { name: ItemEnum.OREHA_FUSION_MATERIAL, quantity: 10 },
        { name: ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL, quantity: 10/5 },
    ],
};

export const superior_oreha_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { name: ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL, quantity: 10 },
        { name: ItemEnum.PRIME_OREHA_FUSION_MATERIAL, quantity: 10/5 },
        { name: ItemEnum.ABIDOS_FUSION_MATERIAL, quantity: 10/25 },
    ],
};

export const prime_oreha_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { name: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { name: ItemEnum.PRIME_OREHA_FUSION_MATERIAL, quantity: 10 },
        { name: ItemEnum.ABIDOS_FUSION_MATERIAL, quantity: 10/5 },
    ],
};

export const mari_abidos_fusion_mat:BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 90 },
    rewards: [
        { name: ItemEnum.ABIDOS_FUSION_MATERIAL, quantity: 50 },

    ],
};

export const mari_lava_breath_10: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 150 },
    rewards: [
        { name: ItemEnum.LAVAS_BREATH, quantity: 10 },
    ],
};

export const mari_lava_breath_15: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 210 },
    rewards: [
        { name: ItemEnum.LAVAS_BREATH, quantity: 15 },
    ],
};


export const mari_glacier_breath_20: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 96 },
    rewards: [
        { name: ItemEnum.GLACIERS_BREATH, quantity: 20 },
    ],
};

export const mari_glacier_breath_30: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 124 },
    rewards: [
        { name: ItemEnum.GLACIERS_BREATH, quantity: 30 },
    ],
};

export const mari_destiny_shard_pouch_s_10: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 110 },
    rewards: [
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 10 },
    ],
};

export const mari_destiny_shard_pouch_s_15: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 155 },
    rewards: [
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 15 },
    ],
};

export const mari_destiny_shard_pouch_s_20: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 190 },
    rewards: [
        { name: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 20 },
    ],
};

export const mari_destiny_honor_leapstone_100: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 210 },
    rewards: [
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 100 },
    ],
};

export const mari_radiant_honor_leapstone: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 150 },
    rewards: [
        { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 100 },
    ],
};

export const mari_superior_oreha_fusion_mat_100: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 40 },
    rewards: [
        { name: ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL, quantity: 100 },
    ],
};

export const mari_superior_oreha_fusion_mat_200: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 65 },
    rewards: [
        { name: ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL, quantity: 200 },
    ],
};

export const mari_prime_oreha_fusion_mat: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.BLUE_CRYSTAL, quantity: 80 },
    rewards: [
        { name: ItemEnum.PRIME_OREHA_FUSION_MATERIAL, quantity: 100 },
    ],
};

export const royal_wildsoul_growth: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { name: ItemEnum.SUNSET_SCALE, quantity: 5000 },
    rewards: [
        { name: ItemEnum.DESTINY_SHARD_POUCH_M, quantity: 100 },
        { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 20*40 },
        { name: ItemEnum.ABIDOS_FUSION_MATERIAL, quantity: 20*20 },
        { name: ItemEnum.GLACIERS_BREATH, quantity: 20*80 },
        { name: ItemEnum.TRANSCENDENCE_TICKET_ARMOR, quantity: 20*10 },
        { name: ItemEnum.TRANSCENDENCE_TICKET_WEAPON, quantity: 20*5 },
    ],
};

export const RaidsBuyItemList=[
    honing_mats_behe,
    breaths_behe,
    honing_echidna_eyes,
    honing_aegir,
    breaths_aegir,
];

export const GuildBuyItemList=[
    destiny_shard_sylmael_860,
    destiny_shard_sylmael_1030,
    destiny_guardian_stone_sylmael_240,
    destiny_guardian_stone_sylmael_270,
    destiny_destruction_stone_sylmael_690,
    destiny_destruction_stone_sylmael_770,
    destiny_leap_sylmael_500,
    destiny_leap_sylmael_590,
    breaths_sylmael_670,
    breaths_sylmael_790,

    solars_sylmael_90,
    solars_sylmael_110,
    solars_sylmael_120,
];

export const ExpertShopBuyItemList=[
    metallurgy_hellfire_11_14_expert_token,
    tailoring_hellfire_11_14_expert_token,
    trans_ticket_expert_token,
    gold_bar_bound_expert_token,
    solars_expert_token,
    shards_expert_token,
    blue_selector_expert_token,
    red_selector_expert_token,
    leap_selector_expert_token,
];

export const SoloShopBuyItemList=[
    red_1_solo_token,
    red_refined_solo_token,
    blue_1_solo_token,
    blue_refined_solo_token,
    marvelous_solo_token,
    radiant_solo_token,
    oreha_solo_token,
    superior_oreha_solo_token,
    prime_oreha_solo_token,
];

export const MariShopBuyItemList=[
    mari_abidos_fusion_mat,
    mari_lava_breath_10,
    mari_lava_breath_15,
    mari_glacier_breath_20,
    mari_glacier_breath_30,
    mari_destiny_shard_pouch_s_10,
    mari_destiny_shard_pouch_s_15,
    mari_destiny_shard_pouch_s_20,
    mari_destiny_honor_leapstone_100,
    mari_radiant_honor_leapstone,
    mari_superior_oreha_fusion_mat_100,
    mari_superior_oreha_fusion_mat_200,
    mari_prime_oreha_fusion_mat,

];

export const BuyItemList = [
    ...RaidsBuyItemList,
    ...GuildBuyItemList,
    ...ExpertShopBuyItemList,
    ...SoloShopBuyItemList,
    ...MariShopBuyItemList,
];
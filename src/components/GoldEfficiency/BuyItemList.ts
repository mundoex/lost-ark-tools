import { BuyItem } from "../../common/BuyItem";
import { BuyItemType } from "../../common/BuyItemType";
import { ItemEnum } from "../../common/ItemEnum";

const honing_mats_behe: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.BEHEMOTH_SCALE, quantity: 15 },
    rewards: [
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 3 },
        { item: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 120 },
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 360 },
    ],
    bidBoxQuantity: 20,
};

const breaths_behe: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.BEHEMOTH_SCALE, quantity: 15 },
    rewards: [
        { item: ItemEnum.GLACIERS_BREATH, quantity: 3 },
        { item: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
    bidBoxQuantity: 20,
};

const honing_echidna_eyes: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.ALCAONE_EYE, quantity: 5 },
    rewards: [
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 3 },
        { item: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 100 },
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 300 },
        { item: ItemEnum.GLACIERS_BREATH, quantity: 3 },
        { item: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
    bidBoxQuantity: 5,
};

const destiny_guardian_stone_sylmael_240: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 240 },
    rewards: [
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 40 },
    ],
};

const destiny_guardian_stone_sylmael_270: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 270 },
    rewards: [
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 40 },
    ],
};

const destiny_destruction_stone_sylmael_690: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 690 },
    rewards: [
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 40 },
    ],
};

const destiny_destruction_stone_sylmael_770: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 770 },
    rewards: [
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 40 },
    ],
};

const destiny_shard_sylmael_860: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 860 },
    rewards: [
        { item: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
    ],
};

const destiny_shard_sylmael_1030: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 1030 },
    rewards: [
        { item: ItemEnum.DESTINY_SHARD_POUCH_S, quantity: 1 },
    ],
};


const destiny_leap_sylmael_500: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 500 },
    rewards: [
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 1 },
    ],
};

const destiny_leap_sylmael_590: BuyItem = {
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 590 },
    rewards: [
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 1 },
    ],
};

const breaths_sylmael_670: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 670 },
    rewards: [
        { item: ItemEnum.GLACIERS_BREATH, quantity: 1 },
        { item: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
};

const breaths_sylmael_790: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 790 },
    rewards: [
        { item: ItemEnum.GLACIERS_BREATH, quantity: 1 },
        { item: ItemEnum.LAVAS_BREATH, quantity: 1 },
    ],
};

const solars_sylmael_90: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 90 },
    rewards: [
        { item: ItemEnum.SOLAR_GRACE, quantity: 1 },
        { item: ItemEnum.SOLAR_BLESSING, quantity: 1 },
        { item: ItemEnum.SOLAR_PROTECTION, quantity: 1 },
    ],
};
const solars_sylmael_110: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 110 },
    rewards: [
        { item: ItemEnum.SOLAR_GRACE, quantity: 1 },
        { item: ItemEnum.SOLAR_BLESSING, quantity: 1 },
        { item: ItemEnum.SOLAR_PROTECTION, quantity: 1 },
    ],
};
const solars_sylmael_120: BuyItem = {
    type: BuyItemType.CHANCE,
    cost: { item: ItemEnum.SYLMAEL_BLOODSTONE, quantity: 120 },
    rewards: [
        { item: ItemEnum.SOLAR_GRACE, quantity: 1 },
        { item: ItemEnum.SOLAR_BLESSING, quantity: 1 },
        { item: ItemEnum.SOLAR_PROTECTION, quantity: 1 },
    ],
};

const solars_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.EXPERT_TOKEN, quantity: 6 },
    rewards: [
        { item: ItemEnum.SOLAR_GRACE, quantity: 36 },
        { item: ItemEnum.SOLAR_BLESSING, quantity: 12 },
        { item: ItemEnum.SOLAR_PROTECTION, quantity: 6 },
        { item: ItemEnum.GLACIERS_BREATH, quantity: 9 },
        { item: ItemEnum.LAVAS_BREATH, quantity: 3 },
    ],
};

const shards_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.EXPERT_TOKEN, quantity: 2 },
    rewards: [
        { item: ItemEnum.HONOR_SHARD_POUCH_M, quantity: 5 },
        { item: ItemEnum.DESTINY_SHARD_POUCH_M, quantity: 1 },
    ],
};

const blue_selector_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.EXPERT_TOKEN, quantity: 2 },
    rewards: [
        { item: ItemEnum.REFINED_PROTECTION_STONE, quantity: 150 },
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 75 },
    ],
};

const red_selector_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.EXPERT_TOKEN, quantity: 5 },
    rewards: [
        { item: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 150 },
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 75 },
    ],
};

const leap_selector_expert_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.EXPERT_TOKEN, quantity: 5 },
    rewards: [
        { item: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 10 },
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 5 },
    ],
};

const relic_book_expert_token:BuyItem={
    type: BuyItemType.NORMAL,
    cost: { item: ItemEnum.EXPERT_TOKEN, quantity: 1200 },
    rewards: [
        { item: ItemEnum.RELIC_ENGRAVING, quantity: 1 },
    ],
};

const red_1_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { item: ItemEnum.OBLITERATION_STONE, quantity: 400 },
        { item: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 400/5 },
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 400/25 },
    ],
};

const red_refined_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { item: ItemEnum.REFINED_OBLITERATION_STONE, quantity: 200 },
        { item: ItemEnum.DESTINY_DESTRUCTION_STONE, quantity: 200/5 },
    ],
};

const blue_1_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { item: ItemEnum.PROTECTION_STONE, quantity: 400 },
        { item: ItemEnum.REFINED_PROTECTION_STONE, quantity: 400/5 },
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 400/25 },
    ],
};

const blue_refined_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { item: ItemEnum.REFINED_PROTECTION_STONE, quantity: 200 },
        { item: ItemEnum.DESTINY_GUARDIAN_STONE, quantity: 200/5 },
    ],
};

const marvelous_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.SOLO_TOKEN, quantity: 20 },
    rewards: [
        { item: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 20 },
        { item: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 20/5 },
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 20/25 },
    ],
};

const radiant_solo_token:BuyItem={
    type: BuyItemType.SELECTOR,
    cost: { item: ItemEnum.SOLO_TOKEN, quantity: 30 },
    rewards: [
        { item: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 10 },
        { item: ItemEnum.DESTINY_LEAPSTONE, quantity: 10/5 },
    ],
};




export const BuyItemList = [
    honing_mats_behe,
    breaths_behe,
    honing_echidna_eyes,
    
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

    relic_book_expert_token,
    solars_expert_token,
    shards_expert_token,
    blue_selector_expert_token,
    red_selector_expert_token,
    leap_selector_expert_token,

    red_1_solo_token,
    red_refined_solo_token,
    blue_1_solo_token,
    blue_refined_solo_token,
    marvelous_solo_token,
    radiant_solo_token
];
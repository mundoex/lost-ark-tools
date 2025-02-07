import { BASE_URL } from ".";
import { ItemEnum } from "../common/Items/ItemEnum";
import { ItemRecord } from "../common/Items/ItemRecord";

export const ItemsList: Record<ItemEnum, ItemRecord> = {
    //blues
    [ItemEnum.DESTINY_GUARDIAN_STONE]: { image: `${BASE_URL}destiny_guardian_stone.webp`, bundleSize: 10, tier: 4 },
    [ItemEnum.REFINED_PROTECTION_STONE]: { image: `${BASE_URL}refined_protection_stone.webp`, bundleSize: 10 },
    [ItemEnum.PROTECTION_STONE]: { image: `${BASE_URL}protection_stone.webp`, bundleSize: 10 },
    [ItemEnum.CRYSTALLIZED_GUARDIAN_STONE]: { image: `${BASE_URL}crystallized_guardian_stone.webp`, bundleSize: 10 },

    //reds
    [ItemEnum.DESTINY_DESTRUCTION_STONE]: { image: `${BASE_URL}destiny_destruction_stone.webp`, bundleSize: 10, tier: 4 },
    [ItemEnum.REFINED_OBLITERATION_STONE]: { image: `${BASE_URL}refined_obliteration_stone.webp`, bundleSize: 10 },
    [ItemEnum.OBLITERATION_STONE]: { image: `${BASE_URL}obliteration_stone.webp`, bundleSize: 10 },
    [ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE]: { image: `${BASE_URL}crystallized_destruction_stone.webp`, bundleSize: 10 },

    //leaps
    [ItemEnum.DESTINY_LEAPSTONE]: { image: `${BASE_URL}destiny_leapstone.webp`, tier: 4 },
    [ItemEnum.RADIANT_HONOR_LEAPSTONE]: { image: `${BASE_URL}radiant_leapstone.webp`, },
    [ItemEnum.MARVELOUS_HONOR_LEAPSTONE]: { image: `${BASE_URL}marvelous_leapstone.webp`, },
    [ItemEnum.GREAT_HONOR_LEAPSTONE]: { image: `${BASE_URL}great_leapstone.webp`, },

    //fusion mats
    [ItemEnum.ABIDOS_FUSION_MATERIAL]: { image: `${BASE_URL}abidos_fusion_material.webp`, tier: 4 },
    [ItemEnum.PRIME_OREHA_FUSION_MATERIAL]: { image: `${BASE_URL}prime_oreha.webp` },
    [ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL]: { image: `${BASE_URL}superior_oreha.webp` },
    [ItemEnum.OREHA_FUSION_MATERIAL]: { image: `${BASE_URL}oreha.webp` },

    //shards
    [ItemEnum.DESTINY_SHARD]: { image: `${BASE_URL}destiny_shard.webp`, tier: 4 },
    [ItemEnum.HONOR_SHARD]: { image: `${BASE_URL}honor_shard.webp` },

    [ItemEnum.DESTINY_SHARD_POUCH_S]: { image: `${BASE_URL}destiny_shard_pouch_s.webp`, tier: 4 },
    [ItemEnum.DESTINY_SHARD_POUCH_M]: { image: `${BASE_URL}destiny_shard_pouch_m.webp`, tier: 4 },
    [ItemEnum.DESTINY_SHARD_POUCH_L]: { image: `${BASE_URL}destiny_shard_pouch_l.webp`, tier: 4 },

    [ItemEnum.HONOR_SHARD_POUCH_S]: { image: `${BASE_URL}honor_shard_pouch_s.webp` },
    [ItemEnum.HONOR_SHARD_POUCH_M]: { image: `${BASE_URL}honor_shard_pouch_m.webp` },
    [ItemEnum.HONOR_SHARD_POUCH_L]: { image: `${BASE_URL}honor_shard_pouch_l.webp` },

    //solars
    [ItemEnum.GLACIERS_BREATH]: { image: `${BASE_URL}glacier_breath.webp`, tier: 4 },
    [ItemEnum.LAVAS_BREATH]: { image: `${BASE_URL}lava_breath.webp`, tier: 4 },
    [ItemEnum.SOLAR_GRACE]: { image: `${BASE_URL}solar_grace.webp` },
    [ItemEnum.SOLAR_BLESSING]: { image: `${BASE_URL}solar_blessing.webp` },
    [ItemEnum.SOLAR_PROTECTION]: { image: `${BASE_URL}solar_protection.webp` },

    //special honing
    [ItemEnum.SPECIAL_HONING_CIRCULATED_LEAPSTONE]: { image: `${BASE_URL}special_honing_circulated_leapstone.webp`, tier: 4 },
    [ItemEnum.SPECIAL_HONING_CONCENTRATED_LEAPSTONE]: { image: `${BASE_URL}special_honing_concentrated_leapstone.webp`, },

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
    [ItemEnum.HELLFIRE_KEYSTONE]: { image: `${BASE_URL}hellfire_keystone.webp`, tier: 4 },

    //other
    [ItemEnum.TRANSCENDENCE_TICKET_WEAPON]: { image: `${BASE_URL}trans_ticket_weapon.png` },
    [ItemEnum.TRANSCENDENCE_TICKET_ARMOR]: { image: `${BASE_URL}trans_ticket_armor.png` },
    [ItemEnum.CLEAR_MEDAL]: { image: `${BASE_URL}clear_medal.webp` },
    [ItemEnum.SYLMAEL_BLOODSTONE]: { image: `${BASE_URL}sylmael_bloodstone.webp` },
    [ItemEnum.EXPERT_TOKEN]: { image: `${BASE_URL}expert_token.png` },
    [ItemEnum.BLUE_CRYSTAL]: { image: `${BASE_URL}blue_crystal.png` },
    [ItemEnum.GOLD]: { image: `${BASE_URL}gold.webp` },

    //books
    [ItemEnum.METALLURGY_HELLFIRE_11_14]: { image: `${BASE_URL}book_hellfire_metallurgy.png`, tier: 4 },
    [ItemEnum.TAILORING_HELLFIRE_11_14]: { image: `${BASE_URL}book_hellfire_tailoring.png`, tier: 4 },
    [ItemEnum.METALLURGY_DECAY_13_15]: { image: `${BASE_URL}book_decay_metallurgy.webp` },
    [ItemEnum.TAILORING_DECAY_13_15]: { image: `${BASE_URL}book_decay_tailoring.webp` },
    [ItemEnum.METALLURGY_DECAY_16_19]: { image: `${BASE_URL}book_decay_metallurgy.webp` },
    [ItemEnum.TAILORING_DECAY_16_19]: { image: `${BASE_URL}book_decay_tailoring.webp` },

    [ItemEnum.ABILITY_STONE]: { image: `${BASE_URL}abilitystone.png` },
    [ItemEnum.RELIC_ENGRAVING]: { image: `${BASE_URL}relic_book.png`, tier: 4 },
    [ItemEnum.LEGENDARY_ENGRAVING]: { image: `${BASE_URL}legendary_book.png` },
    [ItemEnum.GOLD_BAR_BOUND]: { image: `${BASE_URL}gold_bar_1k_bound.png` },
    [ItemEnum.SOLO_TOKEN]: { image: `${BASE_URL}solo_token.png` },
    [ItemEnum.PHEON]: { image: `${BASE_URL}pheon.png` },
    [ItemEnum.SHADOW_OF_KARMA]: { image: `${BASE_URL}shadow_of_karma.png` },
};
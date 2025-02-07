import { ItemEnum } from "../../common/Items/ItemEnum";
import { ItemQuantity } from "../../common/Items/ItemQuantity";
import { gemToLvl1s } from "../../utils/utils";

export interface CubeData{
    tier:number;
    name:string;
    rewards:{gems:ItemQuantity[], items:ItemQuantity[]};
    bonusRoomRewards:ItemQuantity[];
}

export const cubeData: CubeData[] = [
    {
        tier: 3,
        name: "1st Forbiddance",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_3_GEM_LVL_1, quantity: gemToLvl1s(2) * 7 }
            ],
            items: [
                { name: ItemEnum.GREAT_HONOR_LEAPSTONE, quantity: 20 },
                { name: ItemEnum.SOLAR_GRACE, quantity: 6 },
                { name: ItemEnum.SOLAR_BLESSING, quantity: 3 },
                { name: ItemEnum.SOLAR_PROTECTION, quantity: 1 }
            ]
        },
        bonusRoomRewards: []
    },
    {
        tier: 3,
        name: "2nd Forbiddance",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_3_GEM_LVL_1, quantity: gemToLvl1s(3) * 4 }
            ],
            items: [
                { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 14 },
                { name: ItemEnum.SOLAR_GRACE, quantity: 8 },
                { name: ItemEnum.SOLAR_BLESSING, quantity: 4 },
                { name: ItemEnum.SOLAR_PROTECTION, quantity: 2 }
            ]
        },
        bonusRoomRewards: []
    },
    {
        tier: 3,
        name: "3rd Forbiddance",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_3_GEM_LVL_1, quantity: gemToLvl1s(3) * 6 }
            ],
            items: [
                { name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, quantity: 25 },
                { name: ItemEnum.SOLAR_GRACE, quantity: 11 },
                { name: ItemEnum.SOLAR_BLESSING, quantity: 6 },
                { name: ItemEnum.SOLAR_PROTECTION, quantity: 2 }
            ]
        },
        bonusRoomRewards: []
    },
    {
        tier: 3,
        name: "4th Forbiddance",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_3_GEM_LVL_1, quantity: gemToLvl1s(3) * 8 }
            ],
            items: [
                { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 14 },
                { name: ItemEnum.SOLAR_GRACE, quantity: 12 },
                { name: ItemEnum.SOLAR_BLESSING, quantity: 7 },
                { name: ItemEnum.SOLAR_PROTECTION, quantity: 3 }
            ]
        },
        bonusRoomRewards: []
    },
    {
        tier: 3,
        name: "5th Forbiddance",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_3_GEM_LVL_1, quantity: gemToLvl1s(3) * 9 }
            ],
            items: [
                { name: ItemEnum.RADIANT_HONOR_LEAPSTONE, quantity: 25 },
                { name: ItemEnum.SOLAR_GRACE, quantity: 13 },
                { name: ItemEnum.SOLAR_BLESSING, quantity: 8 },
                { name: ItemEnum.SOLAR_PROTECTION, quantity: 4 }
            ]
        },
        bonusRoomRewards: []
    },
    {
        tier: 4,
        name: "1st Unlock",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_4_GEM_LVL_1, quantity: 9 }
            ],
            items: [
                { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 14 },
                { name: ItemEnum.GLACIERS_BREATH, quantity: 4 },
                { name: ItemEnum.LAVAS_BREATH, quantity: 4 }
            ]
        },
        bonusRoomRewards: []
    },
    {
        tier: 4,
        name: "2nd Unlock",
        rewards: {
            gems: [
                { name: ItemEnum.TIER_4_GEM_LVL_1, quantity: gemToLvl1s(2) * 6 }
            ],
            items: [
                { name: ItemEnum.DESTINY_LEAPSTONE, quantity: 25 },
                { name: ItemEnum.GLACIERS_BREATH, quantity: 5 },
                { name: ItemEnum.LAVAS_BREATH, quantity: 5 }
            ]
        },
        bonusRoomRewards: []
    }
];
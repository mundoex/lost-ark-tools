import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ItemEnum } from "../../common/Items/ItemEnum";
import { ItemsList } from "../../constants/ItemList";
import { gemToLvl1s } from "../../utils/utils";
import { cubeData } from "./data";

export function CubeAndGems() {
    const [useLevel7Prices, setUseLevel7Prices] = useState<boolean>(true);

    const [tier3LvlGemPrice, setTier3GemPrice] = useState<number>(0);
    const [tier4LvlGemPrice, setTier4GemPrice] = useState<number>(0);

    const gemMarkerInUse = {
        lvl: useLevel7Prices ? 7 : 5,
        item_t3: useLevel7Prices ? ItemEnum.TIER_3_GEM_LVL_7 : ItemEnum.TIER_3_GEM_LVL_5,
        item_t4: useLevel7Prices ? ItemEnum.TIER_4_GEM_LVL_7 : ItemEnum.TIER_4_GEM_LVL_5,
    }

    const tier3Lvl1GemPrice = tier3LvlGemPrice / gemToLvl1s(gemMarkerInUse.lvl);
    const tier4Lvl1GemPrice = tier4LvlGemPrice / gemToLvl1s(gemMarkerInUse.lvl);

    const setPriceTier3Price = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const num = parseFloat(e.target.value)
        if (!isNaN(num)) {
            setTier3GemPrice(num);
        } else {
            setTier3GemPrice(0);
        }
    }

    const setPriceTier4Price = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const num = parseFloat(e.target.value)
        if (!isNaN(num)) {
            setTier4GemPrice(num);
        } else {
            setTier4GemPrice(0);
        }
    }

    return <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: "20%" }}>
            <FormControlLabel
                label="Use lvl 7 prices"
                sx={{ textAlign: "center", }}
                control={<Checkbox checked={useLevel7Prices} onClick={() => setUseLevel7Prices(true)} />}
            />
            <FormControlLabel
                label="Use lvl 5 prices"
                sx={{ textAlign: "center" }}
                control={<Checkbox checked={!useLevel7Prices} onClick={() => setUseLevel7Prices(false)} />}
            />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#1e1e1e',
                    maxWidth: 300,
                    padding: 1,
                    margin: 1,
                    borderRadius: 1,
                    color: '#ffffff',
                }}
            >
                <Box
                    component="img"
                    src={ItemsList[gemMarkerInUse.item_t3].image}
                    alt={gemMarkerInUse.item_t3}
                    sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: 'auto',
                        maxWidth: 150,
                        maxHeight: 60,
                    }}
                >
                    {gemMarkerInUse.item_t3}
                </Typography>

                <TextField
                    variant="outlined"
                    size="small"
                    value={tier3LvlGemPrice}
                    onChange={setPriceTier3Price}
                    sx={{
                        width: 150,
                        minWidth: 50,
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#1e1e1e',
                    maxWidth: 300,
                    padding: 1,
                    margin: 1,
                    borderRadius: 1,
                    color: '#ffffff',
                }}
            >
                <Box
                    component="img"
                    src={ItemsList[ItemEnum.TIER_3_GEM_LVL_1].image}
                    alt={ItemEnum.TIER_3_GEM_LVL_1}
                    sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: 'auto',
                        maxWidth: 150,
                        maxHeight: 60,
                    }}
                >
                    {ItemEnum.TIER_3_GEM_LVL_1}
                </Typography>

                <TextField
                    variant="outlined"
                    size="small"
                    disabled={true}
                    value={tier3Lvl1GemPrice.toFixed(2)}
                    sx={{
                        width: 150,
                        minWidth: 50,
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#1e1e1e',
                    maxWidth: 300,
                    padding: 1,
                    margin: 1,
                    borderRadius: 1,
                    color: '#ffffff',
                }}
            >
                <Box
                    component="img"
                    src={ItemsList[gemMarkerInUse.item_t4].image}
                    alt={gemMarkerInUse.item_t4}
                    sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: 'auto',
                        maxWidth: 150,
                        maxHeight: 60,
                    }}
                >
                    {gemMarkerInUse.item_t4}
                </Typography>

                <TextField
                    variant="outlined"
                    size="small"
                    value={tier4LvlGemPrice}
                    onChange={setPriceTier4Price}
                    sx={{
                        width: 150,
                        minWidth: 50,
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#1e1e1e',
                    maxWidth: 300,
                    padding: 1,
                    margin: 1,
                    borderRadius: 1,
                    color: '#ffffff',
                }}
            >
                <Box
                    component="img"
                    src={ItemsList[ItemEnum.TIER_4_GEM_LVL_1].image}
                    alt={ItemEnum.TIER_4_GEM_LVL_1}
                    sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: 'auto',
                        maxWidth: 150,
                        maxHeight: 60,
                    }}
                >
                    {ItemEnum.TIER_4_GEM_LVL_1}
                </Typography>

                <TextField
                    variant="outlined"
                    size="small"
                    disabled={true}
                    value={tier4Lvl1GemPrice.toFixed(2)}
                    sx={{
                        width: 150,
                        minWidth: 50,
                    }}
                />
            </Box>
        </Box>
        <div style={{ width: "80%" }}>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold',
                    marginRight: 'auto',
                    maxWidth: "fit-content",
                    maxHeight: 60,
                    padding: 1,
                    margin: 1,
                }}
            >
                Gold in gems only(no bonus room/any other mats yet)
            </Typography>
            {cubeData.map((cubeData) => {
                const gems = cubeData.rewards.gems[0]
                const baseLvl1Price = cubeData.tier === 3 ? tier3Lvl1GemPrice : tier4Lvl1GemPrice
                return <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: '#1e1e1e',
                        maxWidth: 370,
                        padding: 1,
                        margin: 1,
                        borderRadius: 1,
                        color: '#ffffff',
                    }}
                >
                    <Box
                        component="img"
                        src={ItemsList[ItemEnum.GOLD].image}
                        alt={ItemEnum.GOLD}
                        sx={{
                            width: 24,
                            height: 24,
                            marginRight: 1,
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 'bold',
                            marginRight: 'auto',
                            maxWidth: 250,
                            maxHeight: 60,
                        }}
                    >
                        {`Tier ${cubeData.tier} | ${cubeData.name}`}
                    </Typography>

                    <TextField
                        variant="outlined"
                        size="small"
                        disabled={true}
                        value={(baseLvl1Price * gems.quantity).toFixed(2)}
                        sx={{
                            width: 100,
                            minWidth: 50,
                        }}
                    />
                </Box>
            })}
        </div>
    </Box>
}
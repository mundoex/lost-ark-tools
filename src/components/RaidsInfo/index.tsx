import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import InfoIcon from "@mui/icons-material/Info";
import { GoldImage, InputElement, MaterialImage } from "./styles";
import {
  FormControlLabel,
  FormGroup,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  RaidsInfoContext,
  RaidsInfoProvider,
} from "../../context/RaidInfoContext";
import { useContext, useState } from "react";
import { ItemEnum } from "../../common/Items/ItemEnum";
import { RAIDS_INFO } from "../../constants/RaidsInfo";
import { HeadCell, RaidsInfoTableData } from "./types";
import { ItemsList } from "../../constants/ItemList";

const headCells: readonly HeadCell[] = [
  {
    id: "Name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "Gold",
    numeric: false,
    disablePadding: true,
    label: "Gold",
  },
  {
    id: "Rewards",
    numeric: true,
    disablePadding: false,
    label: "Rewards",
  },
  {
    id: "Box",
    numeric: true,
    disablePadding: false,
    label: "Box",
  },
  {
    id: "Bid Box",
    numeric: true,
    disablePadding: false,
    label: "Bid Box",
  },
];

const rows: RaidsInfoTableData[] = RAIDS_INFO.reduce((acc, cur) => {
  cur.gates.forEach((gateInfo, i) => {
    const d: RaidsInfoTableData = {
      name: `${cur.name} Gate ${i + 1}`,
      itemLevel: gateInfo.itemLevelRequired,
      gold: gateInfo.rewards.gold,
      extraRewardsGold: gateInfo.extraRewards.gold,
      materials: gateInfo.rewards.materialRewards,
      extraRewardsMaterials: gateInfo.extraRewards.materialRewards,
      bidBox: gateInfo?.bidBox,
      totalRaidGold: cur.gates.reduce((acc2, cur2) => (acc2 += cur2.rewards.gold), 0),
    };
    acc.push(d);
  });
  return acc;
}, new Array<RaidsInfoTableData>());

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center" padding={"normal"}>
            <TableSortLabel active={false} hideSortIcon>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function RaidsInfo() {
  return (
    <RaidsInfoProvider>
      <RaidInfoComponent />
    </RaidsInfoProvider>
  );
}

function RaidInfoComponent() {
  const context = useContext(RaidsInfoContext);
  const [currentTab, setCurrentTab] = useState(0);

  const currentSelectedPreset = context.presets[currentTab];
  const isOtherTab = currentTab > 5;
  const totalGold = context.getTotalGold(rows);

  const onChangeTab = (_: React.SyntheticEvent, newValue: number) =>
    setCurrentTab(newValue);
  const onChangeG4Box = (_: React.SyntheticEvent) =>
    context.toggleG4(currentTab);
  const onChangePresetName = (e: React.ChangeEvent<HTMLInputElement>) =>
    context.setPresetName(e.target.value, currentTab);
  const onChangeHideItemLevel = (e: React.ChangeEvent<HTMLInputElement>) =>
    context.setHideItemLevel(parseInt(e.target.value), currentTab);
  
  return (
    <>
      <Box
        display="flex"
        margin="4px"
        marginBottom="10px"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Tabs value={currentTab} onChange={onChangeTab} variant="scrollable">
            {context.presets.map((preset, i) => (
              <Tab key={`tab${i}`} label={preset.name} />
            ))}
            <Tab label="Other" />
            <Tab
              disabled
              label={totalGold}
              icon={<GoldImage src={ItemsList[ItemEnum.GOLD].image} alt="Gold" />}
              iconPosition="end"
              style={{ color: "#1976d2" }}
            ></Tab>
          </Tabs>
        </Box>
        {!isOtherTab && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            margin="10px"
          >
            <InputElement
              placeholder="Preset Name"
              value={currentSelectedPreset.name}
              onChange={onChangePresetName}
            />
            <div style={{ color: "#1976d2", alignSelf: "center" }}>
              {context.getCurrentPresetTotalGold(rows, currentTab)}
              <GoldImage src={ItemsList[ItemEnum.GOLD].image} alt="Gold" />
            </div>
            <FormGroup>
              <FormControlLabel
                label="Disable G4 Brel/Thae"
                control={<>
                <TextField 
                  id="hide-item-level"
                  sx={{ '& > :not(style)': { m: 0, width: '110px' } }}
                  label="Hide iLevel"
                  value={currentSelectedPreset?.hideItemLevelContentBelow ?? 0}
                  onChange={onChangeHideItemLevel}/>
                <Checkbox
                    checked={currentSelectedPreset.disabledG4}
                    onChange={onChangeG4Box}
                  />
                </>
                }
              />
            </FormGroup>
          </Box>
        )}
        {!isOtherTab && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            className="otario"
          >
            <RaidsTable currentTabIndex={currentTab} />
          </Box>
        )}
        {isOtherTab && (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <IconButton
              aria-label="Add"
              style={{ width: "fit-content", alignSelf: "end" }}
              onClick={() => context.addOther()}
            >
              <AddCircleIcon />
            </IconButton>
            {context.other.map((other, i) => {
              return (
                <Box
                  key={other.label}
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <InputElement
                    placeholder="Name"
                    value={other.label}
                    onChange={(e) => context.updateOtherName(e.target.value, i)}
                    style={{ margin: "2px" }}
                  />
                  <InputElement
                    placeholder="Gold"
                    value={other.gold}
                    onChange={(e) =>
                      context.updateOtherGold(parseInt(e.target.value), i)
                    }
                    style={{ margin: "2px" }}
                  />
                  <IconButton
                    aria-label="Add"
                    style={{ width: "fit-content", alignSelf: "center" }}
                    onClick={() => context.removeOther(i)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
}

interface TotalGoldTooltipProps {
  totalGold?: number;
}

function TotalGoldTooltip(props: TotalGoldTooltipProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignSelf="center"
      alignItems="center"
    >
      {props.totalGold}
      <GoldImage src={ItemsList[ItemEnum.GOLD].image} alt="Gold" />
    </Box>
  );
}

interface RaidsTableProps {
  currentTabIndex?: number;
}

function RaidsTable(props: RaidsTableProps) {
  const context = useContext(RaidsInfoContext);
  const currentPreset = context.presets[props.currentTabIndex ?? 0];
  const selectedGates = currentPreset?.gateNames ?? [];
  const isSelected = (name: string) => selectedGates?.indexOf(name) !== -1;

  const handleClick = (_: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selectedGates?.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedGates, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedGates.slice(1));
    } else if (selectedIndex === selectedGates.length - 1) {
      newSelected = newSelected.concat(selectedGates.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedGates.slice(0, selectedIndex),
        selectedGates.slice(selectedIndex + 1)
      );
    }
    context?.updatePreset(
      { ...currentPreset, gateNames: newSelected },
      props.currentTabIndex ?? 0
    );
  };

  return (
    <>
      <Box sx={{ width: "70%", display: "inline-flex" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 800 }}
              aria-labelledby="tableTitle"
              size={"small"}
            >
              <EnhancedTableHead />
              <TableBody>
                {rows.filter((r)=>r.itemLevel>=(currentPreset?.hideItemLevelContentBelow ?? 0)).map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>

                      <Tooltip
                        title={
                          row.name.includes("1") && (
                            <TotalGoldTooltip totalGold={row.totalRaidGold} />
                          )
                        }
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          style={{ textAlign: "center" }}
                        >
                          <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            {row.name}
                            {row.name.includes("1") && (
                              <InfoIcon fontSize="inherit" color="primary" />
                            )}
                          </Box>
                        </TableCell>
                      </Tooltip>

                      <TableCell
                        align="right"
                        style={{ color: "#1976d2", textAlign: "center" }}
                      >
                        {row.gold}
                        <GoldImage src={ItemsList[ItemEnum.GOLD].image} alt="Gold" />
                      </TableCell>
                      <TableCell align="right">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          {row.materials.map((mat, i) => {
                            return (
                              <div key={`rewards${row.name}${i}`}>
                                <MaterialImage
                                  src={ItemsList[mat.name as ItemEnum].image}
                                  alt={mat.name}
                                />
                                x{mat.quantity}
                              </div>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <div style={{ color: "#fb0000c4" }}>
                            -{row.extraRewardsGold}
                            <GoldImage src={ItemsList[ItemEnum.GOLD].image} alt="Gold" />
                          </div>
                          {row.extraRewardsMaterials.map((mat, i) => {
                            return (
                              <div key={`Box${row.name}${i}`}>
                                <MaterialImage
                                  src={ItemsList[mat.name as ItemEnum].image}
                                  alt={mat.name}
                                />
                                x{mat.quantity}
                              </div>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          {row?.bidBox?.map((mat, i) => {
                            return (
                              <div key={`bidbox${row.name}${i}`}>
                                <MaterialImage
                                  src={ItemsList[mat.name as ItemEnum].image}
                                  alt={mat.name}
                                />
                                x{mat.quantity}
                              </div>
                            );
                          })}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}

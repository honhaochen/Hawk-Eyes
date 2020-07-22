import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Icon,
    ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { watchSeatingPlanData } from "../../app-redux/actions";
import { updateSeatingPlanData } from "../../app-redux/actions";
import Constants from "expo-constants";

export function generateGrid(number) {
    const grid = {};
    for (let i = 1; i <= number; i++) {
        let cell = { id: i, isStored: false, nature: "none" };
        grid[i] = cell;
    }
    return grid;
}

function seatStyle(cell) {
    if (cell.nature == "none") {
        return styles.buttonnoseat;
    } else if (cell.nature == "2 seater") {
        return styles.button2seat;
    } else if (cell.nature == "4 seater") {
        return styles.button4seat;
    } else if (cell.nature == "6 seater") {
        return styles.button6seat;
    } else if (cell.nature == "stall") {
        return styles.buttonStall;
    } else {
        return;
    }
}

class SeatingPlan extends React.Component {
    componentDidMount() {
        this.props.watchSeatingPlanData(this.props.route.params.foodCentre.id);
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
        };
    }

    cellPress = (cell) => {
        if (
            this.state.selectedIndex == 1 &&
            cell.id % 15 != 0 &&
            !cell.isStored
        ) {
            const cell1 = this.state.grid[cell.id];
            const cell2 = this.state.grid[cell.id + 1];
            if (!cell2.isStored) {
                const newCell1 = {
                    ...cell1,
                    isStored: true,
                    nature: "2 seater",
                };
                const newCell2 = {
                    ...cell2,
                    isStored: true,
                    nature: "2 seater",
                };
                const newGrid = this.state.grid;
                newGrid[cell.id] = newCell1;
                newGrid[cell.id + 1] = newCell2;
                this.setState({
                    grid: newGrid,
                });
            }
        } else if (this.state.selectedIndex == 2 && !cell.isStored) {
            if (cell.id % 15 !== 0 && cell.id < 405) {
                // magic numbers here
                const cell1 = this.state.grid[cell.id];
                const cell2 = this.state.grid[cell.id + 1];
                const cell3 = this.state.grid[cell.id + 15];
                const cell4 = this.state.grid[cell.id + 16];
                if (!cell2.isStored && !cell3.isStored && !cell4.isStored) {
                    const newCell1 = {
                        ...cell1,
                        isStored: true,
                        nature: "4 seater",
                    };
                    const newCell2 = {
                        ...cell2,
                        isStored: true,
                        nature: "4 seater",
                    };
                    const newCell3 = {
                        ...cell3,
                        isStored: true,
                        nature: "4 seater",
                    };
                    const newCell4 = {
                        ...cell4,
                        isStored: true,
                        nature: "4 seater",
                    };
                    const newGrid = this.state.grid;
                    newGrid[cell.id] = newCell1;
                    newGrid[cell.id + 1] = newCell2;
                    newGrid[cell.id + 15] = newCell3;
                    newGrid[cell.id + 16] = newCell4;
                    this.setState({
                        grid: newGrid,
                    });
                }
            }
        } else if (this.state.selectedIndex == 3 && !cell.isStored) {
            if (
                cell.id % 15 !== 0 &&
                (cell.id + 1) % 15 != 0 &&
                cell.id < 405
            ) {
                // magic numbers here
                const cell1 = this.state.grid[cell.id];
                const cell2 = this.state.grid[cell.id + 1];
                const cell3 = this.state.grid[cell.id + 2];
                const cell4 = this.state.grid[cell.id + 15];
                const cell5 = this.state.grid[cell.id + 16];
                const cell6 = this.state.grid[cell.id + 17];
                if (
                    !cell2.isStored &&
                    !cell3.isStored &&
                    !cell4.isStored &&
                    !cell5.isStored &&
                    !cell6.isStored
                ) {
                    const newCell1 = {
                        ...cell1,
                        isStored: true,
                        nature: "6 seater",
                    };
                    const newCell2 = {
                        ...cell2,
                        isStored: true,
                        nature: "6 seater",
                    };
                    const newCell3 = {
                        ...cell3,
                        isStored: true,
                        nature: "6 seater",
                    };
                    const newCell4 = {
                        ...cell4,
                        isStored: true,
                        nature: "6 seater",
                    };
                    const newCell5 = {
                        ...cell5,
                        isStored: true,
                        nature: "6 seater",
                    };
                    const newCell6 = {
                        ...cell6,
                        isStored: true,
                        nature: "6 seater",
                    };
                    const newGrid = this.state.grid;
                    newGrid[cell.id] = newCell1;
                    newGrid[cell.id + 1] = newCell2;
                    newGrid[cell.id + 2] = newCell3;
                    newGrid[cell.id + 15] = newCell4;
                    newGrid[cell.id + 16] = newCell5;
                    newGrid[cell.id + 17] = newCell6;
                    this.setState({
                        grid: newGrid,
                    });
                }
            }
        } else if (this.state.selectedIndex == 4) {
            if (
                cell.id % 15 !== 0 &&
                (cell.id + 1) % 15 != 0 &&
                cell.id < 390
            ) {
                // magic numbers here
                const cell1 = this.state.grid[cell.id];
                const cell2 = this.state.grid[cell.id + 1];
                const cell3 = this.state.grid[cell.id + 2];
                const cell4 = this.state.grid[cell.id + 15];
                const cell5 = this.state.grid[cell.id + 16];
                const cell6 = this.state.grid[cell.id + 17];
                const cell7 = this.state.grid[cell.id + 30];
                const cell8 = this.state.grid[cell.id + 31];
                const cell9 = this.state.grid[cell.id + 32];
                if (
                    !cell2.isStored &&
                    !cell3.isStored &&
                    !cell4.isStored &&
                    !cell5.isStored &&
                    !cell6.isStored &&
                    !cell7.isStored &&
                    !cell8.isStored &&
                    !cell9.isStored
                ) {
                    const newCell1 = {
                        ...cell1,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell2 = {
                        ...cell2,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell3 = {
                        ...cell3,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell4 = {
                        ...cell4,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell5 = {
                        ...cell5,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell6 = {
                        ...cell6,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell7 = {
                        ...cell7,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell8 = {
                        ...cell8,
                        isStored: true,
                        nature: "stall",
                    };
                    const newCell9 = {
                        ...cell9,
                        isStored: true,
                        nature: "stall",
                    };
                    const newGrid = this.state.grid;
                    newGrid[cell.id] = newCell1;
                    newGrid[cell.id + 1] = newCell2;
                    newGrid[cell.id + 2] = newCell3;
                    newGrid[cell.id + 15] = newCell4;
                    newGrid[cell.id + 16] = newCell5;
                    newGrid[cell.id + 17] = newCell6;
                    newGrid[cell.id + 30] = newCell7;
                    newGrid[cell.id + 31] = newCell8;
                    newGrid[cell.id + 32] = newCell9;
                    this.setState({
                        grid: newGrid,
                    });
                }
            }
        } else {
            return;
        }
    };

    cellPressErase = (c) => {
        if (c.nature == "none") {
            return;
        }
        const cell = this.state.grid[c.id];
        const nature = cell.nature;
        const newCell = { ...cell, isStored: false, nature: "none" };
        const newGrid = this.state.grid;
        newGrid[c.id] = newCell;
        this.setState({
            grid: newGrid,
        });

        if (c.id - 1 >= 1) {
            const cellLeft = this.state.grid[c.id - 1];
            if (cellLeft.nature == nature) {
                this.cellPressErase(cellLeft);
            }
        }

        if (c.id + 1 < 420) {
            const cellRight = this.state.grid[c.id + 1];
            if (cellRight.nature == nature) {
                this.cellPressErase(cellRight);
            }
        }

        if (c.id + 15 <= 420) {
            const cellLower = this.state.grid[c.id + 15];
            if (cellLower.nature == nature) {
                this.cellPressErase(cellLower);
            }
        }

        if (c.id - 15 >= 1) {
            const cellUpper = this.state.grid[c.id - 15];
            if (cellUpper.nature == nature) {
                this.cellPressErase(cellUpper);
            }
        }
    };

    eraseAll = () => {
        this.setState({
            grid: generateGrid(420),
        });
    };

    saveSeatingPlan = () => {
        this.props.updateSeatingPlanData(this.state);
    };

    updateIndex = (selectedIndex) => {
        this.setState({
            selectedIndex: selectedIndex,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.seatSelection}>
                    {[1, 2, 3].map((number) => (
                        <TouchableOpacity
                            key={number}
                            onPress={() => this.updateIndex(number)}
                            style={
                                this.state.selectedIndex == number
                                    ? styles.seatButtonSelected
                                    : styles.seatButton
                            }
                        >
                            <Text>{number * 2} seater</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        onPress={() => this.updateIndex(4)}
                        style={
                            this.state.selectedIndex == 4
                                ? styles.seatButtonSelected
                                : styles.seatButton
                        }
                    >
                        <Text>stall</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.grid}>
                    {this.props.seatingPlanGrid
                        ? Object.keys(this.props.seatingPlanGrid).map(
                              (index) => (
                                  <TouchableOpacity
                                      key={index}
                                      style={seatStyle(
                                          this.props.seatingPlanGrid[index]
                                      )}
                                      onPress={() => {
                                          this.state.selectedIndex == 5
                                              ? cellPressErase(
                                                    this.props.seatingPlanGrid[
                                                        index
                                                    ]
                                                )
                                              : cellPress(
                                                    this.props.seatingPlanGrid[
                                                        index
                                                    ]
                                                );
                                      }}
                                  />
                              )
                          )
                        : null}
                </View>
                <View style={styles.settingsButtons}>
                    <TouchableOpacity
                        onPress={() => this.updateIndex(5)}
                        style={
                            this.state.selectedIndex == 5
                                ? styles.seatButtonSelected
                                : styles.seatButton
                        }
                    >
                        <Text>Erase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.eraseAll}
                        style={styles.seatButton}
                    >
                        <Text>Erase All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.saveSeatingPlan}
                        style={styles.seatButton}
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
    seatButton: {
        borderWidth: 1,
        padding: 5,
        alignItems: "center",
    },
    seatButtonSelected: {
        borderWidth: 1,
        padding: 5,
        alignItems: "center",
        backgroundColor: "pink",
    },
    seatSelection: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 8,
    },
    settingsButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttonnoseat: {
        flex: 1,
        padding: 9,
        margin: 1,
        backgroundColor: "grey",
    },
    button2seat: {
        flex: 1,
        padding: 9,
        margin: 1,
        backgroundColor: "#FFDFFF",
    },
    button4seat: {
        flex: 1,
        padding: 9,
        margin: 1,
        backgroundColor: "#E269FF",
    },
    button6seat: {
        flex: 1,
        padding: 9,
        margin: 1,
        backgroundColor: "#FF00FE",
    },
    buttonStall: {
        flex: 1,
        padding: 9,
        margin: 1,
        backgroundColor: "blue",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        height: 575,
        width: 300,
        alignSelf: "center",
    },
});

const mapStateToProps = (state) => ({
    user: state.user,
    seatingPlanGrid: state.seatingPlanGrid,
});

const mapDispatchToProps = (dispatch) => {
    return {
        watchSeatingPlanData: (foodCentreId) =>
            dispatch(watchSeatingPlanData(foodCentreId)),
        updateSeatingPlanData: (seatingPlan) =>
            dispatch(updateSeatingPlanData(seatingPlan)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatingPlan);

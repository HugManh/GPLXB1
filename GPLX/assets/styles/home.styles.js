import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

const { height } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flex: 1,
        backgroundColor: '#66bb6a',
        flexDirection: 'row',
        height: '10%',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    textHeader: {
        left: 20,
        fontSize: 22,
        color: 'white',
    },
    gridList: {
        flex: 5.5,
        backgroundColor: '#00000017',
    },

    button: {
        flexDirection: 'row',
        height: '50%',
        justifyContent: 'space-between',
    },
    button2: {
        backgroundColor: '#fff',
        width: 0,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0.5,
        padding: 2,
    },
    imageButton: {
        resizeMode: 'cover',
        marginBottom: 10,
    },
    button1: {
        fontSize: 15,
        textAlign: 'center',
    },

    headerText: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    GridViewContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        borderWidth: 0.5,
        borderColor: '#9d9d9d',
    },
    GridViewTextLayout: {
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        padding: 10,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 30,
        bottom: 30,
        backgroundColor: '#66bb6a',
        height: 70,
        width: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    iconButton: {
        color: '#fff',
        fontSize: 24,
    },
});
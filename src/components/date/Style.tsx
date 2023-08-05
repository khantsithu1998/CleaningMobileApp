import { StyleSheet } from "react-native";
import { palette } from "utils/theme/colors";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#eee',
        borderRadius: 10,
        borderColor: palette.primary,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        height: 90,
        width: 80,
        marginHorizontal: 5,
    },
    big: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    medium: {
        fontSize: 16,
    },
})

export default styles
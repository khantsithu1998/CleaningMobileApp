import { Text, View } from "react-native"

import styles from "./Style"

const TotalCard = ({title , totalCount } : {title : string , totalCount : string}) => {
    return <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{totalCount}</Text>
    </View>
}

export default TotalCard
import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    review: {
        padding: 15,
        backgroundColor: theme.colors.light,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'flex-start',
    },
    rating: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: theme.colors.primary,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 50,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    ratingText: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.normal,
        fontSize: 23,
    },
    content: {
        flexGrow: 4,
        flexShrink: 0,
        flexBasis: 2,
    }
})

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.review}>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{review.rating}</Text>
            </View>
            <View style={styles.content}>
                <Text>{review.user.username}</Text>
                <Text>{review.createdAt}</Text>
                <Text>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;
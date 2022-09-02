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
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 50,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 10,
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
    },
    username: {
        fontWeight: theme.fontWeights.bold,
    },
    date: {
        color: theme.colors.textSecondary,
    },
})

const parseDate = (date) => {
    const parsed = new Date(date);
    const toLocale = parsed.toLocaleDateString();
    return toLocale;
};

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.review}>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{review.rating}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.username}>{review.user.username}</Text>
                <Text style={styles.date}>{parseDate(review.createdAt)}</Text>
                <Text>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;
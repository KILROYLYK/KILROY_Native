import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    base: {
        flex: 1,
        height: '100%',
        backgroundColor: Colors.black,
        color: Colors.white
    },
    body: {
        flex: 1,
        height: '100%',
        backgroundColor: Colors.black,
        color: Colors.white
    },
    center: {
        ...Platform.select({
            ios: {
                alignItems: 'center'
            },
            android: {
                textAlignVertical: 'center'
            }
        })
    }
});

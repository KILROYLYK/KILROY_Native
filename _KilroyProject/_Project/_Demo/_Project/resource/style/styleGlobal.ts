import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Global from '../../application/constant/_global';

export default StyleSheet.create({
    BaseView: {
        backgroundColor: Colors.black,
        color: Colors.white,
        height: '100%'
    },
    BodyView: {
        backgroundColor: Colors.dark,
        color: Colors.white,
        height: Global.WindowHeight,
    }
});

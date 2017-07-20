import { StyleSheet } from 'react-native';
import metrics from './config/metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: metrics.TIME_BAR_HEIGHT,
    borderColor: 'black',
    borderWidth: 1,
  },
});

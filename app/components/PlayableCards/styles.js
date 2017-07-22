import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  content:{
        marginTop:380,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'    //<-----
    }
})

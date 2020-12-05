import { StyleSheet, ImageComponent, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: "row",
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  standard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  fromTheTop:{
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  space:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.0)',
  },
  containerRelative: {
    flex: 1,
    backgroundColor: '#333333',
    paddingTop: 0
  },
  scroll:{
    flex: 1,
    backgroundColor: '#333333',
  },
  scheduler: {
    padding: 10,
    width: '90%',
    backgroundColor: '#777',
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  header:{
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  navDrawer:{
    height: '6%',
    flexDirection: 'row',
    justifyContent:  'space-evenly',
  },
  imageBG:{
    flex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.3,
    position: 'absolute',
    
  },
  titleText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: "bold",
    direction: 'rtl',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10
  },
  bigTitle: {
    fontFamily: 'miri',
    paddingBottom: 15,
    color: '#fff',
    fontSize: 30,
    fontWeight: "bold"
  },
  headerTitle: {
    fontFamily: 'miri',
    textShadowColor: '#000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 10,
    paddingBottom: 0,
    color: '#DDD',
    fontSize: 26,
    fontWeight: "bold"
  },
  notes: {
    color: '#c4c4c4',
    fontSize: 16,
    fontWeight: "bold",
    flexDirection: 'row'
  },
  links: {
    color: '#f59753',
    fontSize: 16,
    fontWeight: "bold"
  },
  logo: {
    marginTop: 30,
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  appBarLogo: {
    width: 40,
    height: 40,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  inputField: {
    color: '#f59753',
    textAlign: 'center',
    margin: 5,
    fontSize: 20,
    width: '80%', 
    height: 50,
    backgroundColor: '#5c5c5c',
    borderColor: '#db7739', 
    borderWidth: 1.4,
    borderRadius: 25,
    paddingHorizontal: 16
  },
  button:{
    width: '80%',
    backgroundColor: '#db7739',
    opacity: 0.9,
    borderRadius: 25,
    marginVertical: 35,
    paddingVertical: 12
  },
  mainButton:{
    width: '80%',
    backgroundColor: '#db7739',
    opacity: 0.9,
    borderRadius: 25,
    marginBottom: 35,
    paddingVertical: 12
  },
  navButton:{
    flex: 1,
    backgroundColor: '#db7740',
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff',
    textAlign: 'center'
  },
  imgElement: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  imageContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  imageWrap:{
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3) -12 ,
    width: (Dimensions.get('window').width/2) -4 ,
    backgroundColor: '#FFF',
  },
  modal:{
    flex: 1,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.9)',

  },
  addImage:{
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
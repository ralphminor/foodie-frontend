import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
 root: {
   flex: 1
 },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%'
  },
  title: {
    color: '$whiteColor',
    fontSize: 20,
    fontFamily: 'montserratBold'
  },
  contentContainer: {
    flex: 1
  },
  experienceCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '$redColor'
  },
  experienceCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  experienceCardTitle: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%'
  },
  experienceCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%'
  },
  experienceCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  experienceCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 5,
  }
});

export default styles;
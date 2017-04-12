import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
 root: {
   flex: 1
 },
  titleContainer: {
    flex: 0.03
  },
  title: {
    marginTop: '1%',
    color: '$whiteColor',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'montserratBold'
  },
  rating: {
    color: '$whiteColor',
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  contentContainer: {
    flex: 1
  },
  experienceCard: {
    height: 200,
    width: 400,
    marginTop: '4%',
    marginHorizontal: '1.5%',
    backgroundColor: '$blackBlueColor'
  },
  experienceCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  experienceCardTitle: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$redColor',
    top: '1%',
    left: '2.5%'
  },
  experienceCardBottomContainer: {
    flex: 0.3,
    backgroundColor: '$lightGrayColor',
    justifyContent: 'center',
    paddingHorizontal: '0%'
  },
  experienceCardMetaName: {
    fontSize: 18,
    fontFamily: 'montserratBold',
    color: '$blackBlueColor',
    paddingHorizontal: 5
  },
  experienceCardMetaDate: {
    fontSize: 16,
    fontFamily: 'montserratLight',
    color: '$blackBlueColor',
    paddingHorizontal: 5
  },
  star: {
    color: '$whiteColor'
  }
});

export default styles;

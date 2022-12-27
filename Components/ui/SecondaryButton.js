//  RN Core components & API imports
import { View, Text, Pressable, StyleSheet} from 'react-native'

const SecondaryButton = ({children}) => {
  return (
    <View style={style.signUpButton}>
        <Pressable>
            <Text style={style.textColor}>Sign Up</Text>
        </Pressable>
    </View>
  )
}


const style = StyleSheet.create({
  signUpButton: {
    backgroundColor: 'black',
    alignItems:'center',
    width: '60%',
    margin: 5,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 25,
  },

  textColor: {
    color: 'white',
  },
})

export default SecondaryButton;

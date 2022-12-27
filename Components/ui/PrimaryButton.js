//  RN Core components & API imports
import { View, Text, Pressable, StyleSheet} from 'react-native'

const PrimaryButton = ({children}) => {
  return (
    <View style={style.loginButton}>
        <Pressable>
            <Text style={style.textColor}>Login</Text>
        </Pressable>
    </View>
  )
}


const style = StyleSheet.create({
    loginButton: {
        backgroundColor: '#79AD94',
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

export default PrimaryButton;

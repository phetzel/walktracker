import colors from './colors';

const text = {
    color: colors.black,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
}

export default text;
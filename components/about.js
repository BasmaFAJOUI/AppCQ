import { Text, StyleSheet} from "react-native";

export default function TextViewer() {
    return <Text style={styles.card}>
    {`تطبيق نادي القرآن الكريم بالمدرسة الوطنية العليا للمعلوميات و تحليل النُظم منبر افتراضي يهدف طبعاً، كما هو الحال بالنسبة لكل أنشطة النادي، لدعوة الناس إلى الله ونشر كل ما يمكن أن ينفعهم مصداقا لقول رسول الله صلى الله عليه وسلم `}
    <Text style={{fontFamily:'Cairo_Bold',}}>{"\n"} "بلغوا عني ولو آية".</Text>
    <Text>{"\n"}فبادروا ولا تدبروا</Text>
    </Text>;
  }
const styles = StyleSheet.create({
    card: {
        //flex: 1,
        padding: 8,
        textAlign:'center',
        fontSize: 20,
        fontFamily: 'Cairo_SemiBold',
        lineHeight: 32,
        },
});

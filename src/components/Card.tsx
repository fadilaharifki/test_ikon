import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../theme/color';
import {DataInterface} from '../interface/ListInterface';
import CustomText from './CustomText';
interface CardProps {
  item: DataInterface;
  onPress: () => void;
}

const Card = ({item, onPress}: CardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerCard}>
      <View style={styles.rowText}>
        <CustomText>{item.title}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    padding: 16,
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Card;

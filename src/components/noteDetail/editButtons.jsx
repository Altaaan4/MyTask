import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/color';
import {
  TextBold,
  TextBlock,
  TextUnderline,
  TextalignJustifyleft,
  TextalignJustifyright,
  TextalignCenter,
} from 'iconsax-react-native';

const EditButtons = ({ onChangeStyle }) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextBlock size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 3,
      value: 'underline',
      icon: <TextUnderline size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 4,
      value: 'left',
      icon: <TextalignJustifyleft size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 5,
      value: 'center',
      icon: <TextalignCenter size="32" color={AppColors.SECONDARY} />,
    },
    {
      id: 6,
      value: 'right',
      icon: <TextalignJustifyright size="32" color={AppColors.SECONDARY} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => onChangeStyle(item.value)}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EditButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
});

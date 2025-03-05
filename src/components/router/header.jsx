import { Text, View} from 'react-native';
import {MYNOTES} from '../../utils/router';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import {HambergerMenu, SearchNormal, More} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={screenStyle.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <HambergerMenu size="32" color={AppColors.SECONDARY} />
        <View style={{flexDirection: 'row', alignItems: 'center',gap:5}}>
          <SearchNormal size="24" color={AppColors.SECONDARY} />
          <More size="24" color={AppColors.SECONDARY} />
        </View>
      </View>

    </View>
  );
};

export default Header;



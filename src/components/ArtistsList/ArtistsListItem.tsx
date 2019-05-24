import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { SvgDisc, SvgHeartOutline, SvgHeart } from '../Svg';
import { colors } from '../../constants';
import cssInTs from '../../helpers/cssInTs';
import { IArtist } from '../../types';

interface IProps extends IArtist {
  unlikeArtist: (id: number) => void;
  likeArtist?: (artist: IArtist) => void;
}

const styles = StyleSheet.create({
  container: cssInTs({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 16,
    marginRight: 16,
  }),

  right: cssInTs({
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  }),

  title: cssInTs({
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
  }),

  emptyCover: cssInTs({
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: colors.GRAY_2,
  }),
});

class ArtistsList extends PureComponent<IProps> {
  static defaultProps = {
    thumb: '',
    liked: false,
    likeArtist: () => {},
  };

  handleLikePress = () => {
    const {
      unlikeArtist,
      likeArtist,
      title,
      thumb,
      id,
      uuid,
      liked,
    } = this.props;

    if (liked) {
      unlikeArtist(id);
    } else if (likeArtist) {
      likeArtist({
        uuid,
        id,
        title,
        thumb,
      });
    }
  };

  render() {
    const { title, thumb, liked } = this.props;
    const imgSource = { uri: thumb };

    const IconComponent = liked ? SvgHeart : SvgHeartOutline;
    const iconColor = liked ? colors.PINK_1 : colors.GRAY_1;

    return (
      <View style={styles.container}>
        <View style={styles.right}>
          {thumb ? (
            <Image style={{ width: 70, height: 70 }} source={imgSource} />
          ) : (
            <View style={styles.emptyCover}>
              <SvgDisc width={50} height={50} fill={colors.GRAY_1} />
            </View>
          )}
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.handleLikePress}>
            <IconComponent width={30} height={30} fill={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ArtistsList;

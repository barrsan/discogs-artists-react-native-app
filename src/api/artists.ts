import NetInfo from '@react-native-community/netinfo';
import apiInstance from './apiInstance';
import { config } from '../constants';

interface IGetArtists {
  searchString: string;
  page: number;
}

export default {
  async getArtists(params: IGetArtists) {
    const api = apiInstance({ baseURL: config.API_URL });
    const { searchString, page } = params;

    try {
      const netInfo = await NetInfo.fetch();

      if (!netInfo.isConnected) {
        throw new Error('Network Error');
      }

      const { data } = await api.get('database/search', {
        params: {
          q: searchString,
          type: 'artist',
          token: config.TOKEN,
          page,
        },
      });

      return {
        data,
        isEnd: !data.pagination.urls.next,
      };
    } catch (error) {
      throw error;
    }
  },
};

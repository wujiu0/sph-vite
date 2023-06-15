import mockRequests from '@/api/mockRequests';
import requests from '@/api/requests';

/**
 * 获取菜单导航项列表
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const reqGetCategoryList = () => {
    return requests.get('/product/getBaseCategoryList');
};

/**
 * 获取首页轮播图列表
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const reqGetBannerList = () => {
    return mockRequests.get('/banner');
};

export const reqGetFloorList = () => {
    return mockRequests.get('/floor');
};

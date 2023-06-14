import mockRequest from '@/api/mockRequest';
import requests from '@/api/request';

export const reqCategoryList = () => {
    return requests.get('/product/getBaseCategoryList');
};

export const reqGetBannerList = () => {
    return mockRequest.get('/banner');
};
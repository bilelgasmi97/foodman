import { SuccessResponse, IPage, Paginate } from "interfaces";
import request from "./request";

const pageService = {
  getDeliverPage: (params?: any): Promise<SuccessResponse<IPage>> =>
    request.get(`/rest/pages/delivery`, { params }),
  getAboutPage: (params?: any): Promise<SuccessResponse<IPage>> =>
    request.get(`/rest/pages/about`, { params }),
  getAboutSections: (): Promise<Paginate<IPage>> =>
    request.get(`/rest/pages/paginate?page=1&perPage=10&type=all_about`),
};

export default pageService;

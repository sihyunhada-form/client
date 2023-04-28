import { MainApi } from "./main.api";

const ContentService = {
  getPreviewContent: async () => {
    try {
      const result = await MainApi.get("/api/content/get");

      return result;
    } catch (e: any) {
      console.error(e);
      alert(`게시글 조회에서 오류가 발생했습니다.(1) ${e.response?.data?.message}`);
    }
  },
  getContentById: async (id: string) => {
    try {
      const result = await MainApi.get(`/api/v1/content/contentById?id=${id}`);
      return result;
    } catch (e) {
      console.error("게시글 조회에서 오류가 발생했습니다.(2)", e);
    }
  },
};

export default ContentService;

import { ApiService } from "./ApiService";

class GalleryService extends ApiService {
  getAllGalleries = async () => {
    try {
      const response = await this.client.get("/gallery");
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
}

export const galleryService = new GalleryService();

import { ApiService } from "./ApiService";

class GalleryService extends ApiService {
  getAllGalleries = async () => {
    try {
      let response = await this.client.get("/gallery");
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  getGallery = async (id) => {
    try {
      let response = await this.client.get(`/gallery/${id}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  createGallery = async (newGallery) => {
    try {
      let response = await this.client.post("/gallery", {
        ...newGallery,
        user_id: newGallery.userId,
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
}

export const galleryService = new GalleryService();

import { ApiService } from "./ApiService";

class GalleryService extends ApiService {
  getAllGalleries = async (current_page = 1, term = "", id = "") => {
    try {
      let response = await this.client.get(
        `/gallery?term=${term}&userId=${id}&current_page=${current_page}`
      );
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
        user_id: newGallery.userId,
        ...newGallery,
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  updateGallery = async (id, editGallery) => {
    try {
      let response = await this.client.put(`/gallery/${id}`, {
        ...editGallery,
        user_id: editGallery.userId,
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  deleteGallery = async (id) => {
    try {
      let response = await this.client.delete(`/gallery/${id}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  addComment = async (newComment) => {
    try {
      let response = await this.client.post("/gallery", {
        user_id: newComment.userId,
        gallery_id: newComment.galleryId,
        ...newComment,
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  deleteComment = async (id) => {
    try {
      let response = await this.client.delete(`/comments/${id}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
}

export const galleryService = new GalleryService();

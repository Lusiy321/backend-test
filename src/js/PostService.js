import Post from "./Post.js";

class PostService {
  async create(post) {
    const createPost = await Post.create(post);
    return createPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Not have ID");
    }
    const posts = await Post.findById(id);
    return posts;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("Not have ID");
    }
    const updatePost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatePost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Not have ID");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}
export default new PostService();

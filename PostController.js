import Post from "./Post.js";

class PostController {
  async create(req, res) {
    try {
      const { test, username, password } = req.body;
      const posts = await Post.create({ test, username, password });
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id not found" });
      }
      const posts = await Post.findById(id);
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async uppdate(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "Id not found" });
      }
      const updatePost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updatePost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id not found" });
      }
      const post = await Post.findByIdAndDelete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();

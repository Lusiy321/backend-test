import post from "./post.js";

class PostController {
  async create(req, res) {
    try {
      const { test, username, password } = req.body;
      const posts = await post.create({ test, username, password });
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        res.status(400).json({ message: "Id not found" });
      }
      const posts = await post.findById(id);
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async uppdate(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();

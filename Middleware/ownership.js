import prisma from "../prisma/client.js";

export const isArticleOwnerOrAdmin = async (req, res, next) => {
  const articleId = Number(req.params.id);

  const article = await prisma.article.findUnique({
    where: { id: articleId },
  });

  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  // Admin can manage all articles
  if (req.user.role === "ADMIN") {
    return next();
  }

  // Member can manage only own articles
  if (article.authorId !== req.user.id) {
    return res.status(403).json({
      message: "You are not allowed to manage this article",
    });
  }

  next();
};

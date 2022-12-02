const router = require('express').Router()
const controller = require('../controllers/Posts')
const middleware = require('../middleware')

router.get('/', controller.SeeAllPosts)
router.post(
    '/', //<might be an issue
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreatePost
)
router.put(
    '/:postId', //<might need to change to _
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePost
)
router.delete(
    '/:postId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeletePosts
)

module.exports = router
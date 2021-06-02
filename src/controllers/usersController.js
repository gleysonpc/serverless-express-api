import User from '../models/User'

class UserController {

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users)
    }

    async show(req, res) {
        const { id } = req.params
        const user = await User.findByPk(id)
        if (!user) return res.status(400).json({ error: 'user not found!' })
        return res.json(user)
    }

    async store(req, res) {
        const { name, email } = req.body
        const user = await User.create({ name, email })
        return res.json(user)
    }

    async update(req, res) {
        const { id } = req.params
        const { name } = req.body

        const user = await User.findByPk(id)
        if (!user) return res.status(400).json({ error: 'user not found!' })

        user.name = name
        await user.save();

        return res.json(user)
    }

    async destroy(req, res) {
        const { id } = req.params

        const user = await User.findByPk(id)
        if (!user) return res.status(400).json({ error: 'user not found!' })

        await user.destroy()

        return res.status(204)
    }
}

export default new UserController()
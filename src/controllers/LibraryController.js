class LibraryController {
  constructor(Library) {
    this.Library = Library;
  }

  async create(req, res) {
    const obra = new this.Library(req.body);
    const { titulo, editora, foto, autores } = obra;

    try {
      await obra.save();

      return res.status(201).send({ titulo, editora, foto, autores });
    } catch (error) {
      return res.status(422).send(error.message);
    }
  }

  async list(_, res) {
    try {
      const obra = await this.Library.find();

      const obraMapped = obra.map((obra) => {
        return {
          _id: obra._id,
          titulo: obra.titulo,
          editora: obra.editora,
          foto: obra.foto,
          autores: obra.autores,
        };
      });

      return res.status(200).send(obraMapped);
    } catch (error) {
      return res.status(400).send(new Error(error.message));
    }
  }

  async update(req, res) {
    try {
      await this.Library.updateOne({ _id: req.params.id }, req.body);
      return res.sendStatus(200);
    } catch (error) {
      return res.status(422).send(new Error(error.message));
    }
  }

  async remove(req, res) {
    try {
      await this.Library.deleteOne({ _id: req.params.id });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(422).send(new Error(error.message));
    }
  }
}

export default LibraryController;

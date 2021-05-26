import contactController from "../controllers/contactController"

function contactRouter(app)
{
    app.route("/contact")
        .post(contactController.saveContact)
}

export default contactRouter
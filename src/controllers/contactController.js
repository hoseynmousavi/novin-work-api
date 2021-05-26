import mongoose from "mongoose"
import contactModel from "../models/contactModel"
import data from "../data/data"
import sendSMS from "../helpers/sendSMS"

const contact = mongoose.model("contact", contactModel)

function saveContact(req, res)
{
    const {subject, description, contact_info} = req.body
    if (subject && description && contact_info)
    {
        new contact(req.body).save()
            .then(() =>
            {
                res.send({message: "ok"})
                sendSMS({receptor: data.supportNumber, template: data.orderTemplate, token: subject})
            })
            .catch(err => res.status(400).send({message: err}))
    }
    else res.status(400).send({message: "پارامترهای ارسالی ناقص می‌باشند."})
}

const contactController = {
    saveContact,
}

export default contactController
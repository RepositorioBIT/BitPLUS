const { Schema, model } = require("mongoose")

const FactSchema = Schema(
    {
        fact: {
            type: String,
            required: [true]
        }
    }
)

module.exports = model("Fact", FactSchema)
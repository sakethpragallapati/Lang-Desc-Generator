import mongoose from "mongoose";

const langSchema = mongoose.Schema({
    langName : String,
    landDesc: String
});
const LangModel = mongoose.model("LangCollection",langSchema);

export default LangModel;
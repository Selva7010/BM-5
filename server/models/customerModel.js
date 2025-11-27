// server/models/customerModel.js
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    
});

const PersonalTaskManager = mongoose.models.PersonalTaskManager || mongoose.model("PersonalTaskManager", customerSchema);

export default PersonalTaskManager;

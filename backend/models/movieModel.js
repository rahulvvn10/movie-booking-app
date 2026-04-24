const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({
    title:{type:String,required:true},
    rating:{type:Number,required:true},
    description:{type:String,required:true},
    releaseDate:{type:Date,required:true},
    cast:[String],
    duration: { type: Number, required: true }, 

    language: { type: String, required: true },
    genres: [{ type: String }],

    posterUrl: { type: String },
    backdropUrl: { type: String },
    trailerUrl: { type: String },

    cast: [
      {
        name: String,
        role: String,
        imageUrl: String,
      },
    ],
    director: { type: String },
    producer: { type: String },
    writer: { type: String },
    musicDirector: { type: String },
    cinematographer: { type: String },
    editor: { type: String },
    bookingsCount: { type: Number, default: 0 },
      isFeatured: { type: Boolean, default: false }, // for slider
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);
const movieModel=mongoose.model('Movie',movieSchema);
module.exports=movieModel;

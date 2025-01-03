import {defineField, defineType} from "sanity";
export default defineType ({
     name : 'home',
     title : "Home",
     type : 'document',
     fields:[
         defineField({
            name: 'heading',
            title : "heading",
            type : 'string',
         }),
         defineField ({
           name: 'description',
           title : "description",
           type : 'string'
         }),
         defineField ({
            name: 'image',
            title : "image",
            type : 'image'
         }),

         

         

     ]
       



})

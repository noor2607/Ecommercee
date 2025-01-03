import { defineField, defineType } from "sanity";

export default defineType({
  name: "Shop",
  title: "Shop",
  type: "document",
  fields: [
    defineField({
      name: "product_name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "product_name", 
        maxLength: 200,
       
        },
      
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Men's", value: "mens" },
          { title: "Women's", value: "womens" },
          { title: "New Arrivals", value: "newarrival" },
        ],
      },
    }),
  ],
});

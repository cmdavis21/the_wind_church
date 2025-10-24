// schemas/product.ts
import { defineField } from 'sanity';

export const ProductSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    // {
    //   name: 'store',
    //   title: 'Shopify Product Data',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'title',
    //       type: 'string',
    //       title: 'Title',
    //     }),
    //     defineField({
    //       name: 'slug',
    //       title: 'Handle',
    //       type: 'slug',
    //       options: {
    //         source: 'current',
    //       },
    //     }),
    //     defineField({
    //       name: 'descriptionHtml',
    //       title: 'HTML Description',
    //       type: 'text',
    //       rows: 5,
    //     }),
    //     defineField({
    //       name: 'gid',
    //       type: 'string',
    //       title: 'Global ID',
    //       readOnly: true,
    //     }),
    //     defineField({
    //       name: 'id',
    //       type: 'string',
    //       title: 'Product ID',
    //       readOnly: true,
    //     }),
    //     defineField({
    //       name: 'variants',
    //       type: 'array',
    //       title: 'Variants',
    //       of: [
    //         {
    //           type: 'object',
    //           fields: [
    //             defineField({ name: 'title', type: 'string', title: 'Variant Title' }),
    //             defineField({ name: 'id', type: 'string', title: 'Variant ID' }),
    //             defineField({ name: 'price', type: 'number', title: 'Price' }),
    //             defineField({ name: 'available', type: 'boolean', title: 'Available' }),
    //           ],
    //         },
    //       ],
    //     }),
    //     defineField({
    //       name: 'vendor',
    //       type: 'string',
    //       title: 'Vendor',
    //       readOnly: true,
    //     }),
    //   ],
    // },
    // Optional: add other custom fields here
  ],
  // preview: {
  //   select: {
  //     isDeleted: 'store.isDeleted',
  //     options: 'store.options',
  //     previewImageUrl: 'store.previewImageUrl',
  //     priceRange: 'store.priceRange',
  //     status: 'store.status',
  //     title: 'store.title',
  //     variants: 'store.variants',
  //   },
  //   // prepare(selection) {
  //   //   const { isDeleted, options, previewImageUrl, priceRange, status, title, variants } =
  //   //     selection;

  //   //   const optionCount = options?.length;
  //   //   const variantCount = variants?.length;

  //   //   // let description = [
  //   //   //   variantCount ? pluralize('variant', variantCount, true) : 'No variants',
  //   //   //   optionCount ? pluralize('option', optionCount, true) : 'No options',
  //   //   // ]

  //   //   let subtitle = '';
  //   //   if (status !== 'active') {
  //   //     subtitle = '(Unavailable in Shopify)';
  //   //   }
  //   //   if (isDeleted) {
  //   //     subtitle = '(Deleted from Shopify)';
  //   //   }

  //   //   return {
  //   //     // description: description.join(' / '),
  //   //     subtitle,
  //   //     title,
  //   //     // media: (
  //   //     //   <ShopifyDocumentStatus
  //   //     //     isActive={status === 'active'}
  //   //     //     isDeleted={isDeleted}
  //   //     //     type="product"
  //   //     //     url={previewImageUrl}
  //   //     //     title={title}
  //   //     //   />
  //   //     // ),
  //   //   };
  //   // },
  // },
};

// export const ProductSchema = {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Handle',
//       type: 'slug',
//       options: {
//         source: 'current',
//       },
//     }),
//     defineField({
//       name: 'descriptionHtml',
//       title: 'Description',
//       type: 'array',
//       of: [{ type: 'block' }],
//     }),
//     defineField({
//       name: 'gid',
//       type: 'string',
//       title: 'Global ID',
//       readOnly: true,
//     }),
//     defineField({
//       name: 'id',
//       type: 'string',
//       title: 'Product ID',
//       readOnly: true,
//     }),
//     defineField({
//       name: 'vendor',
//       type: 'string',
//       title: 'Vendor',
//       readOnly: true,
//     }),
//     defineField({
//       name: 'variants',
//       type: 'array',
//       title: 'Variants',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             defineField({ name: 'title', type: 'string', title: 'Variant Title' }),
//             defineField({ name: 'id', type: 'string', title: 'Variant ID' }),
//             defineField({ name: 'price', type: 'number', title: 'Price' }),
//             defineField({ name: 'available', type: 'boolean', title: 'Available' }),
//           ],
//         },
//       ],
//     }),
//   ],
//   preview: {
//     select: {
//       isDeleted: 'store.isDeleted',
//       options: 'store.options',
//       previewImageUrl: 'store.previewImageUrl',
//       priceRange: 'store.priceRange',
//       status: 'store.status',
//       title: 'store.title',
//       variants: 'store.variants',
//     },
//     prepare(selection) {
//       const { isDeleted, options, previewImageUrl, priceRange, status, title, variants } =
//         selection;

//       const optionCount = options?.length;
//       const variantCount = variants?.length;

//       // let description = [
//       //   variantCount ? pluralize('variant', variantCount, true) : 'No variants',
//       //   optionCount ? pluralize('option', optionCount, true) : 'No options',
//       // ]

//       let subtitle = '';
//       if (status !== 'active') {
//         subtitle = '(Unavailable in Shopify)';
//       }
//       if (isDeleted) {
//         subtitle = '(Deleted from Shopify)';
//       }

//       return {
//         // description: description.join(' / '),
//         subtitle,
//         title,
//         // media: (
//         //   <ShopifyDocumentStatus
//         //     isActive={status === 'active'}
//         //     isDeleted={isDeleted}
//         //     type="product"
//         //     url={previewImageUrl}
//         //     title={title}
//         //   />
//         // ),
//       };
//     },
//   },
// };

// import { APIRoute } from "astro";
// import type { CollectionEntry } from "astro:content";
// import { getCollection } from "astro:content";
// export const GET: APIRoute = async ({ url }) => {
//   const query = url.searchParams.get("query");

//   if (query === null) {
//     return new Response(
//       JSON.stringify({
//         error: "Query Params is Missing",
//       }),
//       {
//         status: 400,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//   }
//   const allBlogArticle: CollectionEntry<"blog">[] = await getCollection("blog");
//   const searchResult = allBlogArticle.filter((article) => {
//     const titleMatch = article.data.title
//       .toLowerCase()
//       .includes(query!.toLowerCase());
//     const bodyMatch = article.body.toLowerCase().includes(query!.toLowerCase());
//     const slugMatch = article.slug.toLowerCase().includes(query!.toLowerCase());
//     return titleMatch || bodyMatch || slugMatch;
//   });
//   return new Response(JSON.stringify(searchResult), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

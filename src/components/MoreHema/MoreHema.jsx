const MoreHema = () => {
   const items = [
     {
       img: "/public/brochure.webp",
       title: "HEMA brochure",
       description: "Enjoy browsing through our offers.",
     },
     {
       img: "/public/photo-service.webp",
       title: "photo service",
       description: "Photo books, prints and photo gifts with your own photos.",
     },
     {
       img: "/public/snowworld.webp",
       title: "SnowWorld tickets",
       description: "now with 40% discount",
     },
     {
       img: "/public/hema-friends.webp",
       title: "HEMA friends prices",
       description: "discover the best deals from the friends of HEMA",
     },
   ];
 
   return (
     <div className="max-w-screen-lg mx-auto px-4 py-10">
       <h2 className="text-2xl font-semibold mb-6">even more HEMA</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {items.map((item, index) => (
           <div
             key={index}
             className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
           >
             <img
               src={item.img}
               alt={item.title}
               className="w-full h-48 object-cover mb-4 rounded-md"
             />
             <h3 className="text-lg font-medium">{item.title}</h3>
             <p className="text-gray-600 text-center mt-2">{item.description}</p>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default MoreHema;
 
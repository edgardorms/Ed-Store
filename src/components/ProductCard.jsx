function ProductCard({ product }) {
    return (
        <div class="p-4 mt-6 w-80">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={product.images[0]} alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category}</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{product.title}</h1>
                  <p class="leading-relaxed mb-3">{product.description}</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                   
                  </div>
                </div>
              </div>
            </div>

    //   <div className="text-center text-white p-5" key={product.id}>
    //     <h2>{product.title}</h2>
    //     <img
    //       className=""
    //       src={product.images[0]}
    //       alt={product.title}
    //     ></img>
    //   </div>
    );
  }
  
  export default ProductCard;
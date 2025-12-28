import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { ALL_PRODUCTS } from '@/lib/productsData';

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

async function getProduct(category, slug) {
  const product = ALL_PRODUCTS.find(p => p.category === category && p.slug === slug);
  if (!product) return null;
  
  const related = ALL_PRODUCTS.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);
  
  return { product, related };
}


const ProductDetailPage = async ({ params }) => {
  const data = await getProduct(params.category, params.slug);
  
  if (!data || !data.product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="btn primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const { product, related: relatedProducts } = data;

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted/30 py-8 border-b">
        <div className="container-custom">
          <nav className="text-sm mb-4 text-muted-foreground">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products?category=${product.category}`} className="hover:underline capitalize">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span>{product.title}</span>
          </nav>
          <Link href="/products" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={product.heroImage}
                alt={product.title}
                fill
                className="object-cover"
                priority={true}
                loading="eager"
              />
            </div>

            {/* Details */}
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 capitalize">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {product.shortDescription}
              </p>

              {/* Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <div className="space-y-3">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between border-b border-border pb-2">
                          <span className="font-medium">{spec.key}</span>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn primary inline-flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Datasheet
                </button>
                <Link href="/contact" className="btn ghost inline-flex items-center justify-center">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Used In Industries */}
          {product.industries && product.industries.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Used in These Industries</h2>
              <div className="flex flex-wrap gap-3">
                {product.industries.map((industry, index) => (
                  <Link
                    key={index}
                    href={`/industries/${industry}`}
                    className="px-6 py-3 bg-primary/10 hover:bg-primary hover:text-white rounded-lg font-medium transition-all capitalize"
                  >
                    {industry.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in This Product?</h2>
          <p className="text-lg mb-8 opacity-90">Contact our sales team for pricing and availability</p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
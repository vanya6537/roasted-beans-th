import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const pt = useTranslations('Product');
  const ct = useTranslations('Contact');
  const wt = useTranslations('Wholesale');
  const ft = useTranslations('FAQ');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200">
      <Navbar />

      {/* Hero Section */}
      <header className="relative py-20 md:py-32 bg-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-amber-100 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#products" 
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            >
              {t('cta.roast')}
            </Link>
            <Link 
              href="https://line.me/ti/p/~jane4079" 
              target="_blank"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.571-3.866 2.571-6.002zm-15.864 3.913h-1.322c-.165 0-.3-.135-.3-.3v-3.513c0-.165.135-.3.3-.3h1.322c.165 0 .3.135.3.3v3.513c0 .165-.135.3-.3.3zm2.536 0h-1.322c-.165 0-.3-.135-.3-.3v-3.513c0-.165.135-.3.3-.3h1.322c.165 0 .3.135.3.3v3.513c0 .165-.135.3-.3.3zm4.562 0h-1.319c-.165 0-.3-.135-.3-.3l-.001-2.221-1.42 2.371c-.056.092-.153.15-.261.15h-.001c-.108 0-.205-.058-.261-.15l-1.42-2.371-.001 2.221c0 .165-.135.3-.3.3h-1.319c-.165 0-.3-.135-.3-.3v-3.513c0-.164.135-.299.3-.299h1.121c.12 0 .23.072.278.181l1.603 2.68 1.603-2.68c.048-.109.158-.181.278-.181h1.121c.165 0 .3.135.3.3v3.513c0 .165-.135.3-.3.3zm2.368-2.316h1.22c.165 0 .3.135.3.3v.684c0 .165-.135.3-.3.3h-1.22v1.032h1.322c.165 0 .3.135.3.3v.684c0 .165-.135.3-.3.3h-2.622c-.165 0-.3-.135-.3-.3v-3.513c0-.165.135-.3.3-.3h2.622c.165 0 .3.135.3.3v.684c0 .165-.135.3-.3.3h-1.322v1.032z"/></svg>
              {t('cta.line')}
            </Link>
          </div>
        </div>
      </header>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-900">
            {t('why.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
              <div className="text-amber-600 text-4xl mb-4">🌄</div>
              <h3 className="text-xl font-bold mb-4">{t('why.altitude.title')}</h3>
              <p className="text-stone-600 leading-relaxed">{t('why.altitude.description')}</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
              <div className="text-amber-600 text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-4">{t('why.freshness.title')}</h3>
              <p className="text-stone-600 leading-relaxed">{t('why.freshness.description')}</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
              <div className="text-amber-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">{t('why.direct.title')}</h3>
              <p className="text-stone-600 leading-relaxed">{t('why.direct.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 text-center">
               {/* Simplified placeholder representing the image from OCR */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-[3/4] bg-stone-300 rounded-xl" />
                 <div className="aspect-[3/4] bg-stone-300 rounded-xl" />
               </div>
               <p className="text-sm text-stone-400 mt-4 italic">Photos from our small batch roasting process</p>
            </div>
            <div className="md:w-1/2">
              <span className="text-amber-700 font-bold tracking-widest uppercase text-sm">{pt('variety')}</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-stone-900">{pt('title')}</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="font-medium text-stone-700 uppercase tracking-wide text-sm">{pt('process')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="font-medium text-stone-700 uppercase tracking-wide text-sm">{pt('altitude')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="font-bold text-amber-900">{pt('tasteNotes')}</span>
                </li>
              </ul>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 mb-8 font-sans">
                <h4 className="font-bold mb-4 text-stone-800">{pt('roastLevels.title')}</h4>
                <div className="space-y-3">
                  <p className="flex justify-between items-center text-stone-700">
                    <span>{pt('roastLevels.light')}</span>
                    <span className="w-6 h-6 rounded-full bg-amber-300 shadow-inner" />
                  </p>
                  <p className="flex justify-between items-center text-stone-700 border-t border-stone-50 pt-2">
                    <span>{pt('roastLevels.medium')}</span>
                    <span className="w-6 h-6 rounded-full bg-amber-600 shadow-inner" />
                  </p>
                  <p className="flex justify-between items-center text-stone-700 border-t border-stone-50 pt-2">
                    <span>{pt('roastLevels.dark')}</span>
                    <span className="w-6 h-6 rounded-full bg-amber-900 shadow-inner" />
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-amber-900 tracking-tighter">350฿</span>
                  <span className="text-stone-500 font-medium">/ 500g</span>
                  <span className="ml-2 text-green-700 text-[10px] font-black bg-green-100 px-2 py-0.5 rounded-full uppercase tracking-tighter border border-green-200">FREE SHIPPING</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-amber-900 tracking-tighter">599฿</span>
                  <span className="text-stone-500 font-medium">/ 1kg</span>
                  <span className="ml-2 text-amber-700 text-[10px] font-black bg-amber-100 px-2 py-0.5 rounded-full uppercase tracking-tighter border border-amber-200">WHOLESALE PRICE</span>
                </div>
              </div>
              
              <Link 
                href="https://line.me/ti/p/~jane4079" 
                target="_blank"
                className="mt-10 inline-block bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-900/10 w-full text-center"
              >
                Order via LINE (jane4079)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">{wt('title')}</h2>
          <p className="text-stone-400 text-lg mb-16 max-w-2xl mx-auto font-medium">{wt('perfectFor')}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 border border-stone-800 rounded-2xl bg-stone-800/20 backdrop-blur-sm flex items-center justify-center text-center">
              <h4 className="font-bold text-xl">{wt('whyResellers.consistent')}</h4>
            </div>
            <div className="p-8 border border-stone-800 rounded-2xl bg-stone-800/20 backdrop-blur-sm flex items-center justify-center text-center">
              <h4 className="font-bold text-xl">{wt('whyResellers.stable')}</h4>
            </div>
            <div className="p-8 border border-stone-800 rounded-2xl bg-stone-800/20 backdrop-blur-sm flex items-center justify-center text-center">
              <h4 className="font-bold text-xl">{wt('whyResellers.price')}</h4>
            </div>
            <div className="p-8 border border-stone-800 rounded-2xl bg-stone-800/20 backdrop-blur-sm flex items-center justify-center text-center">
              <h4 className="font-bold text-xl">{wt('whyResellers.privateLabel')}</h4>
            </div>
            <div className="p-8 border border-stone-800 rounded-2xl bg-amber-900/40 border-amber-800/50 flex flex-col items-center justify-center text-center sm:col-span-2 lg:col-span-2">
              <h3 className="text-amber-200 font-black text-2xl mb-2">{wt('whyResellers.sample')}</h3>
              <p className="text-amber-100/70 italic">“Try 500g first before ordering bulk.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black mb-10 text-amber-900 tracking-tight">From Chiang Mai Highlands to Your Cup</h2>
          <div className="prose prose-stone lg:prose-xl text-stone-600 max-w-none">
            <p className="mb-8 leading-relaxed">
              We source Thai Arabica grown at high altitude in Sankamphaeng, Chiang Mai. Our mission is simple: 
              Make high-quality Thai coffee accessible — without luxury pricing.
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-stone-50 p-6 rounded-2xl">
                 <h4 className="font-black text-amber-900 mb-4 uppercase tracking-tighter">Quality First</h4>
                 <ul className="space-y-3 font-medium">
                   <li className="flex gap-2">✔ Defect-screened</li>
                   <li className="flex gap-2">✔ Small batch roasting</li>
                 </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl">
                 <h4 className="font-black text-amber-900 mb-4 uppercase tracking-tighter">Direct & Honest</h4>
                 <ul className="space-y-3 font-medium">
                   <li className="flex gap-2">✔ Direct to consumer</li>
                   <li className="flex gap-2">✔ Real origins</li>
                 </ul>
              </div>
            </div>
            <blockquote className="text-2xl font-black text-stone-300 uppercase tracking-tighter my-20 text-center">
              No fake branding. No imported blends. <br/> Just <span className="text-amber-600">real Thai Arabica</span>.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-stone-900 tracking-tight">{ft('title')}</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-lg text-amber-900 mb-2">Q: {ft('freshness.q')}</h3>
              <p className="text-stone-600">{ft('freshness.a')}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-lg text-amber-900 mb-2">Q: {ft('storage.q')}</h3>
              <p className="text-stone-600">{ft('storage.a')}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-lg text-amber-900 mb-2">Q: {ft('grind.q')}</h3>
              <p className="text-stone-600">{ft('grind.a')}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-lg text-amber-900 mb-2">Q: {ft('shipping.q')}</h3>
              <p className="text-stone-600">{ft('shipping.a')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <footer id="contact" className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12 text-stone-900 tracking-tight">{ct('title')}</h2>
          <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-stone-200 max-w-2xl mx-auto border border-stone-100">
            <div className="space-y-6 text-xl">
              <p className="font-black text-amber-900 text-3xl mb-8">{ct('phone')}</p>
              <div className="h-px bg-stone-100 max-w-xs mx-auto" />
              <p className="font-bold text-stone-700">{ct('line')}</p>
              <p className="font-bold text-stone-700">{ct('gmail')}</p>
              <p className="text-stone-400 text-base mt-10">{ct('address')}</p>
            </div>
            
            <Link 
              href="https://line.me/ti/p/~jane4079" 
              target="_blank"
              className="mt-12 inline-block bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-2xl font-black text-2xl transition-all shadow-lg shadow-green-600/20"
            >
              Add Friend on LINE
            </Link>
          </div>
          
          <div className="mt-24 text-stone-300 text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Roasted Beans TH. Built with Pride in Chiang Mai.
          </div>
        </div>
      </footer>
    </div>
  );
}

# SEO Quick Checklist - Roasted Beans Chiang Mai

## Pre-Launch Checklist

### Search Engine Registration
- [ ] Submit to Google Search Console: https://search.google.com/search-console
- [ ] Submit to Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Verify domain ownership with meta tag or DNS record
- [ ] Add sitemap URL to Search Console
- [ ] Request index of important pages

### Local SEO
- [ ] Create Google Business Profile: https://business.google.com
- [ ] Verify business address: Sankamphang, Chiang Mai
- [ ] Add business phone: 089-8556550
- [ ] Set up business hours (if applicable)
- [ ] Add categories: Coffee Store, Wholesale Supplier
- [ ] Collect customer reviews on Google, Facebook, LINE

### Analytics & Tracking
- [ ] Set up Google Analytics 4: https://analytics.google.com
- [ ] Create conversion tracking for LINE CTA button
- [ ] Set up goals: Newsletter signup, Product inquiry, Contact form
- [ ] Link Google Search Console to GA4
- [ ] Create custom dashboards for KPIs

### Content SEO
- [ ] Write product descriptions with keywords
- [ ] Optimize product images with ALT text
- [ ] Add FAQ section with structured data
- [ ] Create blog posts about coffee culture
- [ ] Assign heading hierarchy (H1, H2, H3)
- [ ] Ensure all internal links are working
- [ ] Check readability score

### Technical SEO
- [ ] ✅ robots.txt configured
- [ ] ✅ sitemap.xml generating
- [ ] ✅ meta tags implemented
- [ ] ✅ JSON-LD schemas added
- [ ] ✅ Open Graph tags configured
- [ ] ✅ hreflang tags for multi-language
- [ ] ✅ Mobile responsive design
- [ ] ✅ SSL/HTTPS enabled (on production)
- [ ] ✅ Page speed optimized
- [ ] [ ] CDN configured
- [ ] [ ] Image lazy loading enabled

### Social Media
- [ ] Create Facebook Page for business
- [ ] Add LINE official account link
- [ ] Configure social meta tags for sharing
- [ ] Set up Open Graph images (1200x1500px products)
- [ ] Test social sharing on all platforms

### Domain & Hosting
- [ ] Register domain: roastedbeans.th (recommended)
- [ ] Set up SSL/HTTPS certificate
- [ ] Configure correct DNS records
- [ ] Set canonical domain (www. or non-www.)
- [ ] Enable gzip compression
- [ ] Set up automatic backups

### Accessibility
- [ ] Test keyboard navigation
- [ ] Check color contrast ratios
- [ ] Verify image alt text
- [ ] Test with screen readers
- [ ] Ensure mobile navigation works

### Performance
- [ ] Run Lighthouse audit: https://pagespeed.web.dev
- [ ] Core Web Vitals score target: 90+
- [ ] Page load time: < 3 seconds
- [ ] Mobile performance: Priority

### Link Building
- [ ] Create business listings (Thai directories)
- [ ] Reach out to coffee blogs
- [ ] Connect with local business associations
- [ ] Partner with café networks
- [ ] Create shareable content

### Monitoring (Monthly)
- [ ] Check Google Search Console for errors
- [ ] Monitor keyword rankings
- [ ] Review organic traffic in GA4
- [ ] Check backlink profile
- [ ] Analyze competitor rankings
- [ ] Audit internal links

---

## Current Implementation Status

### ✅ Completed
- Comprehensive metadata (title, description, keywords)
- Open Graph & Twitter Card tags
- JSON-LD structured data:
  - LocalBusiness schema
  - Product schema with pricing
  - Organization schema
- robots.txt with crawl directives
- sitemap.xml auto-generation
- Hreflang multi-language configuration
- Canonical URLs
- Mobile viewport optimization
- PWA manifest.json
- Schema.org validation ready

### 📋 Recommended Next Steps
1. Register domain and set up production hosting
2. Enable SSL/HTTPS certificate
3. Submit to Google Search Console
4. Create Google Business Profile for local SEO
5. Set up Google Analytics 4
6. Implement internal linking strategy
7. Add blog/resources section with keyword-rich content
8. Generate customer reviews and testimonials
9. Optimize images with Next.js Image component
10. Create FAQ page with structured data

### 🔧 Quick Commands
```bash
# Check TypeScript & Lint
npm run check

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check Lighthouse score
lighthouse https://roastedbeans.th/en
```

### 📊 Key SEO Files
- **robots.txt**: `/public/robots.txt`
- **manifest.json**: `/public/manifest.json`
- **sitemap.ts**: `/src/app/sitemap.ts` → Generates `/sitemap.xml`
- **Metadata**: `/src/app/[locale]/layout.tsx` (location of all JSON-LD)
- **Documentation**: `/SEO_IMPLEMENTATION.md`

### 🌍 Target Keywords

**Thai:**
- กาแฟไทย
- กาแฟเชียงใหม่
- กาแฟอาราบิก้า
- กาแฟเกรด A
- กาแฟส่งราคา
- กาแฟคาทิมอร์

**English:**
- Thai coffee
- Chiang Mai coffee
- Arabica coffee
- Grade A coffee
- Wholesale coffee
- Premium Thai coffee
- Direct trade coffee

### 📞 Contact Information (Used in Schema)
- **Phone**: +66-89-855-6550 (K. เจน)
- **Email**: jane4079@gmail.com
- **LINE**: jane4079
- **Location**: Sankamphang, Chiang Mai, Thailand
- **Altitude**: 1,300-1,500m

### 💡 SEO Tips for Content

1. **Product Descriptions**
   - Include origin, altitude, roast level
   - Add taste notes and brewing recommendations
   - Add pricing and shipping information

2. **Blog Content**
   - 1,500+ words for main topics
   - Include primary + related keywords
   - Add internal links to products
   - Optimize images with alt text

3. **User Generated Content**
   - Encourage customer reviews
   - Use testimonials in marketing
   - Create case studies for wholesale clients
   - Feature customer stories

4. **Local SEO**
   - Emphasize Chiang Mai origin
   - Mention altitude and soil
   - Highlight fair trade practices
   - Connect to local agricultural heritage

---

## Testing Resources

### Validation Tools
- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Validator**: https://validator.schema.org
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Structured Data Markup Helper**: https://www.google.com/webmasters/markup-helper/

### Social Media Testing
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector

### Competitor Analysis
- **SEMrush**: Check competitor keywords
- **Ahrefs**: Analyze backlink profile
- **SimilarWeb**: Compare traffic sources

---

## Emergency SEO Issues

### Issue: Not Indexed by Google
**Solution:**
1. Check robots.txt isn't blocking
2. Verify no `meta name="robots" content="noindex"`
3. Check sitemap.xml is valid
4. Request index in Search Console
5. Wait 3-7 days

### Issue: Rankings Dropped
**Solution:**
1. Check for manual actions in Search Console
2. Verify no accidental robots.txt changes
3. Check for hacking/malware
4. Review recent content changes
5. Compare competitor changes

### Issue: Low CTR from SERPs
**Solution:**
1. Improve title tag (add emotion, specificity)
2. Better meta description (clear CTA)
3. Add schema markup for rich snippets
4. Test different title variations
5. Monitor Search Console SERP data

---

**Last Updated**: February 2024
**Status**: Ready for production deployment

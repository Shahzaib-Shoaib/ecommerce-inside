import type { MetadataRoute } from "next";
    const sitemap = (): MetadataRoute.Sitemap => {    
    const baseUrl = "https://ecommerce-inside.vercel.app";


    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/aboutus`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/portfolio`, lastModified: new Date() },
        { url: `${baseUrl}/order`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/services/webdevelopment`, lastModified: new Date() },
        { url: `${baseUrl}/services/logo-design`, lastModified: new Date() },
        { url: `${baseUrl}/services/ecommerce-solutions`, lastModified: new Date() },
        { url: `${baseUrl}/services/animation`, lastModified: new Date() },
        { url: `${baseUrl}/services/illustration`, lastModified: new Date() },
        { url: `${baseUrl}/services/branding`, lastModified: new Date() },
        { url: `${baseUrl}/services/mobileapps`, lastModified: new Date() },
        { url: `${baseUrl}/services/seo-services`, lastModified: new Date() },
        { url: `${baseUrl}/services/digitalmarketing`, lastModified: new Date() },
        { url: `${baseUrl}/services/creative-copywriting`, lastModified: new Date() },

    ];
};
export default sitemap;
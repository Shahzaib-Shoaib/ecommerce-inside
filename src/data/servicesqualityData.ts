type servicesqualityDataType = {
    id:string,
    img:string,
    cat:string,
    link:string,
    points:string[]
}[]

const servicesqualityData:servicesqualityDataType = [
    {
        id:"1",
        img:"/images/service-image-1.webp",
        cat: "Mobile Application Development",
        link:"/services/mobileapps",
        points: [
            "Android Development",
            "iOS Development",
            "Hybrid Development"
        ]
    },
    {
        id:"2",
        img:"/images/service-image-2.webp",
        cat: "e-Commerce Web Development",
        link:"/services/ecommerce-solutions",
        points: [
            "Woo Commerce Website",
            "Magento Web Development",
            "Shopify Web Development"
        ]
    },
    {
        id:"3",
        img:"/images/service-image-3.webp",
        cat: "Web Solution & Development",
        link:"/services/webdevelopment",
        points: [
            "Responsive Website Development",
            "Static Website Development",
            "Landing Page Development"
        ]
    },
    {
        id:"4",
        img:"/images/service-image-4.webp",
        cat: "Branding Solutions",
        link:"/services/branding",
        points: [
            "Brochure Design",
            "Flyer Design",
            "Stationery Design",
            "Company Profile Design"
        ]
    },
    {
        id:"5",
        img:"/images/service-image-5.webp",
        cat: "Social Digital Marketing",
        link:"/services/digitalmarketing",
        points: [
            "Search Engine Optimization",
            "Social Media Marketing",
            "Pay Per Click Marketing",
        ]
    },
    {
        id:"6",
        img:"/images/service-image-6.webp",
        cat: "Application Software Solutions",
        link:"/services/softwaredevelopment",
        points: [
            "CRM Solutions",
            "ERP Solutions",
            "B2B Portal",
            "Inventory Management System",
        ]
    },
    {
        id:"7",
        img:"/images/service-image-7.webp",
        cat: "Mobile Game Development",
        link:"/",
        points: [
            "Android Game Development",
            "iOS Game Development",
            "Cross Platform Game Development",
        ]
    },
    {
        id:"8",
        img:"/images/service-image-8.webp",
        cat: "Animation Video",
        link:"/services/animation",
        points: [
            "Motion Graphics",
            "3D Animation Video",
            "Whiteboard Animation",
            "Typographic Animation",
        ]
    },
]

export default servicesqualityData;
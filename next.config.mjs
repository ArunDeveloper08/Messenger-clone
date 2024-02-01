/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // or any other swcMinify configuration
    images:{
        domains:[
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
};

export default nextConfig;


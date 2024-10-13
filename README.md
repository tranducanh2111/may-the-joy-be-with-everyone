# may-the-joy-be-with-everyone

<!-- Step by step to set up the project -->
npx create-react-app@5.0.1 frontend
cd frontend

<!-- Install dependencies: Axios, Lucide, Radix UI -->
npm install axios@1.3.4 lucide-react@0.263.1 @radix-ui/react-slot@1.0.2

<!-- Setup Tailwind CSS -->
npm install -D tailwindcss@3.3.0 postcss@8.4.21 autoprefixer@10.4.14
npx tailwindcss init -p

<!-- Set up shadcn/ui components -->
npm install -g shadcn-ui@latest

<!-- Install Prettier -->
npm install --save-dev prettier
<!-- To run Prettier -->
npm run format

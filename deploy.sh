#!/bin/bash

echo "🚀 LimoLift Development - Funnel Deployment Script"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the funnel directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    npx vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo ""
        echo "📋 Next Steps:"
        echo "1. Update your domain in Vercel dashboard"
        echo "2. Add environment variables (GA_MEASUREMENT_ID, AW_CONVERSION_ID)"
        echo "3. Update phone numbers and contact info in the code"
        echo "4. Test the conversion tracking"
        echo "5. Launch your Google Ads campaigns!"
    else
        echo "❌ Deployment failed. Check the error messages above."
    fi
else
    echo "❌ Build failed. Check the error messages above."
fi

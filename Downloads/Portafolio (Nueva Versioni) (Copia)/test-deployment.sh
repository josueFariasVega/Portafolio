#!/bin/bash
echo "🧪 Testing Vercel deployment configuration..."

echo "✅ Step 1: Checking package.json..."
if grep -q '"vite":' package.json; then
    echo "✅ Vite dependency found"
else
    echo "❌ Vite dependency missing"
    exit 1
fi

echo "✅ Step 2: Installing dependencies..."
npm ci --prefer-offline

echo "✅ Step 3: Testing build..."
npm run build

echo "✅ Step 4: Checking build output..."
if [ -f "build/index.html" ] && [ -d "build/assets" ]; then
    echo "✅ Build successful! Files generated:"
    ls -la build/
    echo "✅ Ready for Vercel deployment!"
    exit 0
else
    echo "❌ Build failed! Check output above."
    exit 1
fi

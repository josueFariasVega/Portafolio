# Fix Imports - Quick Solution
# Run in project directory

# Fix all problematic imports at once
find src/components/ui -name "*.tsx" -exec sed -i \
  -e 's/@radix-ui\/react-slot@1\.1\.2/@radix-ui\/react-slot/g' \
  -e 's/class-variance-authority@0\.7\.1/class-variance-authority/g' \
  -e 's/lucide-react@0\.487\.0/lucide-react/g' \
  -e 's/@radix-ui\/react-label@2\.1\.2/@radix-ui\/react-label/g' \
  {} \;

echo "✅ Critical imports fixed. Run: npm run dev"

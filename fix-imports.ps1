# Script para arreglar imports problemáticos
# Ejecutar en el directorio del proyecto

# Arreglar imports de Radix UI
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@radix-ui\/react-slot@1\.1\.2/@radix-ui\/react-slot/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/class-variance-authority@0\.7\.1/class-variance-authority/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/clsx@[^"]*"/clsx"/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/tailwind-merge@[^"]*"/tailwind-merge"/g'

# Arreglar otros imports problemáticos
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/sonner@2\.0\.3/sonner/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/recharts@2\.15\.2/recharts/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/react-resizable-panels@2\.1\.7/react-resizable-panels/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/react-hook-form@7\.55\.0/react-hook-form/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/react-day-picker@8\.10\.1/react-day-picker/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/next-themes@0\.4\.6/next-themes/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/lucide-react@0\.487\.0/lucide-react/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/input-otp@1\.4\.2/input-otp/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/embla-carousel-react@8\.6\.0/embla-carousel-react/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/cmdk@1\.1\.1/cmdk/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/class-variance-authority@0\.7\.1/class-variance-authority/g'

echo "✅ Imports arreglados. Ahora ejecuta: npm run dev"

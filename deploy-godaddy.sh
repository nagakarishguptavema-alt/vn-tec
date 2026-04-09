#!/usr/bin/env sh
set -e

echo "Installing dependencies..."
npm install

echo "Building production bundle..."
npm run build

if [ -f dist.zip ]; then
  rm dist.zip
fi

cd dist
zip -r ../dist.zip .
cd ..

echo "Created dist.zip for GoDaddy deployment."
echo "Upload dist.zip to your GoDaddy hosting root and extract it there."

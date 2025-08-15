#!/usr/bin/env node

/**
 * Build validation script for Netlify deployment
 * Tests the Next.js build process to catch issues before deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Next.js build for Netlify deployment...\n');

// Check Node.js version
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

if (parseInt(nodeVersion.split('.')[0].replace('v', '')) < 18) {
  console.error('❌ Node.js 18+ required for Netlify deployment');
  process.exit(1);
}

// Check required files
const requiredFiles = [
  'package.json',
  'next.config.js',
  'netlify.toml',
  'app/layout.tsx',
  'app/page.tsx'
];

console.log('\n📁 Checking required files...');
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.error(`❌ Missing: ${file}`);
    process.exit(1);
  }
}

// Test build process
try {
  console.log('\n🔨 Testing Next.js build...');
  
  // Clear any existing build artifacts
  if (fs.existsSync('.next')) {
    console.log('🧹 Cleaning existing build...');
    execSync('npm run clean || rm -rf .next', { stdio: 'inherit' });
  }
  
  // Run the build
  console.log('📦 Running npm run build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if output directory exists
  if (fs.existsSync('out')) {
    const outFiles = fs.readdirSync('out');
    console.log(`✅ Build successful! Generated ${outFiles.length} files in 'out' directory`);
    
    // Check for key pages
    const keyPages = ['index.html', '404.html'];
    for (const page of keyPages) {
      if (fs.existsSync(path.join('out', page))) {
        console.log(`✅ ${page} generated`);
      } else {
        console.warn(`⚠️  ${page} not found (may be expected)`);
      }
    }
    
  } else {
    console.error('❌ Build output directory "out" not found');
    process.exit(1);
  }
  
  console.log('\n🎉 Build validation successful!');
  console.log('📤 Ready for Netlify deployment');
  
} catch (error) {
  console.error('\n❌ Build failed:');
  console.error(error.message);
  console.log('\n🔧 Troubleshooting tips:');
  console.log('1. Check that all dependencies are installed: npm install');
  console.log('2. Verify Next.js configuration in next.config.js');
  console.log('3. Ensure no syntax errors in React components');
  console.log('4. Check for missing environment variables');
  process.exit(1);
}
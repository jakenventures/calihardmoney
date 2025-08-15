#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Netlify Deployment Setup...\n');

const requiredFiles = [
  'netlify.toml',
  'package.json',
  'next.config.js',
  'public/_redirects',
  'netlify/functions/contact.js',
  'app/page.tsx',
  'app/layout.tsx',
  'lib/cities.ts',
  'lib/seo.ts'
];

const requiredDirs = [
  'app',
  'components',
  'lib',
  'netlify/functions',
  'public'
];

let allValid = true;

// Check required files
console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING`);
    allValid = false;
  }
});

console.log('\n📂 Checking required directories:');
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`  ✅ ${dir}/`);
  } else {
    console.log(`  ❌ ${dir}/ - MISSING`);
    allValid = false;
  }
});

// Check package.json scripts
console.log('\n⚙️  Checking package.json scripts:');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredScripts = ['build', 'dev', 'start'];
  
  requiredScripts.forEach(script => {
    if (pkg.scripts && pkg.scripts[script]) {
      console.log(`  ✅ npm run ${script}`);
    } else {
      console.log(`  ❌ npm run ${script} - MISSING`);
      allValid = false;
    }
  });
} catch (e) {
  console.log('  ❌ Error reading package.json');
  allValid = false;
}

// Check Next.js config
console.log('\n🔧 Checking Next.js configuration:');
try {
  const nextConfig = fs.readFileSync('next.config.js', 'utf8');
  if (nextConfig.includes('output: \'export\'')) {
    console.log('  ✅ Static export enabled');
  } else {
    console.log('  ❌ Static export not configured');
    allValid = false;
  }
} catch (e) {
  console.log('  ❌ Error reading next.config.js');
  allValid = false;
}

// Check Netlify config
console.log('\n🌐 Checking Netlify configuration:');
try {
  const netlifyConfig = fs.readFileSync('netlify.toml', 'utf8');
  if (netlifyConfig.includes('publish = "out"')) {
    console.log('  ✅ Publish directory configured');
  } else {
    console.log('  ❌ Publish directory not configured correctly');
    allValid = false;
  }
} catch (e) {
  console.log('  ❌ Error reading netlify.toml');
  allValid = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allValid) {
  console.log('🎉 SUCCESS: Project is ready for Netlify deployment!');
  console.log('\nNext steps:');
  console.log('1. git add . && git commit -m "Ready for deployment"');
  console.log('2. git push to your repository');
  console.log('3. Connect repository to Netlify');
  console.log('4. Deploy! 🚀');
} else {
  console.log('❌ ERRORS FOUND: Please fix the issues above before deploying.');
  process.exit(1);
}

console.log('\n📖 See DEPLOYMENT.md for detailed instructions.');
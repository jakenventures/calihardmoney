#!/usr/bin/env node

/**
 * Netlify TOML validation script
 * Validates netlify.toml syntax and configuration
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Netlify configuration...\n');

// Check if netlify.toml exists
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
if (!fs.existsSync(netlifyTomlPath)) {
  console.error('❌ netlify.toml not found');
  process.exit(1);
}

// Read and validate netlify.toml
try {
  const tomlContent = fs.readFileSync(netlifyTomlPath, 'utf8');
  console.log('✅ netlify.toml file exists and is readable');
  
  // Basic syntax validation
  const lines = tomlContent.split('\n');
  let currentSection = '';
  let hasErrors = false;
  
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('#')) return;
    
    // Check for section headers
    if (trimmed.startsWith('[')) {
      if (!trimmed.endsWith(']')) {
        console.error(`❌ Line ${lineNum}: Invalid section header: ${trimmed}`);
        hasErrors = true;
        return;
      }
      currentSection = trimmed;
      console.log(`📁 Section: ${currentSection}`);
      return;
    }
    
    // Check for key-value pairs
    if (trimmed.includes('=')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=').trim();
      
      if (!key.trim()) {
        console.error(`❌ Line ${lineNum}: Empty key in assignment`);
        hasErrors = true;
        return;
      }
      
      if (!value) {
        console.error(`❌ Line ${lineNum}: Empty value for key "${key.trim()}"`);
        hasErrors = true;
        return;
      }
      
      console.log(`  ✓ ${key.trim()} = ${value}`);
    }
  });
  
  if (hasErrors) {
    console.error('\n❌ TOML syntax errors found');
    process.exit(1);
  }
  
  console.log('\n✅ TOML syntax validation passed');
  
} catch (error) {
  console.error('❌ Error reading netlify.toml:', error.message);
  process.exit(1);
}

// Check functions directory
const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
if (fs.existsSync(functionsDir)) {
  console.log('✅ Functions directory exists');
  
  const functionFiles = fs.readdirSync(functionsDir);
  if (functionFiles.length > 0) {
    console.log(`✅ Found ${functionFiles.length} function(s):`);
    functionFiles.forEach(file => {
      console.log(`  - ${file}`);
    });
  } else {
    console.warn('⚠️  Functions directory is empty');
  }
} else {
  console.warn('⚠️  Functions directory not found');
}

// Check output directory
const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  console.log('✅ Output directory "out" exists');
} else {
  console.log('ℹ️  Output directory "out" will be created during build');
}

console.log('\n🎉 Netlify configuration validation complete!');
console.log('📤 Ready for Netlify deployment');
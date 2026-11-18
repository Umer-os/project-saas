/**
 * NexusSaaS Full-Stack Orchestrator
 * Runs Express Backend (port 5000) and Vite React Frontend (port 5173) concurrently.
 */

const { spawn, execSync } = require('child_process');
const path = require('path');
const http = require('http');

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';
const npxCmd = isWin ? 'npx.cmd' : 'npx';

const backendDir = path.join(__dirname, 'backend');
const frontendDir = path.join(__dirname, 'frontend');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function logPrefixed(prefix, color, data) {
  const lines = data.toString().split('\n');
  for (const line of lines) {
    if (line.trim().length > 0) {
      console.log(`${color}${prefix}${colors.reset} ${line}`);
    }
  }
}

console.log(`${colors.bold}${colors.cyan}`);
console.log('===============================================================');
console.log('   🚀 Starting NexusSaaS Full-Stack Suite (Backend + Frontend)   ');
console.log('===============================================================\n' + colors.reset);

// 1. Spawn Backend
console.log(`${colors.cyan}[SYSTEM]${colors.reset} Launching Backend API on port 5000...`);
const backend = spawn('node', ['src/server.js'], {
  cwd: backendDir,
  env: { ...process.env, PORT: '5000' },
  shell: false,
});

backend.stdout.on('data', (data) => logPrefixed('[BACKEND]', colors.cyan, data));
backend.stderr.on('data', (data) => logPrefixed('[BACKEND ERR]', colors.red, data));

backend.on('close', (code) => {
  console.log(`${colors.yellow}[BACKEND] Process exited with code ${code}${colors.reset}`);
});

// 2. Spawn Frontend
console.log(`${colors.green}[SYSTEM]${colors.reset} Launching Frontend Vite on port 5173...`);
const frontend = spawn(npmCmd, ['run', 'dev'], {
  cwd: frontendDir,
  shell: isWin,
});

frontend.stdout.on('data', (data) => logPrefixed('[FRONTEND]', colors.green, data));
frontend.stderr.on('data', (data) => logPrefixed('[FRONTEND ERR]', colors.magenta, data));

frontend.on('close', (code) => {
  console.log(`${colors.yellow}[FRONTEND] Process exited with code ${code}${colors.reset}`);
});

// 3. Spawn Python Live Scanner service (optional: skipped if Python isn't installed)
const scannerDir = path.join(__dirname, 'scanner-service');
const pythonCmd = isWin ? 'python' : 'python3';
console.log(`${colors.magenta}[SYSTEM]${colors.reset} Launching Live Scanner service on port 8765...`);
const scanner = spawn(pythonCmd, ['-u', 'app.py'], {
  cwd: scannerDir,
  env: { ...process.env, SCANNER_PORT: '8765', BACKEND_URL: 'http://localhost:5000/api' },
  shell: false,
});

scanner.stdout.on('data', (data) => logPrefixed('[SCANNER]', colors.magenta, data));
scanner.stderr.on('data', (data) => logPrefixed('[SCANNER]', colors.magenta, data));
scanner.on('error', () => {
  console.log(`${colors.yellow}[SCANNER] Python not found - Live Scanner POS disabled. Install Python and run: pip install -r scanner-service/requirements.txt${colors.reset}`);
});

// 4. Health check waiter
let printedBanner = false;
function checkBackendHealth(retries = 30) {
  if (printedBanner || retries <= 0) return;

  const req = http.get('http://localhost:5000/api/health', (res) => {
    if (res.statusCode === 200 && !printedBanner) {
      printedBanner = true;
      setTimeout(() => {
        console.log(`\n${colors.bold}${colors.green}===============================================================`);
        console.log('       ✨ FULL-STACK SUITE IS LIVE & READY ON LOCALHOST ✨      ');
        console.log('===============================================================' + colors.reset);
        console.log(`  🌐 Frontend App:     ${colors.bold}${colors.green}http://localhost:5173${colors.reset}`);
        console.log(`  ⚙️  Backend API:      ${colors.bold}${colors.cyan}http://localhost:5000/api${colors.reset}`);
        console.log(`  📷 Live Scanner:     ${colors.bold}${colors.magenta}http://localhost:8765/api/health${colors.reset}`);
        console.log(`  🩺 Health Check:     ${colors.bold}http://localhost:5000/api/health${colors.reset}`);
        console.log('---------------------------------------------------------------');
        console.log('  🔑 Pre-Seeded Quick Login Accounts:');
        console.log(`   • ${colors.bold}Developer:${colors.reset} developer@saas.com | Developer123!`);
        console.log(`   • ${colors.bold}Admin:${colors.reset}     admin@corporate.com | Admin123!`);
        console.log(`   • ${colors.bold}Employee:${colors.reset}  sarah@corporate.com | Employee123!`);
        console.log('===============================================================\n');
      }, 500);
    }
  });

  req.on('error', () => {
    setTimeout(() => checkBackendHealth(retries - 1), 600);
  });
}

setTimeout(() => checkBackendHealth(), 800);

// Graceful cleanup handler
function cleanup() {
  console.log(`\n${colors.yellow}[SYSTEM] Shutting down full-stack servers...${colors.reset}`);

  function killProc(proc) {
    if (!proc || !proc.pid) return;
    try {
      if (isWin) {
        execSync(`taskkill /pid ${proc.pid} /T /F`, { stdio: 'ignore' });
      } else {
        proc.kill('SIGTERM');
      }
    } catch {
      // ignore
    }
  }

  killProc(backend);
  killProc(frontend);
  killProc(scanner);
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);

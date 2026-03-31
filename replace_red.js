const fs = require('fs');
const files = ['src/app/projects/page.tsx', 'src/app/projects/[id]/page.tsx'];
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/red-([0-9]+)/g, 'indigo-$1');
    content = content.replace(/rgba\(239,\s*68,\s*68,/g, 'rgba(99, 102, 241,');
    content = content.replace(/rgba\(220,\s*38,\s*38,/g, 'rgba(79, 70, 229,');
    content = content.replace(/text-indigo-500 hover:text-indigo-500/g, 'text-indigo-500 hover:text-indigo-400');
    content = content.replace(/bg-gradient-to-r from-transparent via-indigo-500\/20 to-transparent/g, 'bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent');
    content = content.replace(/from-indigo-500 to-indigo-800/g, 'from-indigo-500 to-cyan-800');
    fs.writeFileSync(file, content);
});
console.log('Done');

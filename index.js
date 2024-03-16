const cron = require('node-cron');
const { exec } = require('child_process');

// Atur jadwal untuk menjalankan perintah pm2 restart all setiap jam pada pukul 00:10
cron.schedule('10 0 * * *', () => {
    // Jalankan perintah pm2 restart all menggunakan child_process
    exec('pm2 restart all', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing pm2 restart all: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}, {
    scheduled: true,
    timezone: 'Asia/Jakarta' // Sesuaikan dengan zona waktu Anda
});

console.log('Scheduler started. Waiting for scheduled tasks...');

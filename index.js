const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function hitungGaji(jamKerja, tarifPerJam) {
    const jamNormal = 40; 
    let gaji;

    if (jamKerja <= jamNormal) {
        gaji = jamKerja * tarifPerJam;
    } else {
        const jamLembur = jamKerja - jamNormal;
        const gajiNormal = jamNormal * tarifPerJam;
        const gajiLembur = jamLembur * (1.5 * tarifPerJam);
        gaji = gajiNormal + gajiLembur;
    }

    return gaji;
}

rl.question('Masukkan jumlah jam kerja: ', (jamKerjaInput) => {
    rl.question('Masukkan tarif per jam: ', (tarifPerJamInput) => {
        const jamKerja = parseFloat(jamKerjaInput);
        const tarifPerJam = parseFloat(tarifPerJamInput);

        if (isNaN(jamKerja) || isNaN(tarifPerJam)) {
            console.log('Input harus berupa angka.');
        } else {
            const gaji = hitungGaji(jamKerja, tarifPerJam);
            console.log(`Gaji total karyawan: Rp ${gaji.toFixed(2)}`);
        }

        rl.close();
    });
});

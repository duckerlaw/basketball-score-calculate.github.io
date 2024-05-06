function totalPPG() {
    // รับค่า input จากผู้ใช้
    const twoFGM = parseFloat(document.getElementById('twoFGM').value);
    const threeFGM = parseFloat(document.getElementById('threeFGM').value);
    const FTM = parseFloat(document.getElementById('FTM').value);
    const GAME = parseFloat(document.getElementById('GAME').value);
    
    const result = ((twoFGM*2)+(threeFGM*3)+(FTM))/GAME;
    return result.toFixed(1)+" Pts ";
}

function totalFG() {
    // รับค่า input จากผู้ใช้
    const twoFGM = parseFloat(document.getElementById('twoFGM').value);
    const twoFGA = parseFloat(document.getElementById('twoFGA').value);

    // ตรวจสอบว่า number2 เป็น 0 หรือไม่
    if (twoFGA === 0 || isNaN(twoFGM) || isNaN(twoFGA)) {
        document.getElementById('result').textContent = "Please enter valid numbers and make sure the second number is not zero.";
        return;
    }

    // หาร number1 ด้วย number2 และ return ค่าผลลัพธ์
    const result = (twoFGM / twoFGA)*100;
    return result.toFixed(1)+" %FG ";
}

function total3PT() {
    // รับค่า input จากผู้ใช้
    const threeFGM = parseFloat(document.getElementById('threeFGM').value);
    const threeFGA = parseFloat(document.getElementById('threeFGA').value);

    // ตรวจสอบว่า number2 เป็น 0 หรือไม่
    if (threeFGA === 0 || isNaN(threeFGM) || isNaN(threeFGA)) {
        document.getElementById('result').textContent = "Please enter valid numbers and make sure the second number is not zero.";
        return;
    }

    // หาร number1 ด้วย number2 และ return ค่าผลลัพธ์
    const result = (threeFGM / threeFGA)*100;
    return result.toFixed(1)+" %3PT ";
}

function totalFT() {
    // รับค่า input จากผู้ใช้
    const FTM = parseFloat(document.getElementById('FTM').value);
    const FTA = parseFloat(document.getElementById('FTA').value);

    // ตรวจสอบว่า number2 เป็น 0 หรือไม่
    if (FTA === 0 || isNaN(FTM) || isNaN(FTA)) {
        document.getElementById('result').textContent = "Please enter valid numbers and make sure the second number is not zero.";
        return;
    }

    // หาร number1 ด้วย number2 และ return ค่าผลลัพธ์
    const result = (FTM / FTA)*100;
    return result.toFixed(1)+" %FT ";
}

function totalPTS() {
    // รับค่า input จากผู้ใช้
    const twoFGM = parseFloat(document.getElementById('twoFGM').value);
    const threeFGM = parseFloat(document.getElementById('threeFGM').value);
    const FTM = parseFloat(document.getElementById('FTM').value);   
    
    const result = ((twoFGM*2)+(threeFGM*3)+(FTM));
    return result.toFixed(0)+" Total Pts ";
}

function totalStats() {
    document.getElementById('result').innerHTML = "คะแนนและความแม่นยำของคุณนั่นก็คือ <br>" 
    + totalPPG() + totalPTS()+ "<br>" + totalFG() + total3PT() + totalFT();
}



function paintTheBloodyCar() {
  
    const name = document.querySelector('input[name="name"]').value;
    const color = document.querySelector('input[name="color"]').value;

   
    const unm = document.querySelector('.unm');
    const ucl = document.querySelector('.ucl');

    unm.innerText = name;
    ucl.innerText = color;
    ucl.style.color = color; 

    
    document.getElementById('result-message').style.display = 'block';

    
    document.getElementById('paint-form').style.display = 'none';
}



function getPrice() {

    let price = 0;


    const carType = document.getElementById('carType').value;




    if (carType === 'hybrid') 
    {
        price = 180; 
    } 

    else if (carType === 'electric') 
    {
        price = 250; 
    }
    
    else if (carType === 'gas') 
    {
        price = 130; 
    } 
    
    else
    {
        price = 0;
    }

    document.getElementById('price').innerText = `$${price.toFixed(2)}`;
}


console.log(`
    _   _  _____ _      _     _____   _____ _   _  ___________ _____     ___ _   _ _____ _____ _____ _   _  _____   ___________  ___  ______________ _____   ___   _   _   _ 
   | | | ||  ___| |    | |   |  _  | |_   _| | | ||  ___| ___ \\  ___|   |_  | | | /  ___|_   _|_   _| \\ | ||  ___| |  _  | ___ \\ |  \\/  |  _  | ___ \\  __ \\ / _ \\ | \\ | | | |
   | |_| || |__ | |    | |   | | | |   | | | |_| || |__ | |_/ / |__       | | | | \\ \`--.  | |   | | |  \\| || |__   | | | | |_/ / | .  . | | | | |_/ / |  \\// /_\\ \\|  \\| | | |
   |  _  ||  __|| |    | |   | | | |   | | |  _  ||  __||    /|  __|      | | | | |\\\`--. \\ | |   | | | . \` ||  __|  | | | |    /  | |\\/| | | | |    /| | __ |  _  || . \` | | |
   | | | || |___| |____| |___\\ \\_/ /   | | | | | || |___| |\\ \\| |___  /\\__/ / |_| /\\__/ / | |  _| |_| |\\  || |___  \\ \\_/ / |\\ \\  | |  | \\ \\_/ / |\\ \\| |_\\ \\| | | || |\\  | |_|
   \\_| |_/\____/\\_____/\_____/\\___/    \\_/ \\_| |_/\\____/\\_| \\_\\____/  \\____/ \\___/\\____/  \\_/  \\___/\\_| \\_/\\____/   \\___/\\_| \\_| \\_|  |_/\___/\\_| \\_|\\____/\\_| |_/\\_| \\_/ (_)
   
   `);
   
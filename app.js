const changeColour = () => {
    let x = Math.floor((Math.random() * 4) + 1);
    let side = $(`#g${x}`).text();
    console.log($(`#g${x}`).text()); 
    $(`#s${x}`).text(side);
}
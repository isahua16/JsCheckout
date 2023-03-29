function delete_cart(event)
{
    Cookies.remove(`chosen_color`);
}

let chosen_color = Cookies.get(`chosen_color`);
let page = document.querySelector(`body`);
let btn = document.querySelector(`button`);

btn.addEventListener(`click`, delete_cart);

if(chosen_color === undefined)
{
    page.insertAdjacentHTML(`beforeend`, `<h1>Please make a selection on the home page!</h1>`);
}
else
{
    page[`style`][`backgroundColor`] = chosen_color;
}
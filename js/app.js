function add_to_cart(event)
{
  Cookies.set(`chosen_color`, `${event[`target`].getAttribute(`color`)}`);
}

let btns = document.querySelectorAll(`.btn`);
for(let i= 0; i < btns.length; i++)
{
    btns[i].addEventListener(`click`, add_to_cart);
}
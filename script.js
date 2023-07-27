function imgs(x)
{
    document.querySelector('.starb').src=x
}

function colc(color)
{
    const c = document.querySelector('.circle');
    c.style.background = color
}

function act()
{
  const  togg = document.querySelector('.toggle')
  const navv = document.querySelector('.nav')

  togg.classList.toggle('active')
  navv.classList.toggle('active')
}

function pc(color)
{
    const c = document.querySelector('.pp');
    c.style.color = color
}

function lrn(color)
{
    const c = document.querySelector('.learn');
    c.style.background = color
}
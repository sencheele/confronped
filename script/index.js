var check = document.querySelector('.checkbox__input');

if (localStorage.getItem('theme') == 'dark')
{
  check.checked = true;
}
else
{
  check.checked = false;
}

if (check.checked == true)
{
  document.documentElement.style.setProperty('--body-bgcolor', '#12071E');
  document.documentElement.style.setProperty('--text-color', '#fff');
  document.documentElement.style.setProperty('--box-shadow-color', 'rgba(255, 255, 255, 0.1)');
}
else
{
  document.documentElement.style.setProperty('--body-bgcolor', '#fff');
  document.documentElement.style.setProperty('--text-color', '#2a2a2a');
  document.documentElement.style.setProperty('--box-shadow-color', 'rgba(0, 0, 0, 0.1)');
}

function changeColor() {
  if (check.checked == true)
  {
    localStorage.setItem('theme', 'dark');
    document.documentElement.style.setProperty('--body-bgcolor', '#12071E');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--box-shadow-color', 'rgba(255, 255, 255, 0.1)');
  }
  else
  {
    localStorage.setItem('theme', 'light');
    document.documentElement.style.setProperty('--body-bgcolor', '#fff');
    document.documentElement.style.setProperty('--text-color', '#2a2a2a');
    document.documentElement.style.setProperty('--box-shadow-color', 'rgba(0, 0, 0, 0.1)');
  }
}

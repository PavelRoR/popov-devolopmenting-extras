<?php

$now = strtotime('now');
$dates = array(strtotime('2021-09-22'), strtotime('2021-09-23'), strtotime('2021-09-24'));

$todays = array('12 900р.', '13 900р.');
$sales = array('2 000р.', '1 000р.');
$links = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1168&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1169&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1170&clean=true&lg=ru');
$prepLinks = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1174&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1175&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1176&clean=true&lg=ru');

if ($now < $dates[0]){
    $sale = $sales[0];
    $today = $todays[0];
    $link = $links[0];
    $prepLink = $prepLinks[0];
}
elseif (($now >= $dates[0]) && ($now < $dates[1])) {
    $sale = $sales[1];
    $today = $todays[1];
    $link = $links[1];
    $prepLink = $prepLinks[1];
}
else {
    $link = $links[2];
    $prepLink = $prepLinks[2];
}
?>
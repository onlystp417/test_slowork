export function openBuyLink() {
  const locale = JSON.parse(JSON.stringify(localStorage.getItem('lang')));
  if (locale === 'zhTW') {
    window.open('https://myship.7-11.com.tw/general/detail/GM2301123831744', '_blank');
  } else {
    window.open(
      'http://www.sloworkpublishing.com/shop/index.php?route=product/product&path=68_70&product_id=104',
      '_blank'
    );
  }
}

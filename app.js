'use strict';
const clinic = window.CLINIC || {};
const phone = String(clinic.whatsapp || '').replace(/\D/g, '');
const address = String(clinic.mapsQuery || clinic.address || '').trim();
if (/^55\d{10,11}$/.test(phone)) {
  const message = 'Olá! Gostaria de agendar uma consulta com o Dr. Elimar Junior. Quais são os horários disponíveis?';
  document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message); });
}
if (address) {
  document.querySelector('[data-maps]').href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address);
  document.querySelector('[data-waze]').href = 'https://www.waze.com/ul?q=' + encodeURIComponent(address) + '&navigate=yes';
}
if (clinic.crm || clinic.rqe) document.querySelector('#credentials').textContent = [clinic.crm ? 'CRM ' + clinic.crm : 'CRM a confirmar', clinic.rqe ? 'RQE ' + clinic.rqe : 'RQE a confirmar'].join(' · ');
document.querySelector('#year').textContent = new Date().getFullYear();
const privacy = document.querySelector('#privacy-dialog');
document.querySelector('#privacy-button').addEventListener('click', () => privacy.showModal());
privacy.querySelector('.dialog-close').addEventListener('click', () => privacy.close());
privacy.querySelector('.dialog-dismiss').addEventListener('click', () => privacy.close());
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOP6f7fdAreQPAQe7NKQR8uC0adAsysrrBTtpWHdD1P6KWcS8oZSl4LDboHg9MhA7e/exec';

/** Serves the club page and forwards validated registrations to the existing Sheet. */
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'GET') return res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(PAGE);
  if (req.method !== 'POST') return res.status(405).setHeader('Allow', 'GET, POST').json({ok:false,error:'Método no permitido.'});
  const data = typeof req.body === 'string' ? parseBody(req.body) : req.body;
  if (!data || typeof data.nombre !== 'string' || data.nombre.trim().length < 2 || data.nombre.length > 80 || !Number.isInteger(Number(data.edad)) || Number(data.edad) < 1 || Number(data.edad) > 120 || !['XS','S','M','L','XL','XXL'].includes(data.playera) || typeof data.duda !== 'string' || data.duda.trim().length < 5 || data.duda.length > 1000 || data.aceptoRegla !== true || !validBirthDate(data.fechaNacimiento)) {
    return res.status(400).json({ok:false,error:'Revisa los cinco campos y acepta la última regla.'});
  }
  try {
    const response = await fetch(SCRIPT_URL, {
      method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({nombre:data.nombre,edad:Number(data.edad),playera:data.playera,duda:data.duda,fechaNacimiento:data.fechaNacimiento,aceptoRegla:true}),
      signal:AbortSignal.timeout(45000),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) return res.status(502).json({ok:false,error:'No pudimos confirmar el registro. Intenta de nuevo en un momento.'});
    return res.status(200).json({ok:true});
  } catch {
    return res.status(502).json({ok:false,error:'No pudimos confirmar el registro. Revisa tu conexión antes de volver a intentarlo.'});
  }
}

function validBirthDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || value < '1900-01-01') return false;
  const date = new Date(value + 'T00:00:00Z');
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0,10) === value && value <= new Date().toLocaleDateString('en-CA', {timeZone:'America/Monterrey'});
}

function parseBody(body) { try { return JSON.parse(body); } catch { return null; } }

const PAGE = String.raw`<!doctype html>
<html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bienvenido al Club | Adultxs Inexpertxs</title>
<meta name="description" content="Crecer no traía instrucciones. Así que armamos un club. Únete a Adultxs Inexpertxs.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
:root{--black:#000;--white:#fff;--space:clamp(24px,4vw,64px);--font:'Bebas Neue',Impact,sans-serif}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--black);color:var(--white);font-family:var(--font)}
a{color:inherit}button,input,select,textarea{font:inherit}button,a,input,textarea,select{-webkit-tap-highlight-color:transparent}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid currentColor;outline-offset:5px}
header{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px var(--space);border-bottom:1px solid var(--white)}.brand{display:flex;align-items:center;gap:16px;text-decoration:none;font-size:25px;line-height:.9}.brand img{width:60px;height:60px;object-fit:contain}nav{display:flex;gap:32px;font-size:22px}nav a{text-decoration:none}nav a:hover{text-decoration:underline}.menu-button{display:none;border:1px solid var(--white);background:var(--black);color:var(--white);padding:10px 16px;font-size:20px}
.ribbon{padding:12px 24px;background:var(--white);color:var(--black);text-align:center;font-size:18px;letter-spacing:1px}
main{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);max-width:1600px;margin:auto;align-items:stretch}.intro,.register{padding:56px var(--space);min-width:0}.eyebrow{font-size:17px;letter-spacing:2px;margin:0 0 24px}h1{font-size:clamp(76px,8.3vw,132px);font-weight:400;line-height:.91;margin:0 0 40px;letter-spacing:-1px}.rules p{font-size:clamp(26px,2.55vw,38px);line-height:1.12;margin:0;padding:24px 0;border-top:1px solid var(--white)}.closing{font-size:clamp(32px,3vw,46px);line-height:1.05;margin:40px 0 0;max-width:14em}
.register{background:var(--white);color:var(--black)}h2{font-size:clamp(48px,5.5vw,80px);line-height:.95;font-weight:400;margin:0 0 20px}.lead{font-size:21px;line-height:1.3;max-width:27em;margin:0 0 32px}.fields{display:grid;gap:24px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:24px}label{display:block;font-size:19px;letter-spacing:1px;margin-bottom:9px}input,select,textarea{display:block;width:100%;min-width:0;border:1px solid var(--black);border-radius:0;background:var(--white);color:var(--black);padding:14px;font-size:22px}textarea{resize:vertical;min-height:128px}input::placeholder,textarea::placeholder{color:var(--black);opacity:1;font-size:18px}.submit,.primary{display:flex;justify-content:space-between;align-items:center;gap:16px;width:100%;border:1px solid var(--black);background:var(--black);color:var(--white);padding:18px 20px;font-size:27px;cursor:pointer}.submit{margin-top:28px}.submit:hover,.primary:hover{background:var(--white);color:var(--black)}button:disabled{cursor:wait}.note{font-size:16px;line-height:1.4;margin:18px 0 0}.error{font-size:20px;line-height:1.4;border-left:4px solid currentColor;padding-left:12px}.success{padding:32px 0}.success p{font-size:26px;line-height:1.2}.success a{display:inline-block;padding:16px 20px;background:var(--black);color:var(--white);font-size:24px;text-decoration:none;margin-top:24px}
dialog{width:min(620px,calc(100% - 32px));max-height:calc(100dvh - 32px);padding:40px;border:1px solid var(--white);background:var(--black);color:var(--white);overflow:auto}dialog::backdrop{background:rgb(0 0 0 / .85)}dialog h2{font-size:64px}dialog p{font-size:25px;line-height:1.2}.check{display:flex;align-items:flex-start;gap:14px;font-size:20px;line-height:1.3;margin:28px 0}.check input{width:22px;height:22px;flex-shrink:0;accent-color:var(--white)}dialog .primary{border-color:var(--white);background:var(--white);color:var(--black)}dialog .primary:disabled{opacity:.55;cursor:not-allowed}.secondary{background:none;border:0;color:var(--white);text-decoration:underline;padding:18px 0;font-size:18px;cursor:pointer}footer{display:flex;justify-content:space-between;gap:24px;border-top:1px solid var(--white);padding:24px var(--space);font-size:16px}footer a{text-decoration:none}
@media(max-width:800px){main{display:block}.intro,.register{padding:40px 24px}h1{font-size:clamp(76px,16vw,120px)}.rules p{font-size:29px}.closing{font-size:36px}h2{font-size:58px}.menu-button{display:block}header{position:relative;padding:20px 24px}.brand{font-size:22px}.brand img{width:48px;height:48px}nav{display:none;position:absolute;top:100%;left:0;right:0;background:var(--black);border-bottom:1px solid var(--white);padding:24px;z-index:2}nav.open{display:flex;flex-direction:column;gap:24px}.ribbon{font-size:15px}.pair{gap:16px}dialog{padding:28px}dialog h2{font-size:54px}footer{flex-direction:column}.lead{font-size:21px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}

/* Same hamburger control and right-hand navigation panel as the main site. */
.menu-button{display:inline-grid;width:34px;height:34px;place-items:center;gap:0;padding:10px 0;border:0;background:transparent;color:var(--white);cursor:pointer}
.menu-button span{grid-column:1;grid-row:1;display:block;width:26px;height:1px;background:var(--white)}.menu-button span:first-child{transform:translateY(-7px)}.menu-button span:last-child{transform:translateY(7px)}
body:has(dialog[open]){overflow:hidden}#main-menu{position:fixed;inset:0 0 0 auto;margin:0;width:min(100%,420px);height:100dvh;max-height:100dvh;max-width:100%;padding:28px 32px 48px;border:0;border-left:1px solid var(--white);background:var(--black);color:var(--white)}#main-menu::backdrop{background:rgb(0 0 0 / .32)}
#main-menu .menu-close{display:block;margin:0 0 72px auto;padding:0;border:0;background:none;color:var(--white);font-size:16px;letter-spacing:.12em;cursor:pointer}
#main-menu .nav-links{position:static;display:grid;gap:26px;padding:0;border:0;background:none}#main-menu .nav-links a{display:inline-block;width:fit-content;font-size:clamp(2.4rem,5vw,3.8rem);letter-spacing:.02em;line-height:1;text-decoration:none}#main-menu .nav-links a:hover{text-decoration:underline;text-underline-offset:.22em}
</style></head><body>
<header><a class="brand" href="/" aria-label="Adultxs Inexpertxs, inicio"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQAAAADrRVxmAAACT0lEQVR4nN1UO26dUBA9l4v8KCzx0jlNYAkpXeWxFFfZQbpIIUrkhWQleCeULnFHnq6ZaD73A5E34JH4HWbunPkC709u4ktlz4/jAZgPGg4H4OYI3B2dXOigMSRAxdG616jwjJ2ciGgqgY6IttLkgc+ZsoIjljVrfDqwdaJANJY+WOZocg/gZw2co4aSOFGwb0/6SsKkAmpAgN5lYkLhGWMCFr5dMRhAmmJCr0C4QsMYzK97snR1MUveIm+DnVHbjzW5NY3AH3w1xnlzBpxTypGLrURGBXohCmTqqRcGBTgEkSlqpAL0CkhyvxSmFG/dLBqSKMd6yznmo+igSh9fq+wLPgDkuW6nNWrICf/HgliXUMKVPeXI8IYJVmwxiyLtAkcTGYFk8iO+iAa0nXzWSLxY2jn2oVcNLvEfRKlQSkjBcWd8j3A3w3M2N3gLf071RzRptHfq3aE2unsva9mnlQasQFjkgEaBHvjGPEKh8Zs9QTpaACeNBYkq1kUsWXI+JqDX6nO1H+D1DwMzMN7h1opjJqdfCxPR3uomXHhKg6WaAV4GYZO24oh72R7hsRhCY00KLMArfzspsJHu2bguSunpibaW01IDawO8OpAug10KV5tbtR03mZs4d0x7sOZ3mt12kVVWpYq8fEhzYzF5GROx176vEzBqOpu4cjBpqT9LiNIOnD5gSAPeql9Ki2117MYjAUHW520eX93IeXHbjrPNp8TcBG+J1ULQigvFpZEW6pQBLwDyGVKFEpBmub6x+Z0xOXZyj7+lxX4o34/8A2c34DQZwpVUAAAAAElFTkSuQmCC"><span>ADULTXS<br>INEXPERTXS</span></a><button type="button" class="menu-button" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-menu"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></button><dialog id="main-menu" aria-label="Navegación principal"><button type="button" class="menu-close" aria-label="Cerrar menú">CERRAR</button><nav class="nav-links" aria-label="Menú principal"><a href="/">HOME</a><a href="/nosotrxs">NOSOTRXS</a><a href="/conocenos">CONÓCENOS</a><a href="/comunidad">COMUNIDAD</a><a href="/merch">MERCH</a><a href="/contactanos">CONTACTANOS</a></nav></dialog></header>
<main><section class="intro" id="club" aria-labelledby="welcome"><p class="eyebrow">UN CLUB PARA LXS QUE VAN IMPROVISANDO</p><h1 id="welcome">BIENVENIDO<br>AL CLUB.</h1>
<div class="rules"><p>LA PRIMERA REGLA DE ESTE CLUB ES…<br>HABLA SOBRE EL CLUB DE LXS ADULTXS INEXPERTXS.</p><p>LA SEGUNDA REGLA ES…<br>SIEMPRE HABLA SOBRE EL CLUB DE LXS ADULTXS INEXPERTXS.</p><p>LA TERCERA REGLA DEL CLUB ES…<br>SI ES TU PRIMERA VEZ AQUÍ, DEBES COMPARTIR TU DUDA MÁS GRANDE SOBRE LA VIDA ADULTX.</p></div>
<p class="closing">CRECER NO TRAÍA INSTRUCCIONES. ASÍ QUE ARMAMOS UN CLUB.</p></section>
<section class="register" id="registro" aria-labelledby="join"><div id="form-content"><p class="eyebrow">NO NECESITAS TENERLO TODO RESUELTO.</p><h2 id="join">¿TE NOS UNES<br>O QUÉ?</h2><p class="lead">CINCO DATOS. CERO PREGUNTAS SOBRE TU PLAN DE VIDA. LO DEMÁS LO APRENDEMOS EN EL CAMINO.</p>
<form id="registration"><div class="fields"><div><label for="nombre">NOMBRE</label><input id="nombre" name="nombre" required minlength="2" maxlength="80" autocomplete="name" placeholder="TU NOMBRE DE CIVIL"></div><div><label for="fechaNacimiento">FECHA DE NACIMIENTO</label><input id="fechaNacimiento" name="fechaNacimiento" type="date" required min="1900-01-01" autocomplete="bday"></div><div class="pair"><div><label for="edad">EDAD</label><input id="edad" name="edad" type="number" required min="1" max="120" step="1" inputmode="numeric" placeholder="TUS AÑOS"></div><div><label for="playera">MEDIDA DE PLAYERA</label><select id="playera" name="playera" required><option value="">ELIGE TU TALLA</option><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option></select></div></div><div><label for="duda">TU DUDA MÁS GRANDE SOBRE LA VIDA ADULTX</label><textarea id="duda" name="duda" required minlength="5" maxlength="1000" placeholder="¿QUÉ ES ESO QUE NADIE TE EXPLICÓ SOBRE SER ADULTX?"></textarea></div></div><button class="submit" type="submit">SOY UN INEXPERTX <span aria-hidden="true">↗</span></button><p class="note">TUS DATOS SE GUARDAN EN EL REGISTRO DEL CLUB. <a href="/aviso-privacidad.html">AVISO DE PRIVACIDAD</a>.</p><p class="error" id="error" role="alert" hidden></p></form></div>
<div id="success" class="success" hidden><p class="eyebrow">YA ESTÁS DENTRO.</p><h2 tabindex="-1" id="success-title">YA ERES<br>DEL CLUB.</h2><p><span id="member"></span>, OFICIALMENTE ERES UNX ADULTX INEXPERTX.</p><a href="/comunidad">EXPLORAR LA COMUNIDAD ↗</a></div></section></main>
<footer><a href="/aviso-privacidad.html">AVISO DE PRIVACIDAD</a><a href="/">CRECER NO TRAÍA INSTRUCCIONES.</a></footer>
<dialog id="last-rule" aria-labelledby="last-title"><p class="eyebrow">ANTES DE ENTRAR…</p><h2 id="last-title">LA ÚLTIMA REGLA.</h2><p>COMPARTIRÁS CON LXS DEMÁS LO QUE SIGNIFICA SER UN ADULTX INEXPERTX.</p><p>TU DUDA, TUS TROPIEZOS, LO QUE APRENDISTE Y LO QUE TODAVÍA NO ENTIENDES. SIN FINGIR QUE YA TIENES LA VIDA RESUELTA.</p><label class="check"><input id="accept" type="checkbox">LE ENTRO. ACEPTO COMPARTIR MI EXPERIENCIA INEXPERTA CON EL CLUB.</label><button id="confirm" class="primary" type="button" disabled>ACEPTO. SOY INEXPERTX ↗</button><button id="cancel" class="secondary" type="button">ME DIO NERVIO, TODAVÍA NO</button></dialog>
<script>
const form=document.querySelector('#registration'),dialog=document.querySelector('#last-rule'),accept=document.querySelector('#accept'),confirmButton=document.querySelector('#confirm'),error=document.querySelector('#error');
const birthdayInput=document.querySelector('#fechaNacimiento'),today=new Date();
birthdayInput.max=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
let sending=false;
const menuButton=document.querySelector('.menu-button'),menu=document.querySelector('#main-menu');
menuButton.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','true');menu.showModal()});
menu.addEventListener('close',()=>menuButton.setAttribute('aria-expanded','false'));
menu.querySelector('.menu-close').addEventListener('click',()=>menu.close());
menu.addEventListener('click',e=>{if(e.target===menu){const box=menu.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)menu.close()}});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.close()));
form.addEventListener('submit',e=>{e.preventDefault();if(sending)return;if(!form.reportValidity())return;error.hidden=true;accept.checked=false;confirmButton.disabled=true;dialog.showModal()});
accept.addEventListener('change',()=>{confirmButton.disabled=!accept.checked||sending});
document.querySelector('#cancel').addEventListener('click',()=>{if(!sending)dialog.close()});
dialog.addEventListener('cancel',e=>{if(sending)e.preventDefault()});
confirmButton.addEventListener('click',async()=>{if(sending||!accept.checked)return;sending=true;confirmButton.disabled=true;accept.disabled=true;document.querySelector('#cancel').disabled=true;confirmButton.textContent='REGISTRANDO…';const data=Object.fromEntries(new FormData(form));data.edad=Number(data.edad);data.aceptoRegla=true;try{const response=await fetch(location.pathname,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const result=await response.json();if(!response.ok||result.ok!==true)throw new Error(result.error||'No pudimos confirmar el registro.');dialog.close();document.querySelector('#form-content').hidden=true;document.querySelector('#member').textContent=data.nombre;document.querySelector('#success').hidden=false;document.querySelector('#success-title').focus();}catch(err){dialog.close();error.textContent=err.message;error.hidden=false;error.scrollIntoView({block:'center'});}finally{sending=false;accept.disabled=false;document.querySelector('#cancel').disabled=false;confirmButton.disabled=!accept.checked;confirmButton.textContent='ACEPTO. SOY INEXPERTX ↗';}});
</script></body></html>`;

// floating musical notes
  const field = document.getElementById('noteField');
  const notes = ['♪','♫','♩','♬'];
  for(let i=0;i<14;i++){
    const n = document.createElement('span');
    n.className='note';
    n.textContent = notes[Math.floor(Math.random()*notes.length)];
    n.style.left = Math.random()*100 + 'vw';
    n.style.fontSize = (14 + Math.random()*18) + 'px';
    n.style.animationDuration = (10 + Math.random()*14) + 's';
    n.style.animationDelay = (Math.random()*12) + 's';
    field.appendChild(n);
  }

  const IP = 'play.puffhaven.net';
  function copyIP(noteEl){
    navigator.clipboard?.writeText(IP).then(()=>{
      if(noteEl){ noteEl.textContent = 'Copied! See you at spawn. 🎀'; setTimeout(()=>noteEl.textContent='\u00A0',2200); }
    }).catch(()=>{
      if(noteEl){ noteEl.textContent = IP; }
    });
  }
  document.getElementById('heroCopy').addEventListener('click', ()=>copyIP(document.getElementById('copyNote')));
  document.getElementById('mainCopy').addEventListener('click', ()=>copyIP(document.getElementById('copyNote')));
  document.getElementById('navCopy').addEventListener('click', ()=>copyIP(document.getElementById('copyNote')));

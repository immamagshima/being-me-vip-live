const meetingThemes=[
{paper:'#241a30',panel:'#33263e',accent:'#e7b5da',light:'#f0e9ee',path:'M40 86 C80 4 230 4 275 86'},
{paper:'#211d32',panel:'#302b43',accent:'#cec0ee',light:'#eeebf6',path:'M50 60 C50 8 175 8 175 60 C175 112 50 112 50 60 M145 60 C145 8 270 8 270 60 C270 112 145 112 145 60'},
{paper:'#192a2a',panel:'#273b3b',accent:'#b6d6ca',light:'#eaf2ef',path:'M20 70 C85 0 130 120 195 50 C230 15 265 30 300 60'},
{paper:'#2d2421',panel:'#41332d',accent:'#e3c4a9',light:'#f5ede6',path:'M20 90 Q125 100 180 50 Q210 20 300 25 M180 50 Q235 65 275 100'},
{paper:'#2d2030',panel:'#422c43',accent:'#debdd7',light:'#f4eaf1',path:'M20 25 Q145 25 210 60 Q250 85 300 90 M20 110 Q150 110 210 65 Q255 35 300 25'},
{paper:'#29251f',panel:'#3b352c',accent:'#e5cfa8',light:'#f5f0e6',path:'M218 30 C180 0 70 10 70 65 C70 120 245 125 245 65 C245 55 244 48 239 42'}
];
function applyMeetingTheme(i){const t=meetingThemes[i];for(const [key,value] of Object.entries(t))if(key!=='path')document.documentElement.style.setProperty('--'+key,value);document.body.dataset.meeting=i;let art=document.getElementById('meetingArt');if(!art){art=document.createElement('div');art.id='meetingArt';art.setAttribute('aria-hidden','true');document.querySelector('.stage').prepend(art)}art.innerHTML='<svg viewBox="0 0 320 130" fill="none"><path d="M38 85C-5 35 80 0 144 23C197 42 295 2 302 64C308 116 224 126 170 104C110 79 77 132 38 85Z" fill="currentColor" opacity=".09" transform="rotate('+((i-2)*4)+' 160 65)"/><path d="'+t.path+'" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="'+t.path+'" transform="translate(4 5)" stroke="currentColor" stroke-opacity=".09" stroke-width="15"/></svg>';}
applyMeetingTheme(0);

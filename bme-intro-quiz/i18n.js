(function(){
  const SK='bmeintro_quiz_lang';
  let lang=localStorage.getItem(SK)||'en';

  function apply(l){
    lang=l; localStorage.setItem(SK,l);
    document.documentElement.lang=l==='zh'?'zh-Hant':'en';
    document.querySelectorAll('[data-lang]').forEach(el=>{
      el.style.display=el.dataset.lang===l?'':'none';
    });
    document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
      el.textContent=el.dataset[l];
    });
    const btn=document.getElementById('langToggle');
    if(btn) btn.textContent=l==='zh'?'EN':'中文';
    document.dispatchEvent(new CustomEvent('langchange',{detail:{lang:l}}));
  }
  function toggle(){ apply(lang==='zh'?'en':'zh'); }
  function get(){ return lang; }

  document.addEventListener('DOMContentLoaded',()=>apply(lang));

  window.I18n={apply,toggle,get};
})();

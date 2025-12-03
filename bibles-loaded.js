(function(){
    window._OBS_BIBLES = window._OBS_BIBLES || {};
    window._OBS_BIBLES["Telugu Bible (తెలుగు బైబిల్)"] = window.TELUGU_BIBLE || {};
    if(typeof window.ObsBiblePlugin === 'undefined') window.ObsBiblePlugin = {};
    window.ObsBiblePlugin.setAllBiblesLoaded = window.ObsBiblePlugin.setAllBiblesLoaded || function(obj){ window._OBS_BIBLES = obj; };
    try { window.ObsBiblePlugin.setAllBiblesLoaded(window._OBS_BIBLES); } catch(e){}
})();